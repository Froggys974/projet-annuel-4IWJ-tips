import seed from '../../data/seed.json'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { email } = body

  const user = seed.users.find((u) => u.email === email)

  if (!user) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Email ou mot de passe incorrect'
    })
  }

  const { password: _, ...userWithoutPassword } = user
  
  const userTips = seed.tips.filter(t => t.user_id === user.id)
  const tipCount = userTips.length
  const votes = userTips.reduce((sum, t) => sum + (t.views || 0), 0)
  
  const xp = (user.trust_index * 10) + (user.grade_id * 100) + (tipCount * 50)
  
  return {
    token: 'mock-jwt-token-' + user.id,
    user: {
      ...userWithoutPassword,
      name: user.user_name,
      xp,
      tips: tipCount,
      votes,
      avatar: user.avatar_profile,
      role: user.grade_id >= 3 ? 'Expert' : 'Membre'
    }
  }
})
