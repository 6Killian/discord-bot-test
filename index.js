const { Client } = require("discord.js");
const client = new Client({intents: 1});
const { Token } = require("./config.json");

client.once("ready", () => {
    console.log("Le bot c'est connecter sur discord !");
    client.user.setActivity("L'Empire 3l", {type: "PLAYING"})
});

client.login(process.env.TOKEN);