const express=require ('express')
const app=express()
require('dotenv').config()
require('./config/connectDB')
const path =require('path')

// app routes
const cors = require('cors')

app.use(cors("http://localhost:3000"))
app.use(express.json())
app.use('/api/v1/users',require('./routes/userRoutes'))
app.use('/api/v1/patients',require('./routes/patientRoutes'))
app.use('/api/v1/doctors',require('./routes/doctorRoutes'))
app.use('/api/v1/chat',require('./routes/chatRoutes'))
app.use('/api/v1/message',require('./routes/messageRoutes'))
app.use('/uploads', express.static(path.join(__dirname,'./','tmp/uploads')))
app.use('/api/v1/appointments',require('./routes/appointmentRoutes'))


app.listen(process.env.PORT,()=>console.log(`server is running on port ${process.env.PORT}`))