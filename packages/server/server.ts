import Koa from 'koa'
import Router from '@koa/router'
import koaBody from 'koa-body'
import cors from '@koa/cors'

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

router.post('/report', async (ctx) => {
    const body = ctx.request.body
    console.log(body)

    ctx.status = 204
})

app.use(router.routes())
app.listen(7021)

