const Router = require('@koa/router')

const router = new Router()

router.get('/', async (ctx: any) => {
	ctx.body = 'qaq'
})

router.post('/report', async (ctx: any) => {
	const body = ctx.request.body
	console.log(body)

	ctx.status = 204
})

export default router
