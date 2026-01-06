import express from 'express'
import { prisma } from '../prismaClient'

const router = express.Router()

// Ajouter un commentaire à un tip
router.post('/tip', async (req, res) => {
  try {
    const { tipId, userId, content } = req.body
    if (!tipId || !userId || !content) {
      return res.status(400).json({ error: 'tipId, userId et content sont requis' })
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
    const comment = await prisma.comment.create({
      data: {
        content,
        tip: { connect: { id: tipId } },
        user: { connect: { id: userId } }
      }
    })
    res.status(201).json({ message: 'Commentaire ajouté', comment })
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur', details: error })
  }
})

export default router;
