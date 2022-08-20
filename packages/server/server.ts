
/* eslint-disable @typescript-eslint/no-var-requires */

import Koa from 'koa'
import Router from '@koa/router'
import cors from '@koa/cors'
import koaBody from 'koa-body'
const ws = require('ws')

const app = new Koa()

app.use(koaBody())

app.use(
	cors({
		origin: '*',
		allowMethods: 'POST',
		allowHeaders: 'content-type'
	})
)

import router  from "./router";


const PORT = 9000

app.use(router.routes())

const server = app.listen(PORT, () => {
	console.log(`Server start on http://localhost:${PORT}/`)
})

const wss = new ws.Server({ server })
wss.on('connection', (ws: any) => {
  ws.on('message', (message: any) => {
    console.log('received: %s', message)
  })
})