import fastify from 'fastify'
import cookie from '@fastify/cookie'

import { transactionsRoutes } from './routes/transactions'

export const app = fastify()

// cookies devem ser iniciados antes das rotas
app.register(cookie)

app.register(transactionsRoutes, {
  prefix: 'transactions',
})
