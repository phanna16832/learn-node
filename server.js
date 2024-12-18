import express from "express";

const app = express()

//register ejs
app.set("view engine", "ejs");

//middleware static file
app.use(express.static('static'));


const port = 8000;
app.listen(port ,(req,res) =>{
  console.log(`Server is running on http://localhost:${port}`);
})

app.get("",(req,res)=>{
  res.render("home")
})