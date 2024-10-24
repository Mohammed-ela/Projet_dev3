const express = require("express");
require('dotenv').config();
const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());

const classroomRoutes = require('./routes/classroomRoutes');
const studentRoutes = require('./routes/studentRoutes');

app.use('/classrooms', classroomRoutes);
app.use('/classrooms', studentRoutes);  


app.listen(port, () => {
    console.log("API Au tableau en cours sur le port :", port);
});
