require("dotenv").config();
const path = require("path");
const axios = require("axios");
const express = require("express");
const port = process.env.PORT || 3000;
const app = express();

const fetchFullTimeJobs = (page) => {
  if (isNaN(page)) {
    page = 1;
  }
  return axios.get(
    `${process.env.GITHUB_JOBS_API_URL}?full_time=true&markdown=true&page=${page}`
  );
};

app.get("/api/full-time/:page", async (req, res) => {
  const { page } = req.params;
  try {
    const response = await fetchFullTimeJobs(page);
    const jobs = response.data;

    res.status(200).json({
      msg: "ok",
      jobs,
    });
  } catch (error) {
    res.status(500).json({ msg: "ko", jobs: [] });
  }
});

app.use(express.static(path.join(__dirname, "./client/dist")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/dist/index.html"));
});

app.listen(port, () => {
  console.info(`Server running on port: ${port}`);
});
