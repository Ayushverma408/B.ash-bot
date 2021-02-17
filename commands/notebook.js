module.exports = {
    name: 'notebook',
    description: "An image manipulation command to turn ur text into an image Of shouko holding a notebook with ur text",
    async execute(message, args){
        
    const Canvas = require('canvas');
    const Discord = require('discord.js');
    const client = new Discord.Client();
    const canvas = Canvas.createCanvas(530, 500);
    const ctx = canvas.getContext('2d');
    

	// Since the image takes time to load, you should await it
	const background = await Canvas.loadImage('./notebook.jpg');
	// This uses the canvas dimensions to stretch the image onto the entire canvas
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
	// Use helpful Attachment class structure to process the file for you

	ctx.strokeStyle = '#202020';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Select the font size and type from one of the natively available fonts
	ctx.font = '20px sans-serif';
	// Select the style that will be used to fill the text in
	ctx.fillStyle = '#202020';
	// Actually fill the text with a solid color
	ctx.fillText(`${args.join(" ")}`, canvas.width / 11.7, canvas.height /2.15);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'letter.png');

	message.channel.send(attachment);
		
	}

}