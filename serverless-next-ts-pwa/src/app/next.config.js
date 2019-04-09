const withTypescript = require('@zeit/next-typescript')
const withOffline = require('next-offline')
const path = require('path')

const registerSwPrefix = '/_next/static'
module.exports = withOffline(withTypescript({
    distDir: '../../dist/functions/next',
    registerSwPrefix,
    scope: path.join(registerSwPrefix, '/'),
    workboxOpts: {
        swDest: 'static/service-worker.js'
    }
}))
