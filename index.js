import dotenv from "dotenv";
import path, { join, resolve } from "path";
dotenv.config({ path: path.resolve("config/.env") });
console.log(path.resolve("config/.env"));
import express from "express";
import session from "express-session"; //express-Session
import cors from "cors";
import connectionDB from "./database/dbConnection.js";
import homeRouter from "./src/modules/home/home.routes.js";
import loginRouter from "./src/modules/login/login.routes.js";
import registerRouter from "./src/modules/register/register.routes.js";
import messagesRouter from "./src/modules/messages/messages.routes.js";
import userRouter from "./src/modules/user/user.routes.js";
import mongoSession from "connect-mongodb-session"; //connect-mongodb-session
let MongoDBStore = mongoSession(session);
const app = express();
const port = process.env.PORT || 3000;

const store = new MongoDBStore({
  uri: process.env.URL_CONNECTION_ONLINE,
  collection: process.env.SESSION_COLLECTION_NAME,
});

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store,
  })
);

app.set("views", path.resolve() + "/views");
app.set("view engine", "ejs");

app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//connect to db
connectionDB();

//routes
app.use(homeRouter);
app.use(loginRouter);
app.use(registerRouter);
app.use(messagesRouter);
app.use(userRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
