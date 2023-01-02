# JbmCreatorNetwork

# Dev Install
* yarn install
* yarn start
* yarn start-backend

## Architecture
The project is developed in a monorepostiory with NX Workspaces. 
The Project contains 2 main applications: 
1. ng-jbm: Frontend Angular application.
2. nest-jbm: Backend NestJS application. It contains all API connections,
   the hCaptcha validation and the SMPT configuration with actual sending 
   the contact mails

Besides the 2 applications there are a few NX libs to have a better separation
of concern and easier connection between backend and frontend


# Deployment
The Applications can be deployed by using the 2 dockerfiles 
(backend.Dockerfile & frontend.Dockerfile) a basic docker-compose.xml is 
also provided for local testing purposes.
