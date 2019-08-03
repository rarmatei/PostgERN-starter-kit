# Skeleton

## Get started

After Cloning

- run `npm run install` on both client and server.
- run `npm run dev` on `server` and `client`. (on client, `npm start` can also be used but we have `dev` on both to keep it consistent)
- The communication between server and client works when developing because of adding a proxy value on `package.json` client-side, which allows the calls to API to be made without specifying the hostname. On Heroku, there is a line on the server `app.js` that makes it possible to use `express` to serve the React app serving it from the `build` folder (heroku runs `npm run build` first).
- The app is published by Heroku CI workflow on: [https://project-skeleton.herokuapp.com](https://project-skeleton.herokuapp.com)
- The PRs should also be published automatically

## Overview
The React skeleton is create with `create-react-app`. In addition to default template, these were added:
- `react-router` was added with three sample routes.
- `axios` was added for http calls - we didn't introduce it before but we can do so. It makes non-GET calls easier.
- Deleted `serviceWorker.js`
- CSS: included is Bootstrap as CSS link. Is that ok? Using react-bootstrap (or react-material) has been a pain in the past.
- CSS: Do we use something like CSS modules (it's easy, and might help us/them avoid cascading issues and work in paralle. Also another tickbox in their knowledge)
- Divided the app into `containers` (for smart components with state, mostly top-level pages) vs `components` (dumb stateless components) folder. This is common practice, but maybe unnecessary for our scale?
- Tests are moved to top-level `__tests` folder (we could introduce those, and have writing tests as stretch goal for some students)
- use `yarn` or `npm` - which one to pick? It would be good to be consistent on server and client.
- For the api calls, there is `helpers/api.js` module, do we put all api calls in one file or divide them, i.e. `helpers/specific_api.js` and `helpers/specific_api_2.js`. Feels like second approach might minimise conflicts?
- What linting configuration to use?


## ToDo
- Database creation - how do we do it? using `pg` library, where/how do we save the script to minimise conflicts? We agreed on droppping and recreating the DB everytime as opposed to doing migrations like last time to keep it simple. 
- Add linting, git hooks to project?
- Add auth to skeleton, or at least, add step by step on how to implement it
- Preparet walkthrough of skeleton for project kickoff: most time spent on branching and Git flow process, but also cover high-level what happens on CI, introduce axios, project structure etc...
