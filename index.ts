import dotenv from "dotenv";
import {Bot} from "./src/Bot";
import {Client} from "discord.js";

dotenv.config()

const { TOKEN } = process.env;

export const bot = new Bot(new Client({intents: []}), TOKEN);