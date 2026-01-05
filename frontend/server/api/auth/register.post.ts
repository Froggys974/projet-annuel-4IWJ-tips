export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  
  return {
    token: 'mock-jwt-token-new',
    user: {
      id: 999,
      name: body.username || 'Nouvel Utilisateur',
      email: body.email,
      xp: 0,
      avatar: 'https://i.pravatar.cc/150?u=999',
      role: 'Novice'
    }
  }
})
