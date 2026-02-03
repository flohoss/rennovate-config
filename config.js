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
    postUpgradeTasks: {
        commands: [
            'curl -s -X POST "$NTFY_URL" -H "Authorization: Bearer $NTFY_TOKEN" -H "X-Tags: twisted_rightwards_arrows" -H "X-Title: Renovate PR - {{{depName}}}" -H "X-Actions: view, Open PR, {{{prUrl}}}" -d "A Renovate PR has been created/updated for {{{depName}}} ({{{currentVersion}}} → {{{newVersion}}})"'
        ],
        executionMode: 'branch'
    }
};
