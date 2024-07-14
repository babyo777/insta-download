const app = require("express")();
const cors = require("cors");
const instagram = require("./utils/igdownloader");
const port = process.env.PORT || 5000;
app.use(cors());

app.get("/api/v1", async (req, res) => {
  const url = req.query.link;
  try {
    const dataList = await instagram(url);
    res.status(200).json(dataList);
  } catch (error) {
    res.status(403).json(error.message);
  }
});

app.use((_req, res) => {
  res.status(404).send("s3x");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

// https://v3.igdownloader.app/api/ajaxSearch
