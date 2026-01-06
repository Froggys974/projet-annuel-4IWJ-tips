import express from 'express'
import usersRouter from './routes/users'
import tipsRouter from './routes/tips'
import reportsRouter from './routes/reports'
import commentsRouter from './routes/comments'

export const app = express()

app.use(express.json())

app.get('/health', (_req, res) => {
	res.json({ status: 'ok' })
})

app.use('/api/users', usersRouter)
app.use('/api/tips', tipsRouter)
app.use('/api/reports', reportsRouter)
app.use('/api/comments', commentsRouter)

