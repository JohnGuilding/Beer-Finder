<<<<<<<<STEPS FOR GETTING HOSTED ON FIREBASE>>>>>>>>
1. HOSTING
2. USE AN EXISTING PROJECT
3. SELECT PROJECT
4. When asked "What do you want to use as your public directory" say BUILD
5. Single-page? YES
6. Auto builds? NO
(If you get a question about overwriting, say no)
7. yarn build
8. firebase deploy --only hosting

https://beer-app-bcb22.web.app/

<<<<<<<<STEPS FOR RUNNING CYPRESS TESTING>>>>>>>>
1. yarn create react-app cypresstesting
2. yarn add cypress -d
3. add "e2e" to the scripts in package.json. "scripts": { "e2e": "cypress open" }
4. run "yarn run e2e" which will take a while to run
5. delete the tests in the examples folder
6. Create one file in the integrations folder App.spec.js and write valid, invalid, null inputs
7. Arrange Act Assert inside each one
Keywords
.visit('http://localhost:3000') open the server
.get('input') will find inputs in the page
.should() is the equivalent of expect()
.type('thing we want to type') will type into a textbox