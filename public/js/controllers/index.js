angular.module('mean.system')
  .controller('IndexController', ['$scope', 'Global', '$location', 'socket', 'game', 'AvatarService', '$window', ($scope, Global, $location, socket, game, AvatarService) => {
    $scope.global = Global;
    $scope.playAsGuest = () => {
      game.joinGame();
      $location.path('/app');
    };

    $scope.showError = () => {
      if ($location.search().error) {
        return $location.search().error;
      }
      return false;
    };

    $scope.avatars = [];
    AvatarService.getAvatars()
      .then((data) => {
        $scope.avatars = data;
      });
  }])
  //  SignIn controller
  .controller('signinController', ['$scope', '$http', '$location', '$window', ($scope, $http, $location, $window) => {
    $scope.credentials = {
      email: '',
      password: ''
    };
    //  Setting focus on elements
    $scope.init = () => {
      $('#signinEmail,#signinPassword').focus(() => {
        $('#signinFlash')
          .removeClass('su-error-success')
          .removeClass('su-error-failed')
          .html('Please provide required information');
      });
    };

    const setError = (message) => {
      angular.element(document.querySelector('#signinFlash'))
        .removeClass('su-error-success')
        .addClass('su-error-failed')
        .html(message);
    };

    $scope.signin = () => {
      $http({
        method: 'POST',
        url: '/api/auth/signin',
        data: $scope.credentials
      }).then((response) => {
        const { status } = response;
        const { token } = response.data;
        //  If signin was successful
        if (status === 200 && token) {
        //  save token
        // var token = response.token;
          $window.localStorage.setItem('token', token);
          $location.path('/avatars');
        } else {
          let { message } = response.data;
          message = typeof message === 'string' ? message : 'Internal Server Error';
          setError(message);
        }
      }, (error) => {
        let { message } = error.data;
        message = typeof message === 'string' ? message : 'Internal Server Error';
        setError(message);
      });
    };
  }])

//  SignUp controller

  .controller('signupController', ['$scope', '$http', '$location', '$window', ($scope, $http, $location, $window) => {
    $scope.user = {
      name: '',
      username: '',
      email: '',
      password: ''
    };
    //  Setting focus on elements
    $scope.init = () => {
      $('#signupName,#signupUsername,#signupEmail,#signupPassword').focus(() => {
        $('#signupFlash')
          .removeClass('su-error-success')
          .removeClass('su-error-failed')
          .html('Please provide required information');
      });
    };

    const setError = (message) => {
      angular.element(document.querySelector('#signupFlash'))
        .removeClass('su-error-success')
        .addClass('su-error-failed')
        .html(message);
    };

    $scope.signup = () => {
      $http({
        method: 'POST',
        url: '/api/auth/signup',
        data: $scope.user
      }).then((response) => {
        const { status } = response;
        const { token } = response.data;
        //  If signin was successful
        if (status === 201 && token) {
        //  save token
        // var token = response.token;
          $window.localStorage.setItem('token', token);
          $location.path('/avatars');
        } else {
          let { message } = response.data;
          message = typeof message === 'string' ? message : 'Internal Server Error';
          setError(message);
        }
      }, (error) => {
        let { message } = error.data;
        message = typeof message === 'string' ? message : 'Internal Server Error';
        setError(message);
      });
    };
  }]);
