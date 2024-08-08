const express = require('express');
const cors = require('cors')
const adminRoute = require('./router/adminRouter')
require('dotenv').config()
require('./database/dbConnection')

const port = process.env.PORT
const app = express();

app.use(express.json())
app.use(cors())

app.use("/admin", adminRoute )

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});
