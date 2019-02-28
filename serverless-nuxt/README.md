# Serverless nuxt-ts
## Install dependencies
```bash
yarn
```

## Run development environment
```bash
yarn dev
```

```bash
# as a local SSR
yarn serve
```

## Deploy to firebase
```bash
yarn deploy
```

## Warnings
- 今の実装だと `cp -R` で二重コピー発生してネストする
- `firebase serve --only hosting,functions` だと動かない

## References
- https://inside.dmm.com/entry/2018/04/10/nuxt-firebase
- https://github.com/zeit/next.js/tree/master/examples/with-firebase-hosting-and-typescript
