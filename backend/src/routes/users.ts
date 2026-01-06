
import express from 'express'
import { prisma } from '../prismaClient'
import bcrypt from 'bcrypt'

const router = express.Router()


// S'abonner à un utilisateur
router.post('/:id/follow', async (req, res) => {
  try {
    const followedId = parseInt(req.params.id, 10)
    const { followerId } = req.body
    if (!followerId || isNaN(followedId)) {
      return res.status(400).json({ error: 'followerId (dans le body) et id (dans l\'URL) requis' })
    }
    if (followerId === followedId) {
      return res.status(400).json({ error: 'On ne peut pas se suivre soi-même' })
    }
    // Vérifier que les deux utilisateurs existent
    const [follower, followed] = await Promise.all([
      prisma.user.findUnique({ where: { id: followerId } }),
      prisma.user.findUnique({ where: { id: followedId } })
    ])
    if (!follower || !followed) {
      return res.status(404).json({ error: 'Utilisateur introuvable' })
    }
    // Vérifier si déjà abonné
    const existing = await prisma.userSubscription.findUnique({
      where: { followerId_followedId: { followerId, followedId } }
    })
    if (existing) {
      return res.status(400).json({ error: 'Déjà abonné à cet utilisateur' })
    }
    // Créer l'abonnement
    await prisma.userSubscription.create({
      data: { followerId, followedId }
    })
    res.status(201).json({ message: 'Abonnement réussi' })
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur', details: error })
  }
})

// Se désabonner d'un utilisateur
router.delete('/:id/unfollow', async (req, res) => {
  try {
    const followedId = parseInt(req.params.id, 10)
    const { followerId } = req.body
    if (!followerId || isNaN(followedId)) {
      return res.status(400).json({ error: 'followerId (dans le body) et id (dans l\'URL) requis' })
    }
    const existing = await prisma.userSubscription.findUnique({
      where: { followerId_followedId: { followerId, followedId } }
    })
    if (!existing) {
      return res.status(404).json({ error: 'Abonnement non trouvé' })
    }
    await prisma.userSubscription.delete({
      where: { followerId_followedId: { followerId, followedId } }
    })
    res.status(200).json({ message: 'Désabonnement réussi' })
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur', details: error })
  }
})

// Liste des abonnés (followers)
router.get('/:id/followers', async (req, res) => {
  try {
    const userId = parseInt(req.params.id, 10)
    if (isNaN(userId)) {
      return res.status(400).json({ error: 'id utilisateur invalide' })
    }
    const followers = await prisma.userSubscription.findMany({
      where: { followedId: userId },
      include: { follower: true }
    })
    res.json({ followers: followers.map(f => f.follower) })
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur', details: error })
  }
})

// Liste des suivis (followings)
router.get('/:id/following', async (req, res) => {
  try {
    const userId = parseInt(req.params.id, 10)
    if (isNaN(userId)) {
      return res.status(400).json({ error: 'id utilisateur invalide' })
    }
    const followings = await prisma.userSubscription.findMany({
      where: { followerId: userId },
      include: { followed: true }
    })
    res.json({ following: followings.map(f => f.followed) })
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur', details: error })
  }
})


// Route pour suivre un utilisateur (placée en haut pour éviter les conflits)
router.post('/:id/follow', async (req, res) => {
  try {
    console.log('Requête follow reçue:', req.params.id, req.body)
    const followedId = parseInt(req.params.id, 10)
    const { followerId } = req.body
    if (!followerId || isNaN(followedId)) {
      return res.status(400).json({ error: 'followerId (dans le body) et id (dans l\'URL) requis' })
    }
    if (followerId === followedId) {
      return res.status(400).json({ error: 'On ne peut pas se suivre soi-même' })
    }
    // Vérifier que les deux utilisateurs existent
    const [follower, followed] = await Promise.all([
      prisma.user.findUnique({ where: { id: followerId } }),
      prisma.user.findUnique({ where: { id: followedId } })
    ])
    if (!follower || !followed) {
      return res.status(404).json({ error: 'Utilisateur introuvable' })
    }
    // Vérifier si déjà abonné
    const existing = await prisma.userSubscription.findUnique({
      where: { followerId_followedId: { followerId, followedId } }
    })
    if (existing) {
      return res.status(400).json({ error: 'Déjà abonné à cet utilisateur' })
    }
    // Créer l'abonnement
    const sub = await prisma.userSubscription.create({
      data: { followerId, followedId }
    })
    console.log('Abonnement créé:', sub)
    res.status(201).json({ message: 'Abonnement réussi' })
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur', details: error })
  }
})

