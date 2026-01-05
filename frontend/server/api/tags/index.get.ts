import seed from '../../data/seed.json'

export default defineEventHandler(() => {
  const tags = new Set<string>()
  const tips = seed.tips as Array<{ tags: string[] }>

  tips.forEach((tip) => {
    tip.tags.forEach((tag) => tags.add(tag))
  })

  return Array.from(tags).sort()
})
