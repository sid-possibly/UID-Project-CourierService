const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// const cors = require('cors');

// app.use(cors());
// app.use(express.json());

// Connect to MySQL
const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Chuchu123',
    database: 'courierservicedb'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database.');
});
app.get('/submitBooking',(req,res)=>{
    res.send("Connected to Booking");
})

function getRandomStatus() {
    const statuses = ['processing', 'shipped', 'out-of-delivered'];
    return statuses[Math.floor(Math.random() * statuses.length)];
}
app.post('/submitBooking',(req,res)=>{
    console.log(req.body);
    console.log(req.body.email)
    console.log("__________________")
    console.log("all data")
    console.log(typeof(req.body.orderId))
    res.send("yayayay")
    let a=getRandomStatus();
    console.log(typeof(expectedDeliveryDate))
    console.log("asdasdasd")
    console.log(typeof(a));
    console.log(a);
    console.log(typeof(req.body.expectedDeliveryDateFinal))
    const sqlInsert = "INSERT INTO bookings (orderId, fullName, email, phoneNumber, parcelItem, departureDate, deliveryAddress, pickupAddress, trackingId, expectedDeliveryDate,statusDelivery) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
    db.query(sqlInsert, [
                req.body.orderId,
                req.body.fullName,
                req.body.email,
                req.body.phoneNumber,
                req.body.parcelItem,
                req.body.departureDate,
                req.body.deliveryAddress,
                req.body.pickupAddress,
                req.body.trackingId,
                req.body.expectedDeliveryDate,
                req.body.statusDelivery,
            ]);
})

app.get('/getOrderDetails', (req, res) => {
    const { orderId, trackingId } = req.query;
    let sqlQuery = '';

    if (orderId &&!trackingId) {
        sqlQuery = "SELECT * FROM bookings WHERE orderId =?";
    } else if (!orderId && trackingId) {
        sqlQuery = "SELECT * FROM bookings WHERE trackingId =?";
    } else {
        res.status(400).send('Please provide either an order ID or a tracking ID.');
        return;
    }

    db.query(sqlQuery, [orderId || trackingId], (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results[0]);
        } else {
            res.status(404).send('No order found with the given ID.');
        }
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
