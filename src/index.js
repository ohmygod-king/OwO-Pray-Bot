const { Client } = require('discord.js-selfbot-v13');
const fs = require('fs');
const path = require('path');
import chalk from 'chalk'
const createAutoPray = require('./utils/autoPray');
const controlCommands = require('./commands/control');
const config = require('./config');

const tokens = fs.readFileSync(path.join(__dirname, '../tokens.txt'), 'utf-8').split('\n').filter(Boolean);
const clients = [];

console.clear();
console.log(chalk.cyan(`╭───────────────────────────────────────────────╮`));
console.log(chalk.cyan(`│         Discord OwO Selfbot Multi-Token       │`));
console.log(chalk.cyan(`│             Developed by: YourName            │`));
console.log(chalk.cyan(`╰───────────────────────────────────────────────╯`));
console.log('');

tokens.forEach(token => {
    const client = new Client();

    client.on('ready', () => {
        const username = client.user.username;
        console.log(chalk.green(`[LOGIN] Berhasil login sebagai ${username}`));

        const autoPrayInstance = createAutoPray(client, config.targetChannelId);
        const clientData = { client, paused: false, autoPrayInstance };
        clients.push(clientData);

        const delay = Math.floor(Math.random() * (config.startDelay.max - config.startDelay.min + 1)) + config.startDelay.min;
        setTimeout(() => {
            autoPrayInstance.start();
            console.log(chalk.blue(`[${username}] Memulai auto-pray setelah ${delay / 1000}s`));
        }, delay);
    });

    client.on('messageCreate', async message => {
        if (message.channel.id !== config.targetChannelId) return;

        await controlCommands.handleCommand({
            message,
            clients,
            createAutoPray,
            targetChannelId: config.targetChannelId
        });

        if (config.warningKeywords.some(keyword => message.content.includes(keyword))) {
            const userClient = clients.find(c => c.client.user.id === client.user.id);
            if (userClient && !userClient.paused) {
                userClient.paused = true;
                userClient.autoPrayInstance?.stop();
                console.log(chalk.yellow(`[${client.user.username}] Auto-paused karena mendeteksi ⚠️`));
            }
        }
    });

    client.login(token).catch(err => {
        console.error(chalk.red(`[ERROR] Gagal login token: ${err.message}`));
    });
});