const express = require('express');


const app = express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello World! from express");
});

app.post("/signup",(req,res)=>{
    console.log("Hello World!");
});

const port = process.env.PORT || 5000;
app.listen(port, () => `Server running on port ${port} 🔥`);