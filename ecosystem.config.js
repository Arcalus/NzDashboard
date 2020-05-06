module.exports = {
  apps: [
    {
      name: 'strapi-dev',
      cwd: '/srv/strapi/nzdashboard',
      script: 'npm',
      args: 'run develop',
      env: {
        NODE_ENV: 'development',
        DB_HOST: 'localhost',
        DB_PORT: '3306',
        DB_NAME: 'strapi_dev',
        DB_USER: 'strapi',
        DB_PASS: 'Thunder7',
        JWT_SECRET: 'd469bb07-5b94-4d05-aec6-e4ffe14dc462',
      },
    },
  ],
};
