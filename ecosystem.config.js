module.exports = {
  apps: [
    {
      name: 'dashboard-template',
      script: 'serve',
      env: {
        PM2_SERVE_PATH: './next/',
        PM2_SERVE_PORT: 4040,
      },
    },
  ],

  deploy: {
    production: {
      user: 'SSH_USERNAME',
      host: 'SSH_HOSTMACHINE',
      ref: 'origin/master',
      repo: 'GIT_REPOSITORY',
      path: 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy':
        'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
    },
  },
};
