module.exports = {
    platform: 'gitea',
    endpoint: 'https://git.unjx.de/api/v1/',
    gitAuthor: 'Renovate Bot <renovate@unjx.de>',
    username: 'renovate',
    autodiscover: true,
    onboardingConfig: {
        $schema: 'https://docs.renovatebot.com/renovate-schema.json',
        extends: ['config:recommended'],
    },
    optimizeForDisabled: true,
    persistRepoData: true,
    hostRules: [
        {
            hostType: 'docker',
            username: 'unjxde',
            password: process.env.DOCKER_HUB_PASSWORD,
            concurrentRequestLimit: 2,
        },
        {
            hostType: 'docker',
            matchHost: 'ghcr.io',
            username: 'flohoss',
            password: process.env.RENOVATE_GITHUB_COM_TOKEN,
        },
        {
            hostType: 'docker',
            matchHost: 'dock.mau.dev'
        },
        {
            hostType: 'docker',
            matchHost: 'codeberg.org'
        }
    ],
};
