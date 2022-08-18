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

const router = new Router()

router.get('/', async (ctx) => {
	ctx.body = 'qaq'
})

router.post('/report', async (ctx) => {
	const body = ctx.request.body
	console.log(body)

	ctx.status = 204
})

app.use(router.routes())
app.listen(9000, () => {
	console.log(`Server start on http://localhost:9000`)
})
