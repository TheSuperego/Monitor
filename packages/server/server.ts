
/* eslint-disable @typescript-eslint/no-var-requires */

import Koa from 'koa'
import Router from '@koa/router'
import cors from '@koa/cors'
import koaBody from 'koa-body'

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

app.listen(PORT, () => {
	console.log(`Server start on http://localhost:${PORT}/`)
})
