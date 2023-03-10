const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;

const app = express();

//middleware
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    res.send('Travel surver running');
})

app.listen(port, () => {
    console.log(`Travel server running on port: ${port}`)
})