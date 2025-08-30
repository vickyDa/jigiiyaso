module.exports = {
  apps: [{
    name: 'jigiiyaso',
    script: 'npm',
    args: 'start',
    cwd: '/var/www/jigiiyaso',
    instances: 1,
    exec_mode: 'fork',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}
