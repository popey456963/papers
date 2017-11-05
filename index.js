const exphbs  = require('express-handlebars')
const express = require('express')

const app = express()

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.listen(3000, () => {
	console.log('Example app listening on port 3000!')
})