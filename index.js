const express = require("express");
const app = express()
app.use(express.json())
app.use(express.static("react-app/dist"));

const port = 8080

app.listen(port,() => {
    console.log("listing on port 8080")
})