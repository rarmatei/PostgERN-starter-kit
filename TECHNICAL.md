
- The communication between server and client works when developing because of adding a proxy value on `package.json` client-side, which allows the calls to API to be made without specifying the hostname. On Heroku, there is a line on the server `app.js` that makes it possible to use `express` to serve the React app serving it from the `build` folder (heroku runs `npm run build` first).
- The app is published by Heroku CI workflow on: [https://project-skeleton.herokuapp.com](https://project-skeleton.herokuapp.com)
- The PRs should also be published automatically