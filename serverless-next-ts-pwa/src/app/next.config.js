const withTypescript = require('@zeit/next-typescript')
const withManifest = require('next-manifest')
const withOffline = require('next-offline')
module.exports = withOffline(withManifest(withTypescript({
    distDir: '../../dist/functions/next',
    manifest: {
        name: 'PWA Next.js with TypeScript on Firebase',
        short_name: 'pwa.next.ts'
    },
    workboxOpts: {
        swDest: 'static/service-worker.js'
    }
})))
