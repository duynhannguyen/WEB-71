import express  from "express"

const app = express()
const PORT = 3001

app.listen(PORT, ()=>{
    console.log(`Server is running at PORT: ${PORT}`);
})


app.get("/", (req,res)=>{
    res.send("Hello world")
})
