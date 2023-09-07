import express from "express"

const app = express();
const port = 3001;

const students = [
    {id:1,
    studentName:"Nguyễn Văn A"
    },
    {
        id:2,
        studentName: "Trần Văn B"

    },
    {
        id:3,
        studentName:"Lê Thị C"
    }
]

const teachers = [
    {id:1,
    studentName:"Nguyễn Văn A"
    },
    {
        id:2,
        studentName: "Trần Văn B"

    },
    {
        id:3,
        studentName:"Lê Thị C"
    }
]

app.listen(port, () =>{
        console.log(`App is running at ${port}` );
})

// app.get("/student", (req, res) => {
// 	console.log("New req at ", new Date())
// })
const reqlog = () => {
    console.log("New req at", new Date());
}

const requiredAPIKey = (req, res, next) => {
    const api_key = req.query.api_key
    if(!api_key){
        res.send("API Key is missing");
        return
    }
    next()
}

const logMW = (req, res, next) => {
    console.log("New req at student",new Date());
    next()
}


app.get('/student', logMW, (req, res,next) => {
	// const api_key = req.query.api_key
    requiredAPIKey(req, res,next);
    res.json(students)
console.log("1.Student API");
    next();

}, (req, res, next) => {
    console.log("2. Student API 2");
})

app.get("/teacher", (req, res, next) => {
	console.log("Teacher API");
	next()
}, (req, res, next) => {
	console.log("Teacher API 2");
	next();
})

app.get("/teacher", logMW, (req, res) => {
	res.json(teachers)
    // console.log("Teacher API 3");
})