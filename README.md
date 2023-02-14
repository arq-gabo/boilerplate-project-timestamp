# Timestamp Microservice

###

#

This is the boilerplate code for the Timestamp Microservice project. Instructions for building your project can be found at

https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice

![UrlShortner](https://res.cloudinary.com/dulwtefos/image/upload/v1676335127/fcc-backend/project1_i5tlw1.jpg)

&nbsp;

## [View Demo](https://boilerplate-project-timestamp.onrender.com/)

&nbsp;

### How Work

- Require Node.js version 16.15

1. Clone the project
2. `npm install` - for install dependency
3. `npm run dev` - for run development enviroment
4. `npm run start` - for run production enviroment

### Features

- The project was used express framework

### Used

- When type data in URL width format YYYY-MM-DD or just number

https://boilerplate-project-timestamp.onrender.com/api/2015-12-25

https://boilerplate-project-timestamp.onrender.com/api/1451001600000

`{"unix":1451001600000, "utc":"Fri, 25 Dec 2015 00:00:00 GMT"}`

- When in URL another type date format or type any character except num, the respond is not valid

https://boilerplate-project-timestamp.onrender.com/api/inValidDate

`{"error":"Invalid Date"}`

&nbsp;

### License MIT
