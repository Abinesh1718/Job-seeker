const express = require('express');
const { searchJobs, userRegister, postJob, searchUser, CreateEmployer, OneData, CreateUser, login, validation, userlogin } = require('./routs/controler');
const cors = require('cors');
const app = express();

app.use(express.json());

app.use(cors());

app.use("/", require("./routs/user"))
app.use("/users", userRegister)
app.use("/onedata", validation, OneData)
app.use("/user/create", CreateUser)
app.use("/login", login)
app.use("/employer/create", CreateEmployer)
app.use("/searchuser", searchUser)
app.use("/searchjob", searchJobs)

app.use("/employer/postjob", postJob)

app.use("/userlogin", userlogin)




app.listen(4000, () => {
    console.log("Post is listen");
})
