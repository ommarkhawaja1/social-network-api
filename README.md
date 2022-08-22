# Social_Network_api

  https://spdx.org/licenses/MIT.html

  ## Table of Contents

  * [Description](#description)
  * [License](#license)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Test](#test)
  * [Questions](#questions)

  ## Description
  This is a social network web application where users can share their thoughts, react to friends' thoughts, and create a friends list. This application utilizes MongoDB and Mongoose to allow storage and retrieval of userdata from a database. This application is not deployed, however it can be easily integrated with client side code to create a fully functional social web application. 
  ## License
  * This application is covered by ![LICENSE BADGE](https://img.shields.io/badge/license-MIT-brightgreen?style=for-the-badge).
  ## Installation
  To install this program, simply clone this repo to your device and ensure you have Node.js and MongoDB installed on your system. Then, install the dependencies to your code and start the server locally using `npm start`. 
  ## Usage
This repository contains an API for a Social Network Web Application. Below are the options for api calls

* ../api/ -->GET all users & POST add user
* ../api/users/:userId -->GEt user by id, PUT/edit user data, DELETE/remove user
* ../api/:userId/friends/:friendId --> PUT/add friend, DELTE/remove friend
* ../api/thoughts/ --> GET all thoughts
* ../api/thoughts/:userId -->POST/add a thought
* ../api/thoughts/:userId/:thoughtId --> DELTE a thought
* ../api/thoughts/:thoughtId --> GET a single thought, UPDATE a thought
* ../api/thoughts/:thoughtId/reactions --> POST/add a reaction
*  ../api/thoughts/:thoughtId/reactions/:reactioId --> DELETE a reaction
  ## Test
Utilize Insomnia or Postman to test api routes locally. 

  ## Questions:
  ### If you have any questions, you may contact me at either
  ### Github: https://github.com/ommarkhawaja1
  ### or
  ### Email: ommarkhawaja1@gmail.com
