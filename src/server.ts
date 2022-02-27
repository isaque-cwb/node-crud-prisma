import express from "express";
import { router } from "./routes";


const HOST = '0.0.0.0'
const PORT = 3000


const app = express()
app.use(express.json())
app.use(router)

app.listen(PORT, HOST, ()=>{console.log("servidor iniciado...")})