const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const connectDb = require('./config/db')
const { errorHandler } = require("./middleware/errorMiddleware");
const port = process.env.PORT || 5000
const goalRoutes = require("./routes/goalRoutes");
const userRoutes = require("./routes/userRoutes");

connectDb();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', goalRoutes);
app.use('/api/users', userRoutes);


app.use(errorHandler);
app.listen(port, () => {
    console.log(`server started on port ${port}`);
})
