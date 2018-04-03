const Koa = require('koa');
const app = new Koa();
const route = require('koa-route');
const serve = require('koa-static');
const path = require('path');
const port = 3001;

const about = ctx => {
    ctx.response.type = 'html';
    ctx.response.body = '<a href="/">Index Page</a>';
};

const logger = (ctx, next) => {
    console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
    next();
};

const handler = async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        ctx.response.status = err.statusCode || err.status || 500;
        ctx.response.type = 'html';
        ctx.response.body = '<p>Something wrong, please contact administrator.</p>';
        ctx.app.emit('error', err, ctx);
    }
};

const main = ctx => {
    ctx.throw(500);
};

app.use(handler);
app.use(route.get('/five', main));
app.use(route.get('/about', about));
app.use(serve(path.resolve('./public')));
app.use(logger);
app.on('error', (err) => {
   console.log(`logging error ${err.message}`);
   console.log(err);
});

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        throw err;
    }
    console.log('SERVER: requirejs listen at: ', port);
});
