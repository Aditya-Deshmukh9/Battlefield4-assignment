const mongoose = require("mongoose");

const serverSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  players: { type: String, required: true },
  ping: { type: String, required: true },
  tickrate: { type: String, required: true },
  settings: {
    region: { type: String, required: true },
    punkbuster: { type: String, required: true },
    fairfight: { type: String, required: true },
    password: { type: String, required: true },
    preset: { type: String, required: true },
    advanced: {
      minimap: { type: String, required: true },
      onlySquadLeaderSpawn: { type: String, required: true },
      vehicles: { type: String, required: true },
      teamBalance: { type: String, required: true },
      minimapSpotting: { type: String, required: true },
      hud: { type: String, required: true },
      vehicleCam3P: { type: String, required: true },
      regenerativeHealth: { type: String, required: true },
      killCam: { type: String, required: true },
      friendlyFire: { type: String, required: true },
      "3DSpotting": { type: String, required: true },
      enemyNameTags: { type: String, required: true },
    },
  },
  rules: {
    tickets: { type: Number, required: true },
    vehicleSpawnDelay: { type: Number, required: true },
    bulletDamage: { type: Number, required: true },
    kickAfterTeamKills: { type: Number, required: true },
    playerHealth: { type: Number, required: true },
    playerRespawnTime: { type: Number, required: true },
    kickAfterIdle: { type: Number, required: true },
    banAfterKicks: { type: Number, required: true },
  },
});

// Create a model based on the schema
const Server = mongoose.model("Server", serverSchema);

module.exports = Server;
