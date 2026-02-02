module.exports = {
    platform: 'github',
    token: process.env.RENOVATE_TOKEN,
    gitAuthor: 'Florian Hoss <mail@florianhoss.de>',
    username: 'flohoss',
    repositories: ['flohoss/docker-compose', 'flohoss/stacks'],
    onboarding: false,
    requireConfig: 'optional',
    hostRules: [
        {
            hostType: 'docker',
            matchHost: 'docker.io',
            username: 'unjxde',
            password: process.env.DOCKER_HUB_PASSWORD,
        },
        {
            hostType: 'docker',
            matchHost: 'ghcr.io',
            username: 'flohoss',
            password: process.env.GHCR_TOKEN,
        }
    ],
};
