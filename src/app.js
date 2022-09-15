//Dependencias
const express = require('express')
const passport = require('passport')
const swaggerUi = require('swagger-ui-express')
const path = require('path')
require('./middleware/auth.middleware')(passport)

//Archivos de rutas
const userRouter = require('./users/users.router').router
const authRouter = require('./auth/auth.router').router
const accommodationRouter = require('./accommodations/accommodations.router').router
const reservationRouter = require('./reservations/reservations.router').router
const placeRouter = require('./places/places.router').router

const initModels = require('./models/initModels')
const defaultData = require('./utils/defaultData')
const swaggerDoc = require('./swagger.json')

const Accommodations = require('./models/accommodations.model')
const {db} = require('./utils/database')
const Reservations = require('./models/reservations.model')

//Configuraciones iniciales
const app = express()

require('dotenv').config()

const port = process.env.PORT

initModels()
db.authenticate()
    .then(() => console.log('Database Authenticated'))
    .catch(err => console.log(err)) 

if(process.env.NODE_ENV === 'production'){
    db.sync()
        .then(() => {
        console.log('Database synced')
        defaultData()
        })
        .catch(err => console.log(err))
} else{
    db.sync({force:true})
    .then(() => {
        console.log('Database synced')
        defaultData()
    })
    .catch(err => console.log(err))
}

//Esta configuracion es para habilitar el body
app.use(express.json())
 
app.get('/', async (req, res) => {
    try {
        const data = await Accommodations.create({
          id: "7e5fc196-8f45-46d2-bb2b-2f8b95340d50",
          title: "premium - vistas 360 ciudad (alberca y gym)",
          description: "asd",
          guests: 6,
          rooms: 3,
          beds: 3,
          bathrooms: 4.5,
          price: 1536.00,
          hostId : '74cd6011-7e76-4d6d-b25b-1d6e4182ec2f',
          score: 0.00,
          placeId: '9c0412b6-7d56-4347-8fbe-5455e8a42438',
          commision: 150.0,
        })
        res.status(200).json({ message: "All ok!", data });
    
      } catch (error) {
        res.status(400).json(error)
      }
})


app.use('/api/v1/users', userRouter)
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/accommodations', accommodationRouter)
app.use('/api/v1/reservations', reservationRouter)
app.use('/api/v1/places', placeRouter)
app.use('/v1/doc', swaggerUi.serve, swaggerUi.setup(swaggerDoc))


app.get('/api/v1/uploads/:img', (req, res) => {
    const img = req.params.img
    res.status(200).sendFile(path.resolve('uploads/') + '/' + img)
})

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})


module.exports = app