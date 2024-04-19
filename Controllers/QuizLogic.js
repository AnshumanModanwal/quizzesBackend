const express = require('express');

const Quiz = require('../Models/quiz');

// Create a quiz
exports.createQuiz = async (req, res) => {
  try {
    const quiz = new Quiz(req.body);
    await quiz.save();
    res.status(201).send(quiz);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get active quiz
exports.getQuiz= async (req, res) => {
  try {
    const now = new Date();
    const activeQuiz = await Quiz.findOne({ startDate: { $lte: now }, endDate: { $gte: now }, status: 'active' });
    if (!activeQuiz) {
      return res.status(404).send({ error: 'No active quiz found.' });
    }
    res.send(activeQuiz);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get quiz result
exports.getResult= async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) {
      return res.status(404).send({ error: 'Quiz not found.' });
    }
    const now = new Date();
    const endTimePlusFiveMinutes = new Date(quiz.endDate.getTime() + 5 * 60000); // Adding 5 minutes to end time
    if (now < endTimePlusFiveMinutes) {
      return res.status(400).send({ error: 'Quiz result is not available yet.' });
    }
    res.send({ correctAnswer: quiz.options[quiz.rightAnswer] });
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get all quizzes
exports.getAllQuiz= async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.send(quizzes);
  } catch (error) {
    res.status(500).send(error);
  }
};

