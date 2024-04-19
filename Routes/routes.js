const express = require("express");
const router = express.Router()

// Import the Controllers

const {
    createQuiz,
    getQuiz,
    getResult,
    getAllQuiz

} = require("../Controllers/QuizLogic");

const {
    login,signup
} = require("../Controllers/Auth");

const{
    auth
} = require("../Middlewares/auth");


// Route for user login
router.post("/login", login)

// Route for user signup
router.post("/signup", signup)

router.post("/quizzes",auth,createQuiz);
router.get('/quizzes/active',getQuiz);
router.get('/quizzes/:id/result',getResult);
router.get('/quizzes/all',getAllQuiz);


module.exports = router;