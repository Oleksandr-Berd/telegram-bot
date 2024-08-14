const color = require("colors")


require("dotenv").config();

const TelegramBot = require("node-telegram-bot-api");

const token = process.env.BOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  bot.sendMessage(chatId, `You said: ${text}`);
});


bot.on("message", (msg) => {
    const chatId = msg.chat.id;
    const text = msg.chat.text;

    bot.sendMessage(chatId, `You said ${text}`)
})
