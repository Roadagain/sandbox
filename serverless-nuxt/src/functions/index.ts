import * as functions from 'firebase-functions'
import * as express from 'express'
const { Nuxt } = require('nuxt')

const app = express()
const nuxt = new Nuxt({
  dev: false,
  buildDir: '/nuxt',
  build: {
    publicPath: '/assets'
  }
})

const handleRequest = (req: functions.Request, res: functions.Response) => {
  res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
  return new Promise((resolve, reject) => {
    nuxt.render(req, res, (promise: Promise<any>) => {
      promise.then(resolve).catch(reject);
    });
  });
}

app.use(handleRequest)

export const nuxtApp = functions.https.onRequest(app)
