angular.module('mean.system')
  .controller('TourController', ['$scope', '$location', ($scope, $location) => {
    $scope.general = {
      qshow: false,
      howto: false,
      answers: false,
      isChatOpen: false,
      czarIntro: false,
      deck: false,
      notify: false,
      donation: false,
      countdownFrom: 15,
      timer: null
    };

    //   IntroOptions for introjs
    const IntroOptions = {
      steps: [
        {
          element: document.querySelector('#introStart'),
          intro: '<div class=\'tour-wrapper\'>Welcome to card for humanity, A card game for horrible people try to do good.</div>'
        },
        {
          element: document.querySelector('#howtoplay'),
          intro: '<div class=\'tour-wrapper\'>This gives a brief description of how the game can be played, and this is seen upon entering the game</div>'
        },
        {
          element: document.querySelector('#timer-container'),
          intro: '<div class=\'tour-wrapper\'>This is a timer for action such as selecting answers, czar selecting prefered answer and others</div>'
        },
        {
          element: document.querySelector('#game-screen'),
          intro: '<div class=\'tour-wrapper\'>This is where the question shows up, and will be required select an answer from a deck of answer cards</div>'
        },
        {
          element: document.querySelector('#base-container'),
          intro: '<div class=\'tour-wrapper\'>You can be the card czar at any point in the game, as the card czar you get to draw a question card, wait for others to select answers and then select the best answer from players selection</div>'
        },
        {
          element: document.querySelector('#timer-container'),
          intro: '<div class=\'tour-wrapper\'>No the czar waits for the other players to choose their answer cards</div>'
        },
        {
          element: document.querySelector('#players-div'),
          intro: '<div class=\'tour-wrapper\'>This is where you see all players on the game, and you are the player indicated as "You"</div>'
        },
        {
          element: document.querySelector('#answers'),
          intro: '<div class=\'tour-wrapper\'>This is the a deck of answer cards where other players select an answer to the given question, while the czar waits</div>'
        },
        {
          element: document.querySelector('#timer-container'),
          intro: '<div class=\'tour-wrapper\'>And while players are selecting their answers, they are timed, at the end of the timer, a random answer is automatically selected for them</div>'
        },
        {
          element: document.querySelector('#deck'),
          intro: '<div class=\'tour-wrapper\'>As the card czar, you get to see the answers selected by other players and you can select the correct one after contemplating</div>'
        },
        {
          element: document.querySelector('#notification-tab'),
          intro: '<div class=\'tour-wrapper\'>This is where players are notified of whether a player leaves the game, they win or loose the round.</div>'
        },
        {
          element: document.querySelector('#game-donation'),
          intro: '<div class=\'tour-wrapper\'>At the end of each round, players get a noitification here to join another game or to donate to charity.</div>'
        },
        {
          element: document.querySelector('#chatbox'),
          intro: '<div class=\'tour-wrapper\'>You can also chat with other players on the game with this chat window provided for you.</div>'
        },
      ],
      showStepNumbers: true,
      showBullets: false,
      exitOnOverlayClick: false,
      exitOnEsc: false,
      exitOnSkip: false,
      nextLabel: 'Next',
      prevLabel: 'Previous',
      skipLabel: 'Exit',
      doneLabel: 'Exit'
    };

    //  Set introjs
    const ngIntroService = new introJs();
    ngIntroService.setOptions(IntroOptions);

    //  Introjs callbacks
    ngIntroService.oncomplete(() => {
      $location.path('/');
    });
    ngIntroService.onexit(() => {
      $location.path('/');
    });
    ngIntroService.onchange(() => {
      const step = ngIntroService._currentStep;
      const direction = (ngIntroService._direction === 'backward') ? 0 : 1;

      if (direction === 1) {
        //  Start
        if (step === 0) {
          $scope.general.qshow = true;
          $scope.general.howto = true;
          //  How to play
        } else if (step === 1) {
          $scope.general.qshow = true;
          $scope.general.howto = true;
          $scope.stopCountdown();
          $scope.startCountdown();
          //  Timer
        } else if (step === 2) {
          $scope.general.howto = false;
          $scope.general.czarIntro = true;
          $('#timer-text').css('color', 'black');
          //  question
        } else if (step === 3) {
          $scope.general.czarIntro = true;
          $('#timer-text').css('color', 'white');
          // czar intro
        } else if (step === 4) {
          //  Timer
        } else if (step === 5) {
          $scope.general.czarIntro = false;
          $scope.general.answers = true;
          $('#timer-text').css('color', 'black');
          //  Players
        } else if (step === 6) {
          $('#timer-text').css('color', 'white');
          //  Answers
        } else if (step === 7) {
          //  Timer
        } else if (step === 8) {
          $scope.general.answers = false;
          $scope.general.deck = true;
          $scope.general.notify = true;
          $('.introjs-helperLayer ').css('z-index', '9999997');
          $('#deck').css('z-index', '999998');
          $('#timer-text').css('color', 'black');
          //  Nofify
        } else if (step === 9) {
          $('#timer-text').css('color', 'white');
          //  Donation
        } else if (step === 10) {
          $scope.general.deck = false;
          $scope.general.donation = true;
          $scope.general.isChatOpen = true;
          //  Chat
        } else if (step === 11) {
          // Noting
        }
      } else if (direction === 0) {
        // Donation
        if (step === 10) { // Notify
          $scope.general.donation = false;
          $scope.general.deck = true;
        } else if (step === 9) { // Deck
        } else if (step === 8) { // Timer
          $scope.general.deck = false;
          $scope.general.answers = true;
        } else if (step === 7) { // Answers
        } else if (step === 6) { // Players
        } else if (step === 5) { // Timer
          $scope.general.czarIntro = true;
          $scope.general.answers = false;
        } else if (step === 4) { // czar view
        } else if (step === 3) { // question
        } else if (step === 2) { // timer
          $scope.general.czarIntro = false;
          $scope.general.howto = true;
        } else if (step === 1) { // Start
        }
      }
    });

    //  Initalize view
    $scope.init = () => {
      ngIntroService.start();
    };

    //  View actions

    $scope.resetView = () => {
      $scope.general.qshow = false;
      $scope.general.howto = false;
      $scope.general.answers = false;
      $scope.general.isChatOpen = false;
      $scope.general.czarIntro = false;
      $scope.general.deck = false;
      $scope.general.notify = false;
      $scope.general.donation = false;
    };

    $scope.toggleTourChatOpen = () => {
      $scope.general.isChatOpen = !$scope.general.isChatOpen;
    };

    $scope.stopCountdown = () => {
      if ($scope.general.timer !== null) {
        clearInterval($scope.general.timer);
      }
    };

    $scope.startCountdown = () => {
      let time = $scope.general.countdownFrom;
      $scope.general.timer = setInterval(() => {
        $('#timer-time').html(time);
        if (time <= 0) { time = 15; }
        time -= 1;
      }, 1000);
    };

    //  Page data
    $scope.czarAnswers = [
      'Not at all, except in the pit of hell',
      'That\'s a question with no answer',
      'Really love the man'
    ];

    $scope.playersAnswers = [
      'He is an horrific man',
      'Not at all, except in the pit of hell',
      'Like is an understatement',
      'Yes Ofcourse',
      'That\'s a question with no answer',
      'Try asking me on more time',
      'Really love the man',
      'Well all the best to people liking him',
      'Not on earth',
      'What!!!!'
    ];

    $scope.players = [
      {
        username: 'abdulfatai',
        avatar: '/assets/img/avatars/1.png',
        points: 1,
        pointsLimit: 5
      },
      {
        username: 'You',
        avatar: '/assets/img/avatars/10.png',
        points: 1,
        pointsLimit: 5
      },
      {
        username: 'rosemary',
        avatar: '/assets/img/avatars/3.png',
        points: 2,
        pointsLimit: 5
      },
      {
        username: 'angel',
        avatar: '/assets/img/avatars/6.png',
        points: 0,
        pointsLimit: 5
      }
    ];
  }]);

