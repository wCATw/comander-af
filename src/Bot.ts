import {Application, Client, ClientApplication, ClientUser} from "discord.js";

require("dotenv").config({environment: process.env.NODE_ENV});

const token = process.env.TOKEN;

console.log("Bot is starting.");

const client: Client = new Client({intents: []});

// Login bot with TOKEN from dotenv
client.login(process.env.TOKEN);

// Waiting for bot to be ready
client.on("ready", () => {
   if (!(client.user instanceof ClientUser) || !(client.application instanceof ClientApplication)) return;

    console.log(`${client.user.username} is online.`)
});