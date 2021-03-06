const mongoose = require('mongoose')

const bookingSchema = mongoose.Schema({
    pickUp: {
        type: String, 
    },
    dest: {
        type: String, 
    },
    carNo: {
        type: String, 
    },
    vehicle: {
        type: String, 
    },
    Drinumber:{
        type: Number,
    },
    driverID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cab'
    }
})


const Booking = mongoose.model('booking', bookingSchema)

module.exports = Booking;


