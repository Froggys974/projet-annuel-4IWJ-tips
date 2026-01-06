import express from 'express'
import { prisma } from '../prismaClient'

const router = express.Router()

// Signaler un tip
router.post('/tip', async (req, res) => {
  try {
    const { tipId, userId, reason } = req.body
    if (!tipId || !userId || !reason) {
      return res.status(400).json({ error: 'tipId, userId et reason sont requis' })
    }
    // Vérifier que le tip existe
    const tip = await prisma.tip.findUnique({ where: { id: tipId } })
    if (!tip) {
      return res.status(404).json({ error: 'Tip non trouvé' })
    }
    // Vérifier que l'utilisateur existe
    const user = await prisma.user.findUnique({ where: { id: userId } })
    if (!user) {
      return res.status(404).json({ error: 'Utilisateur non trouvé' })
    }
    const report = await prisma.report.create({
      data: {
        reason,
        tip: { connect: { id: tipId } },
        user: { connect: { id: userId } }
      }
    })
    res.status(201).json({ message: 'Signalement enregistré', report })
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur', details: error })
  }
})

// Signaler un commentaire
router.post('/comment', async (req, res) => {
  try {
    const { commentId, userId, reason } = req.body
    if (!commentId || !userId || !reason) {
      return res.status(400).json({ error: 'commentId, userId et reason sont requis' })
    }
    // Vérifier que le commentaire existe
    const comment = await prisma.comment.findUnique({ where: { id: commentId } })
    if (!comment) {
      return res.status(404).json({ error: 'Commentaire non trouvé' })
    }
    // Vérifier que l'utilisateur existe
    const user = await prisma.user.findUnique({ where: { id: userId } })
    if (!user) {
      return res.status(404).json({ error: 'Utilisateur non trouvé' })
    }
    const report = await prisma.report.create({
      data: {
        reason,
        comment: { connect: { id: commentId } },
        user: { connect: { id: userId } }
      }
    })
    res.status(201).json({ message: 'Signalement de commentaire enregistré', report })
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur', details: error })
  }
})

export default router;
