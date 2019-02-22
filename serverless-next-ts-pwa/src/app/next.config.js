const withTypescript = require('@zeit/next-typescript')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const withManifest = require('next-manifest')
module.exports = withManifest(withTypescript({
    distDir: '../../dist/functions/next',
    webpack: (config) => {
        config.plugins.push(
            new SWPrecacheWebpackPlugin({
                verbose: true,
                staticFileGlobsIgnorePatterns: [/dist\/functions\/next\//],
                runtimeCaching: [
                    {
                        handler: 'networkFirst',
                        urlPattern: /^https?.*/
                    }
                ]
            })
        )
        return config
    },
    manifest: {
        name: 'PWA Next.js with TypeScript on Firebase',
        short_name: 'pwa.next.ts'
    }
}))
