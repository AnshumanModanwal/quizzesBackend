                                                                  **QuizApplication**
                                                
This is a simple quiz application backend built with Node.js, Express.js, and MongoDB. It provides functionality for creating quizzes, retrieving active quizzes, getting quiz results, and fetching all quizzes.

                                 **Features**
signup: User can signup using email and password by sending Post request to /signup

login: User can login using email and password by sending Post request to /login

Create Quiz: Users can create quizzes by sending a POST request to the /quizzes endpoint.

Get Active Quiz: Users can retrieve the currently active quiz (within the start and end time) by sending a GET request to the /quizzes/active endpoint.

Get Quiz Result: After the end time of the quiz, users can retrieve the quiz result by sending a GET request to the /quizzes/:id/result endpoint, where :id is the quiz's unique identifier.

Get All Quizzes: Users can retrieve all quizzes (including inactive and finished) by sending a GET request to the /quizzes/all endpoint.

                              **Installation**
Clone the repository:

git clone https://github.com/AnshumanModanwal/quizzesBackend.git

Install dependencies:

cd quizzesBackend

npm install

Set up environment variables:Create a .env file in the root directory and define the following variables:

PORT=4000

MONGODB_URI=your_mongodb_uri

JWT_SECRET=your_jwt_secret

Start the server:

npm start

                                 **API Documentation**
Create Quiz:

To create quiz you need to be a registered user. So first signup using Post /signup endpoint and then login using /login endpoints. On login a token will be create which will use for authentication.

Endpoint: POST /quizzes

Required fields in the request body:

question: The text of the question.

options: An array of strings representing answer options.

rightAnswer: The index of the correct answer in the options array (starting from 0).

startDate: The date and time (ISO format) when the quiz should start.

endDate: The date and time (ISO format) when the quiz should end.

Get Active Quiz: Endpoint: GET /quizzes/active

Get Quiz Result: Endpoint: GET /quizzes/:id/result

After 5 minutes of the quiz's end time, users can retrieve the quiz result.

Get All Quizzes: Endpoint: GET /quizzes/all

                     **Technologies Used**
Node.js

Express.js

MongoDB

Mongoose

JWT Authentication

                                     **License**
This project is licensed under the MIT License - see the LICENSE file for details.

Feel free to customize this README file with more details about your project, its architecture, usage instructions, and any other relevant information.
