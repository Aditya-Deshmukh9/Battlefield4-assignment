const express = require("express");
const Server = require("../modal/ServerInfo");
const router = express.Router();

router.get("/server-info", async (req, res) => {
  try {
    const data = await Server.find();
    res.json({ serverInfo: data });
  } catch (error) {
    res.status(500).send("Error fetching server info");
  }
});

module.exports = router;
