/* eslint-disable */
import QuestionModel from '../models/question'

const questionMigration = () => {
      const questions = [
            {
                  id: 1,
                  text: 'Soukous is to _ as Swahili is to _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 2,
                  text: 'czar is the coomon to _ ',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Asia'
            },
            {
                  id: 3,
                  text: 'Africas are _ and Europeans are _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'America'
            },
            {
                  id: 4,
                  text: 'This is just a _ ',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 6,
                  text: 'That is a new we _ ',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 7,
                  text: 'This is a new them _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 8,
                  text: 'This is a new you _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 9,
                  text: 'This is a new me _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 10,
                  text: 'This is a new us _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 11,
                  text: 'Soukous is to _ as Swahili is to _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 12,
                  text: 'czar is the coomon to _ ',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Asia'
            },
            {
                  id: 13,
                  text: 'Africas are _ and Europeans are _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'America'
            },
            {
                  id: 14,
                  text: 'This is just a _ ',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 15,
                  text: 'That is a new we _ ',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 17,
                  text: 'This is a new them _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 18,
                  text: 'This is a new you _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 19,
                  text: 'This is a new me _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 20,
                  text: 'This is a new us _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 21,
                  text: 'Soukous is to _ as Swahili is to _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 22,
                  text: 'czar is the coomon to _ ',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Asia'
            },
            {
                  id: 23,
                  text: 'Africas are _ and Europeans are _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'America'
            },
            {
                  id: 24,
                  text: 'This is just a _ ',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 25,
                  text: 'That is a new we _ ',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 26,
                  text: 'That is a new we _ ',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 27,
                  text: 'This is a new them _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 28,
                  text: 'This is a new you _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 29,
                  text: 'This is a new me _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 30,
                  text: 'This is a new us _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 31,
                  text: 'Soukous is to _ as Swahili is to _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 32,
                  text: 'czar is the coomon to _ ',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Asia'
            },
            {
                  id: 33,
                  text: 'Africas are _ and Europeans are _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'America'
            },
            {
                  id: 34,
                  text: 'This is just a _ ',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 35,
                  text: 'This is just a _ ',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 36,
                  text: 'That is a new we _ ',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 37,
                  text: 'This is a new them _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            }, {
                  id: 38,
                  text: 'This is a new you _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            }, {
                  id: 39,
                  text: 'This is a new me _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            }, {
                  id: 40,
                  text: 'This is a new us _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 41,
                  text: 'Soukous is to _ as Swahili is to _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 42,
                  text: 'czar is the coomon to _ ',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Asia'
            },
            {
                  id: 43,
                  text: 'Africas are _ and Europeans are _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'America'
            },
            {
                  id: 44,
                  text: 'This is just a _ ',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 45,
                  text: 'This is just a _ ',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 46,
                  text: 'That is a new we _ ',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 47,
                  text: 'This is a new them _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            }, {
                  id: 48,
                  text: 'This is a new you _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            }, {
                  id: 49,
                  text: 'This is a new me _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            }, {
                  id: 50,
                  text: 'This is a new us _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 51,
                  text: 'Soukous is to _ as Swahili is to _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 52,
                  text: 'czar is the coomon to _ ',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Asia'
            },
            {
                  id: 53,
                  text: 'Africas are _ and Europeans are _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'America'
            },
            {
                  id: 54,
                  text: 'This is just a _ ',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 55,
                  text: 'This is just a _ ',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 56,
                  text: 'That is a new we _ ',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 57,
                  text: 'This is a new them _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            }, {
                  id: 58,
                  text: 'This is a new you _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 59,
                  text: 'This is a new me _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 60,
                  text: 'This is a new us _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 61,
                  text: 'Soukous is to _ as Swahili is to _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 61,
                  text: 'czar is the coomon to _ ',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Asia'
            },
            {
                  id: 63,
                  text: 'Africas are _ and Europeans are _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'America'
            },
            {
                  id: 64,
                  text: 'This is just a _ ',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 64,
                  text: 'That is a new we _ ',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 67,
                  text: 'This is a new them _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 68,
                  text: 'This is a new you _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 69,
                  text: 'This is a new me _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 70,
                  text: 'This is a new us _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 71,
                  text: 'Soukous is to _ as Swahili is to _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 72,
                  text: 'czar is the coomon to _ ',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Asia'
            },
            {
                  id: 73,
                  text: 'Africas are _ and Europeans are _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'America'
            },
            {
                  id: 74,
                  text: 'This is just a _ ',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 75,
                  text: 'That is a new we _ ',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 77,
                  text: 'This is a new them _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 78,
                  text: 'This is a new you _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 79,
                  text: 'This is a new me _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 80,
                  text: 'This is a new us _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 81,
                  text: 'Soukous is to _ as Swahili is to _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 82,
                  text: 'czar is the coomon to _ ',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Asia'
            },
            {
                  id: 83,
                  text: 'Africas are _ and Europeans are _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'America'
            },
            {
                  id: 84,
                  text: 'This is just a _ ',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 85,
                  text: 'That is a new we _ ',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 26,
                  text: 'That is a new we _ ',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 87,
                  text: 'This is a new them _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 88,
                  text: 'This is a new you _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 89,
                  text: 'This is a new me _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 90,
                  text: 'This is a new us _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 91,
                  text: 'Soukous is to _ as Swahili is to _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 92,
                  text: 'czar is the coomon to _ ',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Asia'
            },
            {
                  id: 93,
                  text: 'Africas are _ and Europeans are _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'America'
            },
            {
                  id: 94,
                  text: 'This is just a _ ',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 95,
                  text: 'This is just a _ ',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 96,
                  text: 'That is a new we _ ',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 97,
                  text: 'This is a new them _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            }, {
                  id: 98,
                  text: 'This is a new you _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            }, {
                  id: 99,
                  text: 'This is a new me _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            }, {
                  id: 100,
                  text: 'This is a new us _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 101,
                  text: 'Soukous is to _ as Swahili is to _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 102,
                  text: 'czar is the coomon to _ ',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Asia'
            },
            {
                  id: 103,
                  text: 'Africas are _ and Europeans are _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'America'
            },
            {
                  id: 104,
                  text: 'This is just a _ ',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 105,
                  text: 'This is just a _ ',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 106,
                  text: 'That is a new we _ ',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 107,
                  text: 'This is a new them _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            }, {
                  id: 108,
                  text: 'This is a new you _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            }, {
                  id: 109,
                  text: 'This is a new me _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            }, {
                  id: 110,
                  text: 'This is a new us _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 111,
                  text: 'Soukous is to _ as Swahili is to _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 112,
                  text: 'czar is the coomon to _ ',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Asia'
            },
            {
                  id: 113,
                  text: 'Africas are _ and Europeans are _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'America'
            },
            {
                  id: 114,
                  text: 'This is just a _ ',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 115,
                  text: 'This is just a _ ',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 116,
                  text: 'That is a new we _ ',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 117,
                  text: 'This is a new them _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            }, {
                  id: 118,
                  text: 'This is a new you _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 119,
                  text: 'This is a new me _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            },
            {
                  id: 120,
                  text: 'This is a new us _',
                  numAnswers: 1,
                  official: true,
                  expansion: 'expansion',
                  location: 'Africa'
            }
      ];
      QuestionModel.remove({}, () => {
            questions.map((question) => {
                  const newQuestion = new QuestionModel(question);
                  newQuestion.save();
                  console.log("questions collection added");
            });
      });
}

export default questionMigration;
