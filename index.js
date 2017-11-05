const server = require('server')
const { get, post } = server.router
cosnt { render, json } = server.reply

server({ port: 3000 }, {
	get('/', ctx => 'Hello world')
	get('/hi', ctx => render(''))
})