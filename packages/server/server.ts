/* eslint-disable @typescript-eslint/no-var-requires */
const Koa = require('koa')
const Router = require('@koa/router')
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

const router = new Router()

router.get('/', async (ctx: any) => {
	ctx.body = 'qaq'
})

router.post('/report', async (ctx: any) => {
	const body = ctx.request.body
	console.log(body)

	ctx.status = 204
})

app.use(router.routes())
app.listen(9000, () => {
	console.log(`Server start on http://localhost:9000`)
})
