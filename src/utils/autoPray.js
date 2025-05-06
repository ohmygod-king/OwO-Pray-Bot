const { prayInterval, typingDelay, targetUserId } = require('../config');
const delay = ms => new Promise(res => setTimeout(res, ms));
const randomBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const prayMessages = [`owo pray <@${targetUserId}>`, `w pray <@${targetUserId}>`, `owopray <@${targetUserId}>`, `wpray <@${targetUserId}>`];

module.exports = function createAutoPray(client, channelId) {
    let active = true;

    const start = async () => {
        while (active) {
            const channel = await client.channels.fetch(channelId).catch(() => null);
            if (!channel) {
                console.log(`[${client.user.username}] Channel tidak ditemukan`);
                return;
            }

            await channel.sendTyping();
            await delay(randomBetween(typingDelay.min, typingDelay.max));

            const command = prayMessages[Math.floor(Math.random() * prayMessages.length)];
            await channel.send(command).catch(console.error);

            await delay(randomBetween(prayInterval.min, prayInterval.max));
        }
    };

    const stop = () => {
        active = false;
    };

    return { start, stop };
};