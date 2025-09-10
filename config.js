module.exports = {
    platform: 'github',
    token: process.env.RENOVATE_TOKEN,
    gitAuthor: 'Renovate Bot <renovate@unjx.de>',
    username: 'renovate[bot]',
    autodiscover: true,
    autodiscoverFilter: 'flohoss/*',
    onboarding: false,
    persistRepoData: true,
    dependencyDashboard: false,

    onboardingConfig: {
        $schema: 'https://docs.renovatebot.com/renovate-schema.json',
        extends: ['config:recommended'],
    },

    hostRules: [
        {
            hostType: 'docker',
            matchHost: 'docker.io',
            username: 'unjxde',
            password: process.env.DOCKER_HUB_PASSWORD,
        }
    ],
};
