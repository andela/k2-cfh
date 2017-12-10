angular.module('mean.system')
  .controller('avatarsController', [
    '$scope', '$location', 'AvatarService', '$http', '$window', '$cookies', ($scope, $location, AvatarService, $http, $window, $cookies) => {
      $scope.counter = 0;
      //  Check if token is saved in cookie
      //  Move it to localstorage and remove from cookie
      const { token } = $cookies;
      if (typeof token === 'string') {
        $window.localStorage.setItem('token', token);
        delete $cookies.token;
      }
      if (!$window.localStorage.getItem('token')) return $location.path('/');

      //  Load in all avatars
      $scope.avatars = [];
      AvatarService.getAvatars()
        .then((data) => {
          $scope.avatars = data;
        });

      //  Setting up avatar
      let avatar = null;
      //  to select an avatar
      $scope.checkAvatar = (index) => {
        $('#avatarError').css('display', 'none');
        $('.signup-avatar').removeClass('signup-avatar-active').addClass('signup-avatar-inactive');
        $(`#avatar${index}Span`).removeClass('signup-avatar-inactive').addClass('signup-avatar-active');
        avatar = $scope.avatars[index];
      };
      $scope.finish = () => {
        if (typeof avatar !== 'string') {
          $('#avatarError').css('display', 'block');
        } else {
          $window.localStorage.setItem('avatar', avatar);
          $location.path('/app');
        }
      };
    }]);
