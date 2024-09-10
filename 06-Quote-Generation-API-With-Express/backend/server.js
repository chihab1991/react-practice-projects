const express = require("express");
const { errorHandler } = require("./middleware/errorMiddleware");
const cors = require("cors");

require("dotenv").config();

const connectDB = require("./config/db");

const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/", require("./routes/quotesRoutes"));

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
