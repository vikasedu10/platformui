const config = {
  branches: [
    'main',
    {
      name: 'beta',
      prerelease: true
    }
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    "@semantic-release/github",    
    ["@semantic-release/npm", {
      "npmPublish": false
    }],
    ['@semantic-release/git', {
        assets: ['build/*'],
        message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
      }
    ]
  ]
}
module.exports = config;
