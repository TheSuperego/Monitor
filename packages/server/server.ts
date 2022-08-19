/* eslint-disable @typescript-eslint/no-var-requires */
const Koa = require('koa')

const cors = require('@koa/cors')
const koaBody = require('koa-body')

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

app.use(router.routes(), router.allowedMethods())

app.listen(PORT, () => {
	console.log(`Server start on http://localhost:${PORT}/`)
})
