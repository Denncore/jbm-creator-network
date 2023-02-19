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

# Database

In order to make it possible to add and remove creators without deploying, a simple MongoDB is connected to the NestJS
backend.
It stores all relevant data of the creators. An initial insert script for the current creators is provided within this
project
insert-initial-creators. The usage of the database is also required to get the scheduled follower informations from
certain
APIs. For more informations please see the APIs section.

# APIs

Currently there are 3 official APIs used: Twitch, YouTube and Twitter. The APIs are connected
as explained in the official documentation of these links are provided at the necessary place

The official APIs from Instagram and TikTok doesn't provide the possibility to retrieve the follower / sub count.
Therefore a
workaround solution was built. In order to get the data 2 APIs from https://rapidapi.com/ are used, these provide
information by
data scrapping or connecting old APIs via proxy. The handling of these technical stuff is handled by the API Owner.
Since there are
strict ratelimits for the free usage of these APIs. The data cannot be retrieved in realtime. As a compromised solution
the data
is requested once per day, and saved in the Database. This makes it able to show relatively new infos. It is still
possible to extend
the plan of those APIs and change this to be more realtime. But this requires code changes.

Currently used RapidAPIs:

* Instagram: https://rapidapi.com/rocketapi/api/rocketapi-for-instagram/
*
TikTok: https://rapidapi.com/zetreex-group-zetreex-group-default/api/tiktok-unauthorized-api-scraper-no-watermark-analytics-feed/
