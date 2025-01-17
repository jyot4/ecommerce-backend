import express from "express";
import cors from "cors";
import connection, { dbName } from "./db/connection.js";
import AdminRouter from "./routes/AdminRouter.js";
import BaseRouter from "./routes/BaseRouter.js";
// import product from "./Model/Scheme.js";
import path  from "path"
// import {dirname} from 'path'

// import { fileURLToPath } from "url";


// const __filename= fileURLToPath(import.meta.url)
// const __dirname = dirname(__filename)
// console.log(__dirname);

const port = 8080;
export let db;
const app = express();

app.use("/uploads",express.static('uploads'));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: "http://localhost:5173" }));
app.use("/admin", AdminRouter);
app.use("/", BaseRouter);


// app.get("/category",async(req,res)=>{
//   const data = await product.find()
//   console.log(data)
// })



connection
  .then((client) => {
    db = client.db(dbName);
    app.listen(port, () => console.log("Server started at port " + port));
  })
  .catch((err) => console.log("DB ERROR: " + err));
