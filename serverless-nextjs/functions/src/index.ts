import * as functions from 'firebase-functions';
import * as index from '../../.next/serverless/pages/index'

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

export const indexPage = functions.https.onRequest(index.render);
