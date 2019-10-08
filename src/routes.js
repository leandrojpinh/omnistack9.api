const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const sessionController = require('./controller/SessionController');
const spotController = require('./controller/SpotController');
const dashboardController = require('./controller/DashboardController');
const bookingController = require('./controller/BookingController');
const approvalController = require('./controller/ApprovalController');
const rejectController = require('./controller/RejectController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/session', sessionController.store);

routes.get('/spot', spotController.index);
routes.post('/spot', upload.single('thumbnail'), spotController.store);

routes.get('/dashboard', dashboardController.show);

routes.post('/spot/:spot_id/booking', bookingController.store);
routes.post('/booking/:booking_id/approval', approvalController.store);
routes.post('/booking/:booking_id/approval', rejectController.store);
module.exports = routes;