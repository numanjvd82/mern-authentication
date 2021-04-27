require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const users = require('./routes/userRoute');
const customers = require('./routes/customerRoute');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true,
  })
);
app.use(cookieParser());

const PORT = process.env.PORT || 5000;

//  * setting up the database connection
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() =>
    app.listen(PORT, () => {
      console.log(
        `The server is listening on http://localhost:${PORT}\n Database Connected`
      );
    })
  )
  .catch((err) => console.error(err));

// ? setting our routes
app.use('/', users);
app.use('/customer', customers);
