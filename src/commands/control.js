const { commandPrefix, commands, publicControl, ownerId } = require('../config');

module.exports = {
    handleCommand: async ({ message, clients, createAutoPray, targetChannelId }) => {
        const content = message.content.toLowerCase();

        if (!content.startsWith(commandPrefix)) return;
        const command = content.slice(commandPrefix.length);

        const isAllowed = publicControl || message.author.id === ownerId;
        if (!isAllowed) return;

        if (command === commands.pauseAll) {
            clients.forEach(c => {
                if (!c.paused) {
                    c.paused = true;
                    c.autoPrayInstance?.stop();
                    console.log(`[${c.client.user.username}] paused (oleh ${message.author.username})`);
                }
            });
            await message.channel.sendTyping();
            setTimeout(() => message.channel.send('⏸ Semua akun telah dijeda.'), 1000);
        }

        if (command === commands.resumeAll) {
            clients.forEach(c => {
                if (c.paused) {
                    c.paused = false;
                    c.autoPrayInstance = createAutoPray(c.client, targetChannelId);
                    const delay = Math.floor(Math.random() * 10000) + 5000;
                    setTimeout(() => {
                        c.autoPrayInstance.start();
                        console.log(`[${c.client.user.username}] resumed`);
                    }, delay);
                }
            });
            await message.channel.sendTyping();
            setTimeout(() => message.channel.send('▶️ Semua akun telah dilanjutkan.'), 1000);
        }
    }
};