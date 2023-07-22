const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const connectDb = require('./config/db')
const { errorHandler } = require("./middleware/errorMiddleware");
const port = process.env.PORT || 6000
// const port = 4000
const goalRoutes = require("./routes/goalRoutes");
const userRoutes = require("./routes/userRoutes");
const cors = require('cors');
connectDb();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', goalRoutes);
app.use('/api/users', userRoutes);


app.use(errorHandler);
app.listen(port, () => {
    console.log(`server started on port ${port}`);
})
