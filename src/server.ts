import express from "express";
const app = express();

console.log(process.env.PORT);

app.get("/", (req, res) => {
  res.send({ message: "Hello World" });
});

// Start Server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
