import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send({ message: "Hello World" });
});

// Start Server
app.listen(5000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
