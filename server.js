const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./db/photo");
const port = 1337;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/photos", async (req, res) => {
  const results = await db.createPhoto(req.body);
  res.status(201).json({ id: results[0] });
});

app.get("/photos", async (req, res) => {
  const photos = await db.getAllPhotos();
  res.status(200).json({ photos });
});

app.get("/photos/:id", async (req, res) => {
  const photos = await db.getOnePhoto(req.params.id);
  res.status(200).json({ photos });
});

app.patch("/photos/:id", async (req, res) => {
  const id = await db.updatePhoto(req.params.id, req.body);
  res.status(200).json({ id });
});

app.delete("/photos/:id", async (req, res) => {
  await db.deletePhoto(req.params.id);
  res.status(200).json({ succes: true });
});

app.listen(port, () => console.log(`server is running on port ${port}`));
