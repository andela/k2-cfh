var mongoose = require('mongoose'),
  config = require('../../../config/config'),
  AnswerModel = mongoose.model('Answer');

const answers = [
  /* 1 */
  {
    id: 1,
    official: true,
    location: 'Africa',
    expansion: 'expansion',
    text: 'Robert Mugabe'
  },

  /* 2 */
  {
    id: 2,
    official: true,
    location: 'Africa',
    expansion: 'expansion',
    text: 'Olusegun Obasanjo'
  },

  /* 3 */
  {
    id: 3,
    official: true,
    location: 'Africa',
    expansion: 'expansion',
    text: 'Umaru Musa'
  },

  /* 4 */
  {
    id: 4,
    official: true,
    location: 'Africa',
    expansion: 'expansion',
    text: 'Nelson Mandela'
  },

  /* 5 */
  {
    id: 5,
    official: true,
    location: 'Africa',
    expansion: 'expansion',
    text: 'Desmond Tutu'
  },

  /* 6 */
  {
    id: 6,
    official: true,
    location: 'Africa',
    expansion: 'expansion',
    text: 'No we are whites'
  },

  /* 7 */
  {
    id: 7,
    official: true,
    location: 'Africa',
    expansion: 'expansion',
    text: 'I am a cheetah'
  },

  /* 8 */
  {
    id: 8,
    official: true,
    location: 'Africa',
    expansion: 'expansion',
    text: "Because they don't read"
  },

  /* 9 */
  {
    id: 9,
    official: true,
    location: 'Africa',
    expansion: 'expansion',
    text: 'I have a snake'
  },

  /* 10 */
  {
    id: 10,
    official: true,
    location: 'Africa',
    expansion: 'expansion',
    text: 'Rice and beans'
  },

  {
    id: 11,
    official: true,
    location: 'Africa',
    expansion: 'expansion',
    text: 'Robert Mugabe'
  },

  /* 2 */
  {
    id: 12,
    official: true,
    location: 'Africa',
    expansion: 'expansion',
    text: 'Olusegun Obasanjo'
  },

  /* 3 */
  {
    id: 13,
    official: true,
    location: 'Africa',
    expansion: 'expansion',
    text: 'Umaru Musa'
  },

  /* 4 */
  {
    id: 14,
    official: true,
    location: 'Africa',
    expansion: 'expansion',
    text: 'Nelson Mandela'
  },

  /* 5 */
  {
    id: 15,
    official: true,
    location: 'Africa',
    expansion: 'expansion',
    text: 'Desmond Tutu'
  },

  /* 6 */
  {
    id: 16,
    official: true,
    location: 'Africa',
    expansion: 'expansion',
    text: 'No we are whites'
  },

  /* 7 */
  {
    id: 17,
    official: true,
    location: 'Africa',
    expansion: 'expansion',
    text: 'I am a cheetah'
  },

  /* 8 */
  {
    id: 18,
    official: true,
    location: 'Africa',
    expansion: 'expansion',
    text: "Because they don't read"
  },

  /* 9 */
  {
    id: 19,
    official: true,
    location: 'Africa',
    expansion: 'expansion',
    text: 'I have a snake'
  },

  /* 10 */
  {
    id: 20,
    official: true,
    location: 'Africa',
    expansion: 'expansion',
    text: 'Rice and beans'
  },

  {
    id: 21,
    official: true,
    location: 'Africa',
    expansion: 'expansion',
    text: 'Robert Mugabe'
  },

  /* 2 */
  {
    id: 22,
    official: true,
    location: 'Africa',
    expansion: 'expansion',
    text: 'Olusegun Obasanjo'
  },

  /* 3 */
  {
    id: 23,
    official: true,
    location: 'Africa',
    expansion: 'expansion',
    text: 'Umaru Musa'
  },

  /* 4 */
  {
    id: 24,
    official: true,
    location: 'Africa',
    expansion: 'expansion',
    text: 'Nelson Mandela'
  },

  /* 5 */
  {
    id: 25,
    official: true,
    location: 'Africa',
    expansion: 'expansion',
    text: 'Desmond Tutu'
  },

  /* 6 */
  {
    id: 26,
    official: true,
    location: 'Africa',
    expansion: 'expansion',
    text: 'No we are whites'
  },

  /* 7 */
  {
    id: 27,
    official: true,
    location: 'Africa',
    expansion: 'expansion',
    text: 'I am a cheetah'
  },

  /* 8 */
  {
    id: 28,
    official: true,
    location: 'Africa',
    expansion: 'expansion',
    text: "Because they don't read"
  },

  /* 9 */
  {
    id: 29,
    official: true,
    location: 'Africa',
    expansion: 'expansion',
    text: 'I have a snake'
  },

  /* 10 */
  {
    id: 30,
    official: true,
    location: 'Africa',
    expansion: 'expansion',
    text: 'Rice and beans'
  },

  {
    id: 31,
    official: true,
    location: 'Africa',
    expansion: 'expansion',
    text: 'Robert Mugabe'
  },

  /* 2 */
  {
    id: 32,
    official: true,
    location: 'Africa',
    expansion: 'expansion',
    text: 'Olusegun Obasanjo'
  },

  /* 3 */
  {
    id: 33,
    official: true,
    location: 'Africa',
    expansion: 'expansion',
    text: 'Umaru Musa'
  },

  /* 4 */
  {
    id: 34,
    official: true,
    location: 'Africa',
    expansion: 'expansion',
    text: 'Nelson Mandela'
  },

  /* 5 */
  {
    id: 95,
    official: true,
    location: 'Africa',
    expansion: 'expansion',
    text: 'Desmond Tutu'
  },

  /* 6 */
  {
    id: 196,
    official: true,
    location: 'Africa',
    expansion: 'expansion',
    text: 'No we are whites'
  },

  /* 7 */
  {
    id: 137,
    official: true,
    location: 'Africa',
    expansion: 'expansion',
    text: 'I am a cheetah'
  },

  /* 8 */
  {
    id: 178,
    official: true,
    location: 'Africa',
    expansion: 'expansion',
    text: "Because they don't read"
  },

  /* 9 */
  {
    id: 119,
    official: true,
    location: 'Africa',
    expansion: 'expansion',
    text: 'I have a snake'
  },

  /* 10 */
  {
    id: 201,
    official: true,
    location: 'Africa',
    expansion: 'expansion',
    text: 'Rice and beans'
  },

  /* 11 */
  {
    id: 21,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'I am white elephant'
  },

  /* 12 */
  {
    id: 22,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'I am a baby Tiger'
  },

  /* 13 */
  {
    id: 23,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'No, Africa is in America'
  },

  /* 14 */
  {
    id: 24,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'China is a town'
  },

  /* 15 */
  {
    id: 25,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'I am a here to eat'
  },

  /* 16 */
  {
    id: 26,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'I love winter'
  },

  /* 17 */
  {
    id: 27,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'I love Autumn'
  },

  /* 18 */
  {
    id: 28,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'I am a player'
  },

  /* 19 */
  {
    id: 29,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'Ice creams tastes better'
  },

  /* 20 */
  {
    id: 30,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'I am a fashion killer'
  },
  {
    id: 21,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'I am white elephant'
  },

  /* 12 */
  {
    id: 262,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'I am a baby Tiger'
  },

  /* 13 */
  {
    id: 223,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'No, Africa is in America'
  },

  /* 14 */
  {
    id: 204,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'China is a town'
  },

  /* 15 */
  {
    id: 295,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'I am a here to eat'
  },

  /* 16 */
  {
    id: 626,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'I love winter'
  },

  /* 17 */
  {
    id: 227,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'I love Autumn'
  },

  /* 18 */
  {
    id: 238,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'I am a player'
  },

  /* 19 */
  {
    id: 292,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'Ice creams tastes better'
  },

  /* 20 */
  {
    id: 305,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'I am a fashion killer'
  },
  {
    id: 21,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'I am white elephant'
  },

  /* 12 */
  {
    id: 22,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'I am a baby Tiger'
  },

  /* 13 */
  {
    id: 23,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'No, Africa is in America'
  },

  /* 14 */
  {
    id: 24,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'China is a town'
  },

  /* 15 */
  {
    id: 25,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'I am a here to eat'
  },

  /* 16 */
  {
    id: 26,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'I love winter'
  },

  /* 17 */
  {
    id: 27,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'I love Autumn'
  },

  /* 18 */
  {
    id: 28,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'I am a player'
  },

  /* 19 */
  {
    id: 29,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'Ice creams tastes better'
  },

  /* 20 */
  {
    id: 30,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'I am a fashion killer'
  },

  /* 21 */
  {
    id: 31,
    official: true,
    location: 'Antartica',
    expansion: 'expansion',
    text: 'Snow is blue in color'
  },

  /* 22 */
  {
    id: 32,
    official: true,
    location: 'Antartica',
    expansion: 'expansion',
    text: 'Snow is the sun'
  },

  /* 23 */
  {
    id: 33,
    official: true,
    location: 'Antartica',
    expansion: 'expansion',
    text: 'A dolphin'
  },

  /* 24 */
  {
    id: 34,
    official: true,
    location: 'Antartica',
    expansion: 'expansion',
    text: 'A goat'
  },

  /* 25 */
  {
    id: 35,
    official: true,
    location: 'Antartica',
    expansion: 'expansion',
    text: 'A fish'
  },

  /* 26 */
  {
    id: 36,
    official: true,
    location: 'Antartica',
    expansion: 'expansion',
    text: 'Berries'
  },

  /* 27 */
  {
    id: 37,
    official: true,
    location: 'Antartica',
    expansion: 'expansion',
    text: 'A desert'
  },

  /* 28 */
  {
    id: 38,
    official: true,
    location: 'Antartica',
    expansion: 'expansion',
    text: 'A shark'
  },

  /* 29 */
  {
    id: 39,
    official: true,
    location: 'Antartica',
    expansion: 'expansion',
    text: 'Ice is purple'
  },

  /* 30 */
  {
    id: 40,
    official: true,
    location: 'Antartica',
    expansion: 'expansion',
    text: 'A penguin'
  },

  {
    id: 31,
    official: true,
    location: 'Antartica',
    expansion: 'expansion',
    text: 'Snow is blue in color'
  },

  /* 22 */
  {
    id: 32,
    official: true,
    location: 'Antartica',
    expansion: 'expansion',
    text: 'Snow is the sun'
  },

  /* 23 */
  {
    id: 33,
    official: true,
    location: 'Antartica',
    expansion: 'expansion',
    text: 'A dolphin'
  },

  /* 24 */
  {
    id: 34,
    official: true,
    location: 'Antartica',
    expansion: 'expansion',
    text: 'A goat'
  },

  /* 25 */
  {
    id: 35,
    official: true,
    location: 'Antartica',
    expansion: 'expansion',
    text: 'A fish'
  },

  /* 26 */
  {
    id: 36,
    official: true,
    location: 'Antartica',
    expansion: 'expansion',
    text: 'Berries'
  },

  /* 27 */
  {
    id: 37,
    official: true,
    location: 'Antartica',
    expansion: 'expansion',
    text: 'A desert'
  },

  /* 28 */
  {
    id: 38,
    official: true,
    location: 'Antartica',
    expansion: 'expansion',
    text: 'A shark'
  },

  /* 29 */
  {
    id: 39,
    official: true,
    location: 'Antartica',
    expansion: 'expansion',
    text: 'Ice is purple'
  },

  /* 30 */
  {
    id: 40,
    official: true,
    location: 'Antartica',
    expansion: 'expansion',
    text: 'A penguin'
  },

  {
    id: 31,
    official: true,
    location: 'Antartica',
    expansion: 'expansion',
    text: 'Snow is blue in color'
  },

  /* 22 */
  {
    id: 32,
    official: true,
    location: 'Antartica',
    expansion: 'expansion',
    text: 'Snow is the sun'
  },

  /* 23 */
  {
    id: 33,
    official: true,
    location: 'Antartica',
    expansion: 'expansion',
    text: 'A dolphin'
  },

  /* 24 */
  {
    id: 34,
    official: true,
    location: 'Antartica',
    expansion: 'expansion',
    text: 'A goat'
  },

  /* 25 */
  {
    id: 35,
    official: true,
    location: 'Antartica',
    expansion: 'expansion',
    text: 'A fish'
  },

  /* 26 */
  {
    id: 36,
    official: true,
    location: 'Antartica',
    expansion: 'expansion',
    text: 'Berries'
  },

  /* 27 */
  {
    id: 37,
    official: true,
    location: 'Antartica',
    expansion: 'expansion',
    text: 'A desert'
  },

  /* 28 */
  {
    id: 38,
    official: true,
    location: 'Antartica',
    expansion: 'expansion',
    text: 'A shark'
  },

  /* 29 */
  {
    id: 39,
    official: true,
    location: 'Antartica',
    expansion: 'expansion',
    text: 'Ice is purple'
  },

  /* 30 */
  {
    id: 40,
    official: true,
    location: 'Antartica',
    expansion: 'expansion',
    text: 'A penguin'
  },

  /* 31 */
  {
    id: 41,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'A beautiful girl'
  },

  /* 32 */
  {
    id: 42,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'A sack of weed'
  },

  /* 33 */
  {
    id: 43,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'Pablo Escobar'
  },

  /* 34 */
  {
    id: 44,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'Venezuala'
  },

  /* 35 */
  {
    id: 45,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'Hugo Chavez'
  },

  /* 36 */
  {
    id: 46,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'Graffitti'
  },

  /* 37 */
  {
    id: 47,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'Guatemala'
  },

  /* 38 */
  {
    id: 48,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'Guadalajara'
  },

  /* 39 */
  {
    id: 49,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'Mojito'
  },

  /* 40 */
  {
    id: 50,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'Parrot'
  },

  {
    id: 41,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'A beautiful girl'
  },

  /* 32 */
  {
    id: 42,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'A sack of weed'
  },

  /* 33 */
  {
    id: 43,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'Pablo Escobar'
  },

  /* 34 */
  {
    id: 44,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'Venezuala'
  },

  /* 35 */
  {
    id: 45,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'Hugo Chavez'
  },

  /* 36 */
  {
    id: 46,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'Graffiti'
  },

  /* 37 */
  {
    id: 47,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'Guatemala'
  },

  /* 38 */
  {
    id: 48,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'Guadalajara'
  },

  /* 39 */
  {
    id: 49,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'Mojito'
  },

  /* 40 */
  {
    id: 50,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'Parrot'
  },

  {
    id: 41,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'A beautiful girl'
  },

  /* 32 */
  {
    id: 42,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'A sack of weed'
  },

  /* 33 */
  {
    id: 43,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'Pablo Escobar'
  },

  /* 34 */
  {
    id: 44,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'Venezuala'
  },

  /* 35 */
  {
    id: 45,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'Hugo Chavez'
  },

  /* 36 */
  {
    id: 46,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'Graffitti'
  },

  /* 37 */
  {
    id: 47,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'Guatemala'
  },

  /* 38 */
  {
    id: 48,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'Guadalajara'
  },

  /* 39 */
  {
    id: 49,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'Mojito'
  },

  /* 40 */
  {
    id: 50,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'Parrot'
  },

  {
    id: 41,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'A beautiful girl'
  },

  /* 32 */
  {
    id: 42,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'A sack of weed'
  },

  /* 33 */
  {
    id: 43,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'Pablo Escobar'
  },

  /* 34 */
  {
    id: 44,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'Venezuala'
  },

  /* 35 */
  {
    id: 45,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'Hugo Chavez'
  },

  /* 36 */
  {
    id: 46,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'Graffitti'
  },

  /* 37 */
  {
    id: 47,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'Guatemala'
  },

  /* 38 */
  {
    id: 48,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'Guadalajara'
  },

  /* 39 */
  {
    id: 49,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'Mojito'
  },

  /* 40 */
  {
    id: 50,
    official: true,
    location: 'America',
    expansion: 'expansion',
    text: 'Parrot'
  },

  /* 41 */
  {
    id: 51,
    official: true,
    location: 'Europe',
    expansion: 'expansion',
    text: 'Spanish'
  },

  /* 42 */
  {
    id: 52,
    official: true,
    location: 'Europe',
    expansion: 'expansion',
    text: 'Manchester United'
  },

  /* 43 */
  {
    id: 53,
    official: true,
    location: 'Europe',
    expansion: 'expansion',
    text: 'Chelsea'
  },

  /* 44 */
  {
    id: 54,
    official: true,
    location: 'Europe',
    expansion: 'expansion',
    text: 'Real Madrid'
  },

  /* 45 */
  {
    id: 55,
    official: true,
    location: 'Europe',
    expansion: 'expansion',
    text: 'Prince Charles'
  },

  /* 46 */
  {
    id: 56,
    official: true,
    location: 'Europe',
    expansion: 'expansion',
    text: 'Lady Diana'
  },

  /* 47 */
  {
    id: 57,
    official: true,
    location: 'Europe',
    expansion: 'expansion',
    text: 'King Arthur'
  },

  /* 48 */
  {
    id: 58,
    official: true,
    location: 'Europe',
    expansion: 'expansion',
    text: 'Enya'
  },

  /* 49 */
  {
    id: 59,
    official: true,
    location: 'Europe',
    expansion: 'expansion',
    text: 'Phil Collins'
  },

  /* 50 */
  {
    id: 60,
    official: true,
    location: 'Europe',
    expansion: 'expansion',
    text: 'Barcelona'
  },

  {
    id: 51,
    official: true,
    location: 'Europe',
    expansion: 'expansion',
    text: 'Spanish'
  },

  /* 42 */
  {
    id: 52,
    official: true,
    location: 'Europe',
    expansion: 'expansion',
    text: 'Manchester United'
  },

  /* 43 */
  {
    id: 53,
    official: true,
    location: 'Europe',
    expansion: 'expansion',
    text: 'Chelsea'
  },

  /* 44 */
  {
    id: 54,
    official: true,
    location: 'Europe',
    expansion: 'expansion',
    text: 'Real Madrid'
  },

  /* 45 */
  {
    id: 55,
    official: true,
    location: 'Europe',
    expansion: 'expansion',
    text: 'Prince Charles'
  },

  /* 46 */
  {
    id: 56,
    official: true,
    location: 'Europe',
    expansion: 'expansion',
    text: 'Lady Diana'
  },

  /* 47 */
  {
    id: 57,
    official: true,
    location: 'Europe',
    expansion: 'expansion',
    text: 'King Arthur'
  },

  /* 48 */
  {
    id: 58,
    official: true,
    location: 'Europe',
    expansion: 'expansion',
    text: 'Enya'
  },

  /* 49 */
  {
    id: 59,
    official: true,
    location: 'Europe',
    expansion: 'expansion',
    text: 'Phil Collins'
  },

  /* 50 */
  {
    id: 60,
    official: true,
    location: 'Europe',
    expansion: 'expansion',
    text: 'Barcelona'
  },

  {
    id: 51,
    official: true,
    location: 'Europe',
    expansion: 'expansion',
    text: 'Spanish'
  },

  /* 42 */
  {
    id: 52,
    official: true,
    location: 'Europe',
    expansion: 'expansion',
    text: 'Manchester United'
  },

  /* 43 */
  {
    id: 53,
    official: true,
    location: 'Europe',
    expansion: 'expansion',
    text: 'Chelsea'
  },

  /* 44 */
  {
    id: 54,
    official: true,
    location: 'Europe',
    expansion: 'expansion',
    text: 'Real Madrid'
  },

  /* 45 */
  {
    id: 55,
    official: true,
    location: 'Europe',
    expansion: 'expansion',
    text: 'Prince Charles'
  },

  /* 46 */
  {
    id: 56,
    official: true,
    location: 'Europe',
    expansion: 'expansion',
    text: 'Lady Diana'
  },

  /* 47 */
  {
    id: 57,
    official: true,
    location: 'Europe',
    expansion: 'expansion',
    text: 'King Arthur'
  },

  /* 48 */
  {
    id: 58,
    official: true,
    location: 'Europe',
    expansion: 'expansion',
    text: 'Enya'
  },

  /* 49 */
  {
    id: 59,
    official: true,
    location: 'Europe',
    expansion: 'expansion',
    text: 'Phil Collins'
  },

  /* 50 */
  {
    id: 60,
    official: true,
    location: 'Europe',
    expansion: 'expansion',
    text: 'Barcelona'
  },

  {
    id: 61,
    official: true,
    location: 'Australia',
    expansion: 'expansion',
    text: 'Sydney'
  },

  /* 2 */
  {
    id: 62,
    official: true,
    location: 'Australia',
    expansion: 'expansion',
    text: 'Melbourne'
  },

  /* 3 */
  {
    id: 63,
    official: true,
    location: 'Australia',
    expansion: 'expansion',
    text: 'Stone Masons'
  },

  /* 4 */
  {
    id: 64,
    official: true,
    location: 'Australia',
    expansion: 'expansion',
    text: 'Bob Hawke'
  },

  /* 5 */
  {
    id: 65,
    official: true,
    location: 'Australia',
    expansion: 'expansion',
    text: 'Flash Mob'
  },

  /* 6 */
  {
    id: 66,
    official: true,
    location: 'Australia',
    expansion: 'expansion',
    text: 'Kangaroos'
  },

  /* 7 */
  {
    id: 67,
    official: true,
    location: 'Australia',
    expansion: 'expansion',
    text: 'Great Barrier Reef'
  },

  /* 8 */
  {
    id: 68,
    official: true,
    location: 'Australia',
    expansion: 'expansion',
    text: 'Alps'
  },

  /* 9 */
  {
    id: 69,
    official: true,
    location: 'Australia',
    expansion: 'expansion',
    text: 'Box Jelly fish'
  },

  /* 10 */
  {
    id: 70,
    official: true,
    location: 'Australia',
    expansion: 'expansion',
    text: 'Australia has no volcano'
  },

  {
    id: 61,
    official: true,
    location: 'Australia',
    expansion: 'expansion',
    text: 'Sydney'
  },

  /* 2 */
  {
    id: 62,
    official: true,
    location: 'Australia',
    expansion: 'expansion',
    text: 'Melbourne'
  },

  /* 3 */
  {
    id: 63,
    official: true,
    location: 'Australia',
    expansion: 'expansion',
    text: 'Stone Masons'
  },

  /* 4 */
  {
    id: 64,
    official: true,
    location: 'Australia',
    expansion: 'expansion',
    text: 'Bob Hawke'
  },

  /* 5 */
  {
    id: 65,
    official: true,
    location: 'Australia',
    expansion: 'expansion',
    text: 'Flash Mob'
  },

  /* 6 */
  {
    id: 66,
    official: true,
    location: 'Australia',
    expansion: 'expansion',
    text: 'Kangaroos'
  },

  /* 7 */
  {
    id: 67,
    official: true,
    location: 'Australia',
    expansion: 'expansion',
    text: 'Great Barrier Reef'
  },

  /* 8 */
  {
    id: 68,
    official: true,
    location: 'Australia',
    expansion: 'expansion',
    text: 'Alps'
  },

  /* 9 */
  {
    id: 69,
    official: true,
    location: 'Australia',
    expansion: 'expansion',
    text: 'Box Jelly fish'
  },

  /* 10 */
  {
    id: 70,
    official: true,
    location: 'Australia',
    expansion: 'expansion',
    text: 'Australia has no volcano'
  },

  {
    id: 61,
    official: true,
    location: 'Australia',
    expansion: 'expansion',
    text: 'Sydney'
  },

  /* 2 */
  {
    id: 62,
    official: true,
    location: 'Australia',
    expansion: 'expansion',
    text: 'Melbourne'
  },

  /* 3 */
  {
    id: 63,
    official: true,
    location: 'Australia',
    expansion: 'expansion',
    text: 'Stone Masons'
  },

  /* 4 */
  {
    id: 64,
    official: true,
    location: 'Australia',
    expansion: 'expansion',
    text: 'Bob Hawke'
  },

  /* 5 */
  {
    id: 65,
    official: true,
    location: 'Australia',
    expansion: 'expansion',
    text: 'Flash Mob'
  },

  /* 6 */
  {
    id: 66,
    official: true,
    location: 'Australia',
    expansion: 'expansion',
    text: 'Kangaroos'
  },

  /* 7 */
  {
    id: 67,
    official: true,
    location: 'Australia',
    expansion: 'expansion',
    text: 'Great Barrier Reef'
  },

  /* 8 */
  {
    id: 68,
    official: true,
    location: 'Australia',
    expansion: 'expansion',
    text: 'Alps'
  },

  /* 9 */
  {
    id: 69,
    official: true,
    location: 'Australia',
    expansion: 'expansion',
    text: 'Box Jelly fish'
  },

  /* 10 */
  {
    id: 70,
    official: true,
    location: 'Australia',
    expansion: 'expansion',
    text: 'Australia has no volcano'
  },

  /* 11 */
  {
    id: 711,
    official: true,
    location: 'Asia',
    expansion: 'expansion',
    text: 'Mount Everest'
  },

  {
    id: 761,
    official: true,
    location: 'Asia',
    expansion: 'expansion',
    text: 'Mount Everest'
  },

  {
    id: 701,
    official: true,
    location: 'Asia',
    expansion: 'expansion',
    text: 'Mount Everest'
  },

  /* 12 */
  {
    id: 72,
    official: true,
    location: 'Australia',
    expansion: 'expansion',
    text: 'Indians and mangoes'
  },

  /* 13 */
  {
    id: 73,
    official: true,
    location: 'Asia',
    expansion: 'expansion',
    text: 'Kim Jong'
  },

  {
    id: 723,
    official: true,
    location: 'Asia',
    expansion: 'expansion',
    text: 'Kim Jong'
  },

  /* 14 */
  {
    id: 74,
    official: true,
    location: 'Asia',
    expansion: 'expansion',
    text: 'December 24'
  },

  /* 15 */
  {
    id: 75,
    official: true,
    location: 'Asia',
    expansion: 'expansion',
    text: 'Turkey'
  },

  /* 16 */
  {
    id: 76,
    official: true,
    location: 'Asia',
    expansion: 'expansion',
    text: 'Tallest man'
  },

  /* 17 */
  {
    id: 77,
    official: true,
    location: 'Asia',
    expansion: 'expansion',
    text: 'Tallest woman'
  },

  /* 18 */
  {
    id: 78,
    official: true,
    location: 'Asia',
    expansion: 'expansion',
    text: 'Singapore'
  },

  /* 19 */
  {
    id: 79,
    official: true,
    location: 'Asia',
    expansion: 'expansion',
    text: 'Mandarin Chinese'
  },

  /* 20 */
  {
    id: 80,
    official: true,
    location: 'Asia',
    expansion: 'expansion',
    text: 'Ali baba'
  },

  {
    id: 71,
    official: true,
    location: 'Asia',
    expansion: 'expansion',
    text: 'Mount Everest'
  },

  /* 12 */
  {
    id: 72,
    official: true,
    location: 'Australia',
    expansion: 'expansion',
    text: 'Indians and mangoes'
  },

  /* 13 */
  {
    id: 73,
    official: true,
    location: 'Asia',
    expansion: 'expansion',
    text: 'Kim Jong'
  },

  /* 14 */
  {
    id: 74,
    official: true,
    location: 'Asia',
    expansion: 'expansion',
    text: 'December 24'
  },

  /* 15 */
  {
    id: 75,
    official: true,
    location: 'Asia',
    expansion: 'expansion',
    text: 'Turkey'
  },

  /* 16 */
  {
    id: 76,
    official: true,
    location: 'Asia',
    expansion: 'expansion',
    text: 'Tallest man'
  },

  /* 17 */
  {
    id: 77,
    official: true,
    location: 'Asia',
    expansion: 'expansion',
    text: 'Tallest woman'
  },

  /* 18 */
  {
    id: 78,
    official: true,
    location: 'Asia',
    expansion: 'expansion',
    text: 'Singapore'
  },

  /* 19 */
  {
    id: 79,
    official: true,
    location: 'Asia',
    expansion: 'expansion',
    text: 'Mandarin Chinese'
  },

  /* 20 */
  {
    id: 80,
    official: true,
    location: 'Asia',
    expansion: 'expansion',
    text: 'Ali baba'
  },

  {
    id: 71,
    official: true,
    location: 'Asia',
    expansion: 'expansion',
    text: 'Mount Everest'
  },

  /* 12 */
  {
    id: 72,
    official: true,
    location: 'Australia',
    expansion: 'expansion',
    text: 'Indians and mangoes'
  },

  /* 13 */
  {
    id: 73,
    official: true,
    location: 'Asia',
    expansion: 'expansion',
    text: 'Kim Jong'
  },

  /* 14 */
  {
    id: 74,
    official: true,
    location: 'Asia',
    expansion: 'expansion',
    text: 'December 24'
  },

  /* 15 */
  {
    id: 75,
    official: true,
    location: 'Asia',
    expansion: 'expansion',
    text: 'Turkey'
  },

  /* 16 */
  {
    id: 76,
    official: true,
    location: 'Asia',
    expansion: 'expansion',
    text: 'Tallest man'
  },

  /* 17 */
  {
    id: 77,
    official: true,
    location: 'Asia',
    expansion: 'expansion',
    text: 'Tallest woman'
  },

  /* 18 */
  {
    id: 78,
    official: true,
    location: 'Asia',
    expansion: 'expansion',
    text: 'Singapore'
  },

  /* 19 */
  {
    id: 79,
    official: true,
    location: 'Asia',
    expansion: 'expansion',
    text: 'Mandarin Chinese'
  },

  /* 20 */
  {
    id: 80,
    official: true,
    location: 'Asia',
    expansion: 'expansion',
    text: 'Ali baba'
  }
];

AnswerModel.remove({}, () => {
  answers.map((answer) => {
    const newAnswer = new AnswerModel(answer);
    return newAnswer.save();
  });
});
