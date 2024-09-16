const express = require("express");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./config/db");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const port = process.env.PORT || 5001;

connectDB();
const app = express();
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
