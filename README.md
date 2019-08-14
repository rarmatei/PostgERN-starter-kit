# Skeleton

## Get started

After Cloning

Initial setup:

- run `npm run install` in root (this will `npm install` on both client and server)
- run `npm run dev` in root - You might see some error and the API calls to the database won't work though! Let's fix that!
- `cd` into `server` and `npm run initial-db-setup` (this will create and populate your DB)

Your team will now want their own DB name, tables and data. So one team member needs to:
- open `server/__db/initial-setup.sql` and replace `cyf_test` with your own DB name
- open `server/__db/db-config.js` and replace `cyf_test` with your own DB name
- open `recreate-db.sql` and your own DB schema and give it some test data
- commit and push above changes

Once the other team members go the above you'll need to:
- `cd` into `server` and `npm run initial-db-setup` (this will create and populate your new team's DB with the data your colleague added)

Development workflow:

Anytime you're ready to work again on the project just do:
- `npm run dev` in root (changes you make should be picked up automatically)

If you want to work a new ticket/feature:
- `git checkout master`
- `git pull upstream`
- `git checkout -b my-new-feature`
- `npm run recreate-db`
- `npm run dev`



