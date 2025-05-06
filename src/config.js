module.exports = {
    targetChannelId: '1368556509814067371', // Channel ID
    targetUserId: '788520888395104266', // Target User 

    prayInterval: {
        min: 5 * 60 * 1000, // 5 menit
        max: 6 * 60 * 1000  // 6 menit
    },

    startDelay: {
        min: 5000,
        max: 15000
    },

    typingDelay: {
        min: 3000,
        max: 5000
    },

    warningKeywords: ['⚠️'],

    commandPrefix: '!',
    publicControl: true,
    ownerId: '000000000000000000',

    commands: {
        pauseAll: 'pauseall',
        resumeAll: 'resumeall'
    },

    useColorLogs: true
};