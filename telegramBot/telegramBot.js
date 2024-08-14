
require("dotenv").config()

const TelegramBot = require("node-telegram-bot-api");

// Replace with your token
const token = process.env.BOT_TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Listen for any kind of message and respond
bot.on("message", (msg) => {
 const chatId = msg.chat.id;
 const text = msg.text.toLowerCase();

 if (text.includes("hello")) {
   bot.sendMessage(chatId, "Hi there! How can I assist you?");
 } else if (text.includes("bye")) {
   bot.sendMessage(chatId, "Goodbye! Have a great day!");
 } else {
   bot.sendMessage(chatId, "I did not understand your message.");
 }
});