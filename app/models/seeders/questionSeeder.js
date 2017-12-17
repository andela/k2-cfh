const mongoose = require('mongoose'),
  config = require('../../../config/config'),
  QuestionModel = mongoose.model('Question');

const questions = [
  /* 1 */
  {
    id: 1,
    numAnswers: 1,
    official: true,
    location: 'Africa',
    expansion: 'expansion',
    text: 'How old were you 10 years ago?_'
  },

  /* 2 */
  {
    id: 2,
    numAnswers: 1,
    official: true,
    location: 'Africa',
    expansion: 'expansion',
    text: 'What did you do last weekend?_'
  },

  /* 3 */
  {
    id: 3,
    numAnswers: 1,
    official: true,
    location: 'Africa',
    expansion: 'expansion',
    text: 'How did you know you were in love?_'
  },

  /* 4 */
  {
    id: 4,
    numAnswers: 1,
    official: true,
    location: 'Africa',
    expansion: 'expansion',
    text: 'Do you recycle?_'
  },

  /* 5 */
  {
    id: 5,
    numAnswers: 1,
    official: true,
    location: 'Africa',
    expansion: 'expansion',
    text: 'Do you have any pets?_'
  },

  /* 6 */
  {
    id: 6,
    numAnswers: 1,
    official: true,
    location: 'Africa',
    expansion: 'expansion',
    text: 'Do you love mugabe?_'
  },

  /* 7 */
  {
    id: 7,
    numAnswers: 1,
    official: true,
    location: 'Africa',
    expansion: 'expansion',
    text: 'Do you look like a cheetah?_'
  },

  /* 8 */
  {
    id: 8,
    numAnswers: 1,
    official: true,
    location: 'Africa',
    expansion: 'expansion',
    text: 'What is a buffalo?_'
  },

  /* 9 */
  {
    id: 9,
    numAnswers: 1,
    official: true,
    location: 'Africa',
    expansion: 'expansion',
    text: 'How long does it take a fly to mate?_'
  },

  /* 10 */
  {
    id: 10,
    numAnswers: 1,
    official: true,
    location: 'Africa',
    expansion: 'expansion',
    text: 'Why are Nigerians smart?_'
  },

  /* 11 */
  {
    id: 11,
    numAnswers: 1,
    official: true,
    location: 'Africa',
    expansion: 'expansion',
    text: 'Why is south Africa in the south?_'
  },

  /* 12 */
  {
    id: 12,
    numAnswers: 1,
    official: true,
    location: 'Africa',
    expansion: 'expansion',
    text: 'Are you an African python?_'
  },

  /* 13 */
  {
    id: 13,
    numAnswers: 1,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'Do you sleep for a living?_'
  },

  /* 14 */
  {
    id: 14,
    numAnswers: 1,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'Are all Americans white?_'
  },

  /* 15 */
  {
    id: 15,
    numAnswers: 1,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'When does it snow, January?_'
  },

  /* 16 */
  {
    id: 16,
    numAnswers: 1,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'Why are you in this world?_'
  },

  /* 17 */
  {
    id: 17,
    numAnswers: 1,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'What is summer?_'
  },

  /* 18 */
  {
    id: 18,
    numAnswers: 1,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'Do you love summer?_'
  },

  /* 19 */
  {
    id: 19,
    numAnswers: 1,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'Are you a serial killer?_'
  },

  /* 20 */
  {
    id: 20,
    numAnswers: 1,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'Are you a joker?_'
  },

  /* 21 */
  {
    id: 21,
    numAnswers: 1,
    official: true,
    location: 'South America',
    expansion: 'expansion',
    text: 'Do you smoke?_'
  },

  /* 22 */
  {
    id: 22,
    numAnswers: 1,
    official: true,
    location: 'South America',
    expansion: 'expansion',
    text: 'Are you a drug addict?_'
  },

  /* 23 */
  {
    id: 23,
    numAnswers: 1,
    official: true,
    location: 'South America',
    expansion: 'expansion',
    text: 'Do you smoke Heroin?_'
  },

  /* 24 */
  {
    id: 24,
    numAnswers: 1,
    official: true,
    location: 'South America',
    expansion: 'expansion',
    text: 'What is a Coca plant?_'
  },

  /* 25 */
  {
    id: 25,
    numAnswers: 1,
    official: true,
    location: 'South America',
    expansion: 'expansion',
    text: 'Are you from Mexico?_'
  },

  /* 26 */
  {
    id: 26,
    numAnswers: 1,
    official: true,
    location: 'South America',
    expansion: 'expansion',
    text: 'Have been to your house before?_'
  },

  /* 27 */
  {
    id: 27,
    numAnswers: 1,
    official: true,
    location: 'South America',
    expansion: 'expansion',
    text: 'Are mexicans also black?_'
  },

  /* 28 */
  {
    id: 28,
    numAnswers: 1,
    official: true,
    location: 'South America',
    expansion: 'expansion',
    text: 'Are you a baroness?_'
  },

  /* 29 */
  {
    id: 29,
    numAnswers: 1,
    official: true,
    location: 'South America',
    expansion: 'expansion',
    text: 'Do you live in Argentina?_'
  },

  /* 30 */
  {
    id: 30,
    numAnswers: 1,
    official: true,
    location: 'South America',
    expansion: 'expansion',
    text: 'Are you a south American?_'
  },

  /* 31 */
  {
    id: 31,
    numAnswers: 1,
    official: true,
    location: 'North America',
    expansion: 'expansion',
    text: 'Are you a northerner?_'
  },

  /* 32 */
  {
    id: 32,
    numAnswers: 1,
    official: true,
    location: 'North America',
    expansion: 'expansion',
    text: 'What are you doing here?_'
  },

  /* 33 */
  {
    id: 33,
    numAnswers: 1,
    official: true,
    location: 'North America',
    expansion: 'expansion',
    text: 'Do you love coke?_'
  },

  /* 34 */
  {
    id: 34,
    numAnswers: 1,
    official: true,
    location: 'North America',
    expansion: 'expansion',
    text: 'Are you a woman?_'
  },

  /* 35 */
  {
    id: 35,
    numAnswers: 1,
    official: true,
    location: 'North America',
    expansion: 'expansion',
    text: 'Are you a man?_'
  },

  /* 36 */
  {
    id: 36,
    numAnswers: 1,
    official: true,
    location: 'North America',
    expansion: 'expansion',
    text: 'Are you a chicken?_'
  },

  /* 37 */
  {
    id: 37,
    numAnswers: 1,
    official: true,
    location: 'North America',
    expansion: 'expansion',
    text: 'What is the color of your toes?_'
  },

  /* 38 */
  {
    id: 38,
    numAnswers: 1,
    official: true,
    location: 'North America',
    expansion: 'expansion',
    text: 'Are you from Hawaii?_'
  },

  /* 39 */
  {
    id: 39,
    numAnswers: 1,
    official: true,
    location: 'North America',
    expansion: 'expansion',
    text: 'Why do you have a long nose?_'
  },

  /* 40 */
  {
    id: 40,
    numAnswers: 1,
    official: true,
    location: 'North America',
    expansion: 'expansion',
    text: 'Do you swim?_'
  },

  /* 41 */
  {
    id: 41,
    numAnswers: 1,
    official: true,
    location: 'Europe',
    expansion: 'expansion',
    text: 'Do you speak through your nose?_'
  },

  /* 42 */
  {
    id: 42,
    numAnswers: 1,
    official: true,
    location: 'Asia',
    expansion: 'expansion',
    text: 'Do you have small eyes?_'
  },

  /* 43 */
  {
    id: 43,
    numAnswers: 1,
    official: true,
    location: 'Asia',
    expansion: 'expansion',
    text: 'Who killed you president?_'
  },

  /* 44 */
  {
    id: 44,
    numAnswers: 1,
    official: true,
    location: 'Asia',
    expansion: 'expansion',
    text: 'Do you speak hindu?_'
  },

  /* 45 */
  {
    id: 45,
    numAnswers: 1,
    official: true,
    location: 'Asia',
    expansion: 'expansion',
    text: 'Why are you black?_'
  },

  /* 46 */
  {
    id: 46,
    numAnswers: 1,
    official: true,
    location: 'Asia',
    expansion: 'expansion',
    text: 'Do you grow?_'
  },

  /* 47 */
  {
    id: 47,
    numAnswers: 1,
    official: true,
    location: 'Asia',
    expansion: 'expansion',
    text: 'What does Dick Cheeney prefer?_'
  },

  /* 48 */
  {
    id: 48,
    numAnswers: 1,
    official: true,
    location: 'Asia',
    expansion: 'expansion',
    text: 'What gets better with age?_'
  },

  /* 49 */
  {
    id: 49,
    numAnswers: 1,
    official: true,
    location: 'Asia',
    expansion: 'expansion',
    text: 'Have your ever lost?_'
  },

  /* 50 */
  {
    id: 50,
    numAnswers: 1,
    official: true,
    location: 'Asia',
    expansion: 'expansion',
    text: 'Are you in love?_'
  },

  {
    id: 51,
    official: true,
    location: 'Asia',
    expansion: 'expansion',
    text: 'Is your name Xi Chi?_'
  },

  /* 2 */
  {
    id: 52,
    official: true,
    location: 'Asia',
    expansion: 'expansion',
    text: 'Is your name _?'
  },

  /* 3 */
  {
    id: 53,
    official: true,
    location: 'Antartica',
    expansion: 'expansion',
    text: 'Do you love Ice?_'
  },

  /* 4 */
  {
    id: 54,
    official: true,
    location: 'Antartica',
    expansion: 'expansion',
    text: 'Is snow red?_'
  },

  /* 5 */
  {
    id: 55,
    official: true,
    location: 'Antartica',
    expansion: 'expansion',
    text: 'What is the color of love?_'
  },

  /* 6 */
  {
    id: 56,
    official: true,
    location: 'Antartica',
    expansion: 'expansion',
    text: 'What is the color of blue?_'
  },

  /* 7 */
  {
    id: 57,
    official: true,
    location: 'Antartica',
    expansion: 'expansion',
    text: 'What is the color of snow?_'
  },

  /* 8 */
  {
    id: 58,
    official: true,
    location: 'Antartica',
    expansion: 'expansion',
    text: 'What does a fish look like?_'
  },

  /* 9 */
  {
    id: 59,
    official: true,
    location: 'Antartica',
    expansion: 'expansion',
    text: 'Who is John Snow?_'
  },

  /* 10 */
  {
    id: 60,
    official: true,
    location: 'Antartica',
    expansion: 'expansion',
    text: 'Are you a white walker?_'
  },

  /* 11 */
  {
    id: 61,
    official: true,
    location: 'Antartica',
    expansion: 'expansion',
    text: 'Are you cold?_'
  },

  /* 12 */
  {
    id: 62,
    official: true,
    location: 'Australia',
    expansion: 'expansion',
    text: 'Where are you from?_'
  },

  /* 13 */
  {
    id: 63,
    official: true,
    location: 'Australia',
    expansion: 'expansion',
    text: 'Are you a dolphin?_'
  },

  /* 14 */
  {
    id: 64,
    official: true,
    location: 'Australia',
    expansion: 'expansion',
    text: 'Does the sun shine in Australia?_'
  },

  /* 15 */
  {
    id: 65,
    official: true,
    location: 'Australia',
    expansion: 'expansion',
    text: 'Do you eat fish?_'
  },

  /* 16 */
  {
    id: 66,
    official: true,
    location: 'Australia',
    expansion: 'expansion',
    text: 'Do you consume sea food?_'
  },

  /* 17 */
  {
    id: 67,
    official: true,
    location: 'Australia',
    expansion: 'expansion',
    text: 'Are you an alien?_'
  },

  /* 18 */
  {
    id: 68,
    official: true,
    location: 'Australia',
    expansion: 'expansion',
    text: 'Can you see me?_'
  },

  /* 19 */
  {
    id: 69,
    official: true,
    location: 'Australia',
    expansion: 'expansion',
    text: 'Do you live in Africa?_'
  },

  /* 20 */
  {
    id: 70,
    official: true,
    location: 'Australia',
    expansion: 'expansion',
    text: 'What is the meaning of Australia?_'
  }
];

QuestionModel.remove({}, () => {
  questions.map((question) => {
    const newQuestion = new QuestionModel(question);
    return newQuestion.save();
  });
});

