const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

const students = [
    {
        "name": "Dembe Sam",
        "dob": "01/05/1989",
        "programme": "BSC LAW",
        "level": "100",
        "image": "/images/Dembe.jpg"
    },
    {
        "name": "Derrick Anum",
        "dob": "/05/1999",
        "programme": "BSC LAW",
        "level": "100",
        "image": "/images/Dee.jpg"
    },
    {
        "name": "Navabi Rosin",
        "dob": "10/01/1992",
        "programme": "BSC COMPUTER ENGINEERING",
        "level": "500",
        "image": "/images/navabi.jpg"
    },
    {
        "name": "John Dumelo",
        "dob": "1/01/2000",
        "programme": "BSC Public Administration",
        "level": "300",
        "image": "/images/john.jpg"
    },
    {
        "name": "Steve Harvey",
        "dob": "23/10/1987",
        "programme": "BSC IT",
        "level": "300",
        "image": "/images/stev.jpg"
    }
]


app.get('/', (req, res)=>{
    res.render("home", {
        students
    });
});

//This is a route to a single student
app.get('/student/:id', (req, res)=>{
       const id = req.params.id;
       const student = students[id];
    res.render("details", {
        student,
        title: 'Details'
    });
});

app.listen(3000, ()=>{
    console.log("Server is listening on port 3000");
});

