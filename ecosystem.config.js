module.exports = {
    apps: [
        {
            name: 'ftisu',
            port: '3000',
            host: "127.0.0.1",
            exec_mode: 'cluster',
            instances: 'max',
            script: './.output/server/index.mjs'
        }
    ]
}
