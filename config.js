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
};
