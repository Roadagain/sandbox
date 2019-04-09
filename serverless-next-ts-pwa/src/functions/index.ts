import * as functions from 'firebase-functions';
import * as next from 'next';

const app = next({ dev: false, conf: { distDir: 'next' } });
const handle = app.getRequestHandler();

export const nextApp = functions.https.onRequest((req, res) => {
    console.log('File: ' + req.originalUrl);
    return app.prepare().then(() => handle(req, res));
});
