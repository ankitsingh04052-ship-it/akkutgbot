const TelegramBot = require("node-telegram-bot-api");

// 🔴 yaha apna bot token daalo
const token = "8181068032:AAEC46ekdycNjMrxYo6yNjR_8o29ht9STCI";

const bot = new TelegramBot(token, { polling: true });

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === "/start") {
    bot.sendMessage(chatId, "Hello Ankit 👋\nBot chal raha hai!");
  } else {
    bot.sendMessage(chatId, "Tumne likha: " + text);
  }
});
