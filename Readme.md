<!-- 

npm init   - auther: Name ! 

npm install express --save

node server.js   - - go to postman and add  localhost:3001 and press send for it to load your code.js

npm install --save-dev nodemon
 
 add these on the Package.json 

  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",

    either -  npx nodemon server.js   or  in order to run the code with npm run dev !

    npm install body-parser --save    new library helps the parse to json files


to install Heruku -
 from its website - (  https://devcenter.heroku.com/articles/heroku-cli#download-and-install ) - 
also it shows that you can use this code in terminal  (  $    sudo snap install --classic heroku    )

then -  
On server.js, add the process.env.PORT bit of code

app.listen(process.env.PORT || 3000, function() {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});

 -->