const express = require('express')                                      //Modules
const multer = require('multer')

const UserController = require('./controllers/UserController')          //Files we created
const EventController = require('./controllers/EventController')
const DashboardController = require('./controllers/DashboardController')
const LoginController = require('./controllers/LoginController')
const RegistrationController = require('./controllers/RegistrationController')
const ApprovalController = require('./controllers/ApprovalController')
const RejectionController = require('./controllers/RejectionController')
const uploadConfig = require('./config/upload')

const routes = express.Router();                                        //Instances we are creating
const upload = multer(uploadConfig);

routes.get('/status', (req, res)=>{
    res.send({status:200});
})

//TODO: SubscribeController


//Registration
routes.post('/registration/:eventId', RegistrationController.create)
routes.get('/registration/:registration_id', RegistrationController.getRegistration)
routes.post('/registration/:registration_id/approval', ApprovalController.approval)
routes.post('/registration/:registration_id/rejection', RejectionController.rejection)

//Login
routes.post('/login', LoginController.store)  

//Dashboard
routes.get('/dashboard/:sport', DashboardController.getAllEvents)
routes.get('/dashboard', DashboardController.getAllEvents)
routes.get('/event/:eventId', DashboardController.getEventById)

//Events
routes.post('/event', upload.single("thumbnail"), EventController.createEvent)
routes.delete('/event/:eventId', EventController.delete)

//User
routes.post('/user/register', UserController.createUser)
routes.get('/user/:userId', UserController.getUserById)

module.exports = routes;