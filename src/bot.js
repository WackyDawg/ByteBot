const dotenv = require("dotenv");
require("dotenv").config();

dotenv.config({ path: "../.env" });
const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({ 
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages
    ]
  });
client.login(process.env.BOT_TOKEN);
console.log(process.env.BOT_TOKEN);
