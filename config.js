module.exports = {
    platform: 'github',
    token: process.env.RENOVATE_TOKEN,
    gitAuthor: 'Renovate Bot <renovate@unjx.de>',
    username: 'renovate[bot]',
    autodiscover: true,
    autodiscoverFilter: 'flohoss/docker-compose',
    onboarding: false,

    hostRules: [
        {
            hostType: 'docker',
            matchHost: 'docker.io',
            username: 'unjxde',
            password: process.env.DOCKER_HUB_PASSWORD,
        }
    ],
};
