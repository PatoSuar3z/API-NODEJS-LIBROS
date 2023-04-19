const express =  require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const routes = require('./routes')
const cors = require('cors')

const app = express()
app.set ('port', process.env.PORT || 9000 )

const dboptions = {
    host: 'localhost',
    PORT: 3306,
    user: 'root',
    password: '',
    database: 'db_libreria'
}

//middlewares
app.use(myconn(mysql, dboptions, 'single'))
app.use(express.json())
app.use(cors())

//routes
app.get('/', (req, res) => {
    res.send('Libreria Alphillia')
})

app.use('/libros', routes)


// Start the server
app.listen(app.get('port'), ()=> {
    console.log('Server is running on port', app.get('port'))
})


/// WS SOAP con node js 
