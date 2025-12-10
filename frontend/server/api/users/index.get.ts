import seed from '../../data/seed.json'
import type { User } from '../../../types'

export default defineEventHandler(() => {
  const tipCounts = new Map<number, number>()
  seed.tips.forEach((t) => {
    tipCounts.set(t.user_id, (tipCounts.get(t.user_id) || 0) + 1)
  })

  const voteCounts = new Map<number, number>()
  seed.tips.forEach((t) => {
    voteCounts.set(t.user_id, (voteCounts.get(t.user_id) || 0) + (t.views || 0))
  })

  const users: User[] = seed.users.map((u) => {
    const tipCount = tipCounts.get(u.id) || 0
    const xp = (u.trust_index * 10) + (u.grade_id * 100) + (tipCount * 50)

    return {
      id: u.id,
      name: u.user_name,
      xp,
      tips: tipCount,
      votes: voteCounts.get(u.id) || 0,
      role: u.grade_id >= 3 ? 'Expert' : 'Membre',
      avatar: u.avatar_profile
    }
  })

  return users.sort((a, b) => b.xp - a.xp).map((u, index) => ({ ...u, rank: index + 1 }))
})
