const express = require("express")
const app = express()
const port = 3000
const { connectDB } = require("./db/connect")
require("dotenv").config()

app.get("/api/v1/tasks", (req, res) => {
  res.send("tasks")
})
app.get("/api/v1/tasks/:id", (req, res) => {
  res.send("tasks/:id")
})

app.post("/api/v1/tasks/:id", (req, res) => {
  res.send("post")
})

app.patch("/api/v1/tasks/:id", (req, res) => {
  res.send("patch")
})

app.delete("/api/v1/task:id", (req, res) => {
  res.send("delete")
})

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => console.log(`server is listening on ${port}`))
  } catch (error) {
    console.log(error)
  }
}

start()
