const express = require('express');
const app = express();
var cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
// const DB_config = require('./config/db.config');
const path = require('path');
// mongoose.connect(`mongodb://${DB_config.DB_HOST}:${DB_config.DB_PORT}/${DB_config.CLUSTER_NAME}`, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     family: 4 // Use IPv4, skip trying IPv6
// })
mongoose.connect("mongodb+srv://user_1_spider:user_1_spider@cluster0.gpmuqfi.mongodb.net/Chroma_app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4 // Use IPv4, skip trying IPv6
})
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => console.log(err));


const routes = require('./routes/index.router.js');
app.use(express.json());
app.use(cors());
app.use(routes);

app.use(express.static(path.join(__dirname, 'build')));
app.get('/', (req, res, next) =>{
    res.end("Server is up and running!")
    // send index.html from built folder
    // res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

let port = process.env.BACKEND_PORT;
app.listen(port, () => console.log(`Listening to port: ${port}`));
