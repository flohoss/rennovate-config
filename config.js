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
            matchHost: 'docker.io',
            username: 'fhoss',
            password: process.env.RENOVATE_DOCKER_HUB_PASSWORD,
        },
        {
            matchHost: 'ghcr.io',
            username: 'flohoss',
            password: process.env.RENOVATE_GHCR_TOKEN,
        }
    ],
    allowedCommands: ['^curl -s -X POST .*'],
    postUpgradeTasks: {
        commands: [
            `curl -s -X POST "${process.env.RENOVATE_NTFY_URL}" -H "Authorization: Bearer ${process.env.RENOVATE_NTFY_TOKEN}" -H "X-Tags: twisted_rightwards_arrows" -H "X-Title: Renovate - {{{depName}}}" -d "{{{prTitle}}}"`
        ],
        executionMode: 'branch'
    }
};
