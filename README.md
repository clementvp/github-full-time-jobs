# Github Full Time Jobs

# Requirements
   - You need to install dependencies. Do the followings commands (in the root folder):
   `yarn install` or `npm install`
   `cd client` 
   `yarn install` or `npm install`
  - You have just installed all the dependencies for front and back.
    
   
# Development
  To run the app in dev mode you need to do the followings:
  - Open two terminals, one in the root folder, one in the client folder.
  - In the root folder start the server with `yarn dev` (it will start the server with a nodemon capabilitie)
  - In the client folder start the front with `yarn serve` (it will start a server for the front end)

You have now a server on the 3000 port (try to go to http://localhost:3000/api/full-time/1)
You have now a running front on the 8080 port (try to go to http://localhost:8080 and you will see the app)
Feel free to change the back or the front
  
# Just run the app 
  This repo contain a ready to deploy app. In the client folder there is an already builded front ( dist folder).
  The front is serve by the node server.
  To just run the app, do `yarn start` in the root folder. The server will start on the 3000 port.
  Try to go to http://localhost:3000 and you will see the running app
  
# Build the front
 To build the front you need to go to the client folder
 `cd client` and `yarn build`
 It will output a dist folder.
 ! You need to serve this dist folder with the existing server. You can't serve the front elsewhere and point to the server api url, because i'ts CORS protected. I fou want you can add CORS to the server and deploy the front elsewhere !


Project made under than two hours and twenty minutes



