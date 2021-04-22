require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const users = require('./routes/userRoute');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

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
