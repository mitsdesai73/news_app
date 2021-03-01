# News App

Building an application with two endpoints to get the news and analytics data from yahoo.

## Dependency: 

This application is built on Node.JS (express.js framework) as well as we used some additional packages for security purposes and unit testing purposes.

   `i. express - Node.JS Framework`
   
   `ii. joi - Joi is used as an Input Validations` 
    
   `iii. dotenv -  Used loads environment variables from a .env file`

    `iv. node-fetch -  Used to make https request`
   
   `v. nodemon - nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.`
   
   `vi. eslint - Used to identifying and reporting on patterns `
   
   `vii. jest & supertest - Used to test route API enpoints`
    
## Installation: 

#### Below are the Steps

   `i. Install the dependencies using npm install command`
   
   `ii. Create .env file and add these variables to that file`

```bash
RAPID_API_KEY = add API key here
RAPID_API_HOST = add API host here
YAHOO_SERVER_URL = https://apidojo-yahoo-finance-v1.p.rapidapi.com

#paths
ANALYTICS_API_PATH = /stock/v2/get-analysis
COMMON_NEWS_API_PATH = /auto-complete

PORT = 3001
```
      `iii. Run the Server using 'npm start' command.`
    
