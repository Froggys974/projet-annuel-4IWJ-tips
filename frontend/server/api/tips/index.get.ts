import seed from '../../data/seed.json'
import type { Tip, Author } from '../../../types'

export default defineEventHandler((event) => {
  const query = getQuery(event)
  const q = (query.q as string)?.toLowerCase() || ''
  const tag = query.tag as string
  const difficulty = query.difficulty ? parseInt(query.difficulty as string) : null

  let tips = seed.tips.map((t) => {
    const user = seed.users.find((u) => u.id === t.user_id)
    
    const author: Author = {
      name: user ? user.user_name : 'Unknown',
      xp: user ? (user.trust_index * 10) + (user.grade_id * 100) : 0,
      avatar: user ? user.avatar_profile : '',
      role: 'Member'
    }

    const daysAgo = Math.floor((new Date().getTime() - new Date(t.created_at).getTime()) / (1000 * 3600 * 24))
    const publishedAgo = daysAgo === 0 ? "Aujourd'hui" : `il y a ${daysAgo} jours`

    return {
      id: t.id,
      title: t.title,
      description: t.content.substring(0, 150) + '...',
      content: t.content,
      tags: t.tags,
      difficulty: t.difficulty,
      author,
      publishedAgo,
      views: t.views,
      created_at: t.created_at,
      address: t.address,
      lat: t.lat,
      lng: t.lng
    } as Tip
  })

  if (q) {
    tips = tips.filter(t => t.title.toLowerCase().includes(q) || t.description.toLowerCase().includes(q))
  }
  if (tag) {
    tips = tips.filter(t => t.tags.includes(tag))
  }
  if (difficulty) {
    tips = tips.filter(t => t.difficulty === difficulty)
  }

  return tips
})
