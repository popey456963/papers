const server = require('server')
const { get, post } = server.router

server({ port: 3000 }, {
	get('/', ctx => 'Hello world')
})