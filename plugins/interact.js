const { smd } = require("../lib");

// Command to send a greeting message
smd(
  {
    pattern: "hi", // Command trigger
    react: "👋", // Reaction emoji for the command
    desc: "Greet and introduce the bot", // Description of the command
    category: "greeting", // Category under which the command falls
    filename: __filename, // The current file's name
  },
  async (message) => {
    const response = "Hey I'm Queen Hentai, a multipurpose bot developed by VERAN TECH HUB to suit your WhatsApp needs , please type ,menu to see the bot menu, made with passion by VTH, thank you.";
    
    await message.reply(response); // Send the complete message at once
  }
);

smd(
  {
    pattern: "casey", // Command trigger
    react: "🤴", // Reaction emoji for the command
    desc: "Greet and introduce the owner", // Description of the command
    category: "greeting", // Category under which the command falls
    filename: __filename, // The current file's name
  },
  async (message) => {
    const response = "The person whom you speak of is my master, my master [ *VERAN TECH HUB* ] is a software engineer who specializes in front end development, for more info about him visit [ https://wa.me//2347082664317 ] to learn more about my master. to contact him type ,owner and to contact his other colleagues type ,subowner. thank you";
    
    await message.reply(response); // Send the complete message at once
  }
);

// more coming soon
