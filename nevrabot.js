var Discord = require("discord.js");

var bot = new Discord.Client();

//message///

bot.on("message", msg => {
	
	let prefix = "!";
	 
    if (msg.content.startsWith("Who is the leader of Shadow Guard?")) {
        msg.channel.sendMessage("I'm your leader,Kitten~ <3");
    }
	
	else if (msg.content.startsWith("Who are the President and Vice President of Shadow Guard?")) {
      msg.channel.sendMessage("Vallicena and Arianni Of Course~");
    }
	
	else if (msg.content.startsWith("What's the link to Shadow Guard Blog?")) {
      msg.channel.sendMessage("https://shadowguard-official.tumblr.com/ Here is the Link to the blog~");
    }
	
	else if (msg.content.startsWith("Do you love me?")) {
      msg.channel.sendMessage("I love you with all my heart kitten~");
    }
	
	else if (msg.content.startsWith("Who do you contact for help?")) {
      msg.channel.sendMessage("You can contact @Vallicena#6245 or @Arianni#5315 for help! If not try messaging other members in 「☾Social Crow☽」.");
    }
	
	else if (msg.content.startsWith("Nevra, kiss me")) {
      msg.channel.sendMessage("Muah ~<3");
    }
	
	if(!msg.content.startsWith(prefix)) return;
		
	let command = msg.content.split(" ") [0];
	command = command.slice(prefix.length)
	
	
	if(msg.content.startsWith(prefix+"eval")) {
    try {
      var code = params.join(" ");
      var evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      msg.channel.sendCode("xl", clean(evaled));   
    } catch(err) {
      .channel.sendMessage(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }
	///test 3///
	let args = msg.content.split (" ").slice(1);
	if (command === "say"){
		msg.channel.sendMessage(args.join(" "))
	}
	
  
	if (msg.content.startsWith(prefix + "help")) {
		msg.channel.sendMessage("Hello Kitten~  Do you need help? Of course you do you decided to type that command!So here let's get started: There are 6 Chatrooms visible for you. #Rules #Announcements #Chatroom #spoilers-forbiddencavern #outside-notrelatedtothegame #nsfwBut Rules and Annoucements can only be used by Admins. Nsfw can be used by anyone but you have to agree with the rules and it's not our fault if we added you to the chat chatroom because. You asked us. I don't mean to be cold or anything but like some people blame others for their own faults. We don't want that to happen here. If you want the list of the links to contact or just check out The Shadow Guard in general send me !Links");
	}
	else if (msg.content.startsWith(prefix + "Links")) {
		msg.channel.sendMessage("Links: 「Vallicena's Profile - http://www.eldarya.com/player/profile/Vallicena 」- 「Arianni's Profile - http://www.eldarya.com/player/profile/Arianni 」 - 「Shadow Guard Blog - https://shadowguard-official.tumblr.com/ 」 ");
	}
	
	if(!msg.author.id === "268921874719834112") return;
	// get role by name
    let myRole = msg.guild.roles.find("name", "Mods");
	
	// Checks for Manage Messages permissions.
let can_manage_chans = msg.channel.permissionsFor(msg.member).hasPermission("MANAGE_MESSAGES");



});

	//Test//

///Test///
function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}

bot.on("ready", () => {
    console.log(`Ready to server in ${bot.channels.size} channels on ${bot.guilds.size} servers, for a total of ${bot.users.size} users.`);
});

bot.on("guildMemberAdd", (member) => {
    console.log(`New User "${member.user.username}" has joined "${member.guild.name}"` );
    member.guild.defaultChannel.sendMessage(`"${member.user.username}" has joined the shadow guard server! Please everyone give them a warm welcome~ <3`);
});

bot.on('error', e => { console.error(e); });
// these have not yet been re-added afaik
//bot.on('warn', e => { console.warn(e); });
// bot.on('debug', e => { console.info(e); });

let guild = bot.guilds.find("name", "Discord.js Official");


bot.on('ready', () => {
  console.log('I am ready!');
});

bot.login("MjY4NTgzNDEyMzQyODQ5NTM2.C1dHYQ.SkD-94qqy6Qn9OAZKzJbFcerx2E");