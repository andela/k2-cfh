import Answers from '../models/answer'

const AnsersMigration = () => {
  const answers = [
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
    }
    ,{
      id: 6,      
      text: 'That is a new we _ ',
      numAnswers: 1,
      official: true,
      expansion: 'expansion',
      location: 'Africa'
    }
    ,{
      id: 7,      
      text: 'This is a new them _',
      numAnswers: 1,
      official: true,
      expansion: 'expansion',
      location: 'Africa'
    },{
      id: 8,      
      text: 'This is a new you _',
      numAnswers: 1,
      official: true,
      expansion: 'expansion',
      location: 'Africa'
    },{
      id: 9,      
      text: 'This is a new me _',
      numAnswers: 1,
      official: true,
      expansion: 'expansion',
      location: 'Africa'
    },{
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
    }
    ,{
      id: 15,      
      text: 'That is a new we _ ',
      numAnswers: 1,
      official: true,
      expansion: 'expansion',
      location: 'Africa'
    }
    ,{
      id: 17,      
      text: 'This is a new them _',
      numAnswers: 1,
      official: true,
      expansion: 'expansion',
      location: 'Africa'
    },{
      id: 18,      
      text: 'This is a new you _',
      numAnswers: 1,
      official: true,
      expansion: 'expansion',
      location: 'Africa'
    },{
      id: 19,      
      text: 'This is a new me _',
      numAnswers: 1,
      official: true,
      expansion: 'expansion',
      location: 'Africa'
    },{
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
    }
    ,{
      id:25 ,      
      text: 'That is a new we _ ',
      numAnswers: 1,
      official: true,
      expansion: 'expansion',
      location: 'Africa'
    },
    {
      id:26 ,      
      text: 'That is a new we _ ',
      numAnswers: 1,
      official: true,
      expansion: 'expansion',
      location: 'Africa'
    }
    ,{
      id: 27,      
      text: 'This is a new them _',
      numAnswers: 1,
      official: true,
      expansion: 'expansion',
      location: 'Africa'
    },{
      id: 28,      
      text: 'This is a new you _',
      numAnswers: 1,
      official: true,
      expansion: 'expansion',
      location: 'Africa'
    },{
      id: 29,      
      text: 'This is a new me _',
      numAnswers: 1,
      official: true,
      expansion: 'expansion',
      location: 'Africa'
    },{
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
    }
    ,{
      id: 36,      
      text: 'That is a new we _ ',
      numAnswers: 1,
      official: true,
      expansion: 'expansion',
      location: 'Africa'
    }
    ,{
      id: 37,      
      text: 'This is a new them _',
      numAnswers: 1,
      official: true,
      expansion: 'expansion',
      location: 'Africa'
    },{
      id: 38,      
      text: 'This is a new you _',
      numAnswers: 1,
      official: true,
      expansion: 'expansion',
      location: 'Africa'
    },{
      id: 39,      
      text: 'This is a new me _',
      numAnswers: 1,
      official: true,
      expansion: 'expansion',
      location: 'Africa'
    },{
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
    }
    ,{
      id: 46,      
      text: 'That is a new we _ ',
      numAnswers: 1,
      official: true,
      expansion: 'expansion',
      location: 'Africa'
    }
    ,{
      id: 47,      
      text: 'This is a new them _',
      numAnswers: 1,
      official: true,
      expansion: 'expansion',
      location: 'Africa'
    },{
      id: 48,      
      text: 'This is a new you _',
      numAnswers: 1,
      official: true,
      expansion: 'expansion',
      location: 'Africa'
    },{
      id: 49,      
      text: 'This is a new me _',
      numAnswers: 1,
      official: true,
      expansion: 'expansion',
      location: 'Africa'
    },{
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
    }
    ,{
      id: 56,      
      text: 'That is a new we _ ',
      numAnswers: 1,
      official: true,
      expansion: 'expansion',
      location: 'Africa'
    }
    ,{
      id: 57,      
      text: 'This is a new them _',
      numAnswers: 1,
      official: true,
      expansion: 'expansion',
      location: 'Africa'
    },{
      id: 58,      
      text: 'This is a new you _',
      numAnswers: 1,
      official: true,
      expansion: 'expansion',
      location: 'Africa'
    },{
      id: 59,      
      text: 'This is a new me _',
      numAnswers: 1,
      official: true,
      expansion: 'expansion',
      location: 'Africa'
    },{
      id: 60,      
      text: 'This is a new us _',
      numAnswers: 1,
      official: true,
      expansion: 'expansion',
      location: 'Africa'
    }
  ];
  Answers.remove({}, function() {
    answers.map(answer => {
      const newQuestion = new Answers(answer);
      newQuestion.save();
      console.log("Answers collection added");
    });
  });  
}

export default AnsersMigration;
