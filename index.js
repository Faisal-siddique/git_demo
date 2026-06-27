import express from "express"

const port = 8000
const app = express()

app.get("/", (req, res) => {
	res.send("Hey i'm nobody")	
})

app.listen(port, () => {
	console.log("Server is running...")
})
