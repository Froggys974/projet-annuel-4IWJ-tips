import express from 'express'
import { prisma } from '../prismaClient'

const router = express.Router()

// Création d'un tip
router.post('/', async (req, res) => {
  try {
    const { title, content, userId } = req.body
    if (!title || !userId) {
      return res.status(400).json({ error: 'title et userId sont requis' })
    }
    // Vérifier que l'utilisateur existe
    const user = await prisma.user.findUnique({ where: { id: userId } })
    if (!user) {
      return res.status(404).json({ error: 'Utilisateur non trouvé' })
    }
    const tip = await prisma.tip.create({
      data: {
        title,
        content,
        user: { connect: { id: userId } }
      }
    })
    res.status(201).json({ message: 'Tip créé', tip })
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur', details: error })
  }
})

export default router;