// Route pour lister les utilisateurs suivis (followings) d'un utilisateur
router.get('/:id/following', async (req, res) => {
  try {
    const userId = parseInt(req.params.id, 10)
    console.log('GET /:id/following appelé pour userId:', userId)
    if (isNaN(userId)) {
      return res.status(400).json({ error: 'id utilisateur invalide' })
    }
    // Cherche tous les suivis (followings)
    const followings = await prisma.userSubscription.findMany({
      where: { followerId: userId },
      include: { followed: true }
    })
    console.log('Résultat followings:', followings)
    res.json({ following: followings.map(f => f.followed) })
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur', details: error })
  }
})

// Création d'un utilisateur sans authentification
router.post('/', async (req, res) => {
  try {
    const { pseudo, firstname, lastname, email, password } = req.body
    if (!pseudo || !email || !password) {
      return res.status(400).json({ error: 'pseudo, email et password sont requis' })
    }
    // Vérifier unicité email et pseudo
    const existing = await prisma.user.findFirst({
      where: { OR: [{ email }, { pseudo }] }
    })
    if (existing) {
      return res.status(400).json({ error: 'Email ou pseudo déjà utilisé' })
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await prisma.user.create({
      data: { pseudo, firstname, lastname, email, password: hashedPassword }
    })
    res.status(201).json({ message: 'Utilisateur créé', user })
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur', details: error })
  }
})

// Route pour se désabonner d'un utilisateur
router.delete('/:id/unfollow', async (req, res) => {
  try {
    const followedId = parseInt(req.params.id, 10)
    const { followerId } = req.body
    if (!followerId || isNaN(followedId)) {
      return res.status(400).json({ error: 'followerId (dans le body) et id (dans l\'URL) requis' })
    }
    // Vérifier si l'abonnement existe
    const existing = await prisma.userSubscription.findUnique({
      where: { followerId_followedId: { followerId, followedId } }
    })
    if (!existing) {
      return res.status(404).json({ error: 'Abonnement non trouvé' })
    }
    // Supprimer l'abonnement
    await prisma.userSubscription.delete({
      where: { followerId_followedId: { followerId, followedId } }
    })
    res.status(200).json({ message: 'Désabonnement réussi' })
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur', details: error })
  }
})

// Route pour suivre un utilisateur
router.post('/:id/follow', async (req, res) => {
  try {
    console.log('Requête follow reçue:', req.params.id, req.body)
    const followedId = parseInt(req.params.id, 10)
    const { followerId } = req.body
    if (!followerId || isNaN(followedId)) {
      return res.status(400).json({ error: 'followerId (dans le body) et id (dans l\'URL) requis' })
    }
    if (followerId === followedId) {
      return res.status(400).json({ error: 'On ne peut pas se suivre soi-même' })
    }
    // Vérifier que les deux utilisateurs existent
    const [follower, followed] = await Promise.all([
      prisma.user.findUnique({ where: { id: followerId } }),
      prisma.user.findUnique({ where: { id: followedId } })
    ])
    if (!follower || !followed) {
      return res.status(404).json({ error: 'Utilisateur introuvable' })
    }
    // Vérifier si déjà abonné
    const existing = await prisma.userSubscription.findUnique({
      where: { followerId_followedId: { followerId, followedId } }
    })
    if (existing) {
      return res.status(400).json({ error: 'Déjà abonné à cet utilisateur' })
    }
    // Créer l'abonnement
    const sub = await prisma.userSubscription.create({
      data: { followerId, followedId }
    })
    console.log('Abonnement créé:', sub)
    res.status(201).json({ message: 'Abonnement réussi' })
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur', details: error })
  }
})

// Route pour lister les followers d'un utilisateur
router.get('/:id/followers', async (req, res) => {
  try {
    const userId = parseInt(req.params.id, 10)
    if (isNaN(userId)) {
      return res.status(400).json({ error: 'id utilisateur invalide' })
    }
    // Cherche tous les abonnés (followers)
    const followers = await prisma.userSubscription.findMany({
      where: { followedId: userId },
      include: { follower: true }
    })
    res.json({ followers: followers.map(f => f.follower) })
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur', details: error })
  }
})

export default router
