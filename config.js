module.exports = {
    platform: 'github',
    token: process.env.RENOVATE_TOKEN,
    gitAuthor: 'Renovate Bot <renovate@unjx.de>',
    username: 'renovate[bot]',
    autodiscover: true,
    autodiscoverFilter: String(process.env.TARGET_REPO || ''),
    onboarding: false,

    hostRules: [
        {
            hostType: 'docker',
            matchHost: 'docker.io',
            username: String(process.env.DOCKER_HUB_USERNAME || ''),
            password: String(process.env.DOCKER_HUB_PASSWORD || ''),
        },
        {
            hostType: 'docker',
            matchHost: 'ghcr.io',
            username: String(process.env.GHCR_USERNAME || ''),
            password: String(process.env.GHCR_TOKEN || ''),
        }
    ],
};
