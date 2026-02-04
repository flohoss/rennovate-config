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
            password: String(process.env.DOCKER_HUB_PASSWORD || ''),
        },
        {
            hostType: 'docker',
            matchHost: 'ghcr.io',
            username: 'flohoss',
            password: String(process.env.GHCR_TOKEN || ''),
        }
    ],
    allowedPostUpgradeCommands: ['^curl -s -X POST .*'],
    postUpgradeTasks: {
        commands: [
            'curl -s -X POST "$NTFY_URL" -H "Authorization: Bearer $NTFY_TOKEN" -H "X-Tags: twisted_rightwards_arrows" -H "X-Title: Renovate PR - {{{depName}}}" -d "A Renovate PR has been created/updated for {{{depName}}} ({{{currentVersion}}} → {{{newVersion}}})"'
        ],
        executionMode: 'branch'
    }
};
