# Social Network API

![badge](https://img.shields.io/badge/license-MIT-blue)

## Table-of-Contents

- [Description](#description)
- [UserStory](#user-story)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Features](#features)
- [Questions](#questions)

## [Description](#table-of-contents)

The application to build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. It uses Express.js for routing, a MongoDB database, and the Mongoose ODM. In addition to using the Express.js (Links to an external site.) and Mongoose (Links to an external site.) packages, you may also optionally use a JavaScript date library of your choice or the native JavaScript Date object to format timestamps.(For this used Moment js)

## [Usage](#table-of-contents)

Run commands listed in Installation.

For more information on how to add screenshots for examples, visit the following website:

[Mark Down Tutorial](https://agea.github.io/tutorial.md/)

[Video of the application](https://drive.google.com/file/d/158cSq_o1dkIcdozZF2hQGm9K9RMhwxc7/view)

## [User Story](#table-of-contents)

AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

### Acceptance Criteria

GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## [Installation](#table-of-contents)

- Clone this repository to use this application on local machine.

- To install necessary dependencies, run the following command :

npm i

npm install mongoose

npm i moment

- The application will be invoked with the following command: This will start localhost server on PORT 3001.

npm start

- Open Insomnia and test API routes for application

## Technologies

This app uses the following technologies:

- [Express](https://www.npmjs.com/package/express)
- [Mongoose](https://www.mongoosejs.com/package/mongoose)
- [Moment](https://momentjs.com/)

## [License](#table-of-contents)

The application is covered under the following license:
[MIT](https://choosealicense.com/licenses/MIT)

## [Contributing](#table-of-contents)

Thank you for your interest in helping out; however, I will not be accepting contributions from third parties.

## [Features](#table-of-contents)

- Used 'Express.js' to build server

- MongoDB

## [Questions](#table-of-contents)

Please contact me using the following links:

[GitHub](https://github.com/nkirti28)

[Email: nalawade.kirti@gmail.com](mailto:nalawade.kirti@gmail.com)
