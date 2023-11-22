module.exports = {
    apps: [
        {
            name: 'ftisu',
            port: '3000',
            host: "127.0.0.1",
            interpreter: "/root/.bun/bin/bun", // Path to the Bun interprete
            script: './.output/server/index.mjs'
        }
    ]
}
