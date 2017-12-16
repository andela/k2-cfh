/* eslint-disable no-undef,  */
angular.module('mean.system')
  .controller('InviteUserController', ['$scope', 'socket', '$window', '$http', ($scope, socket, $window, $http) => {
    $scope.searchTerm = '';
    $scope.invitedUsers = [];
    $scope.message = '';
    $scope.searchUser = () => {
      const { searchTerm } = $scope;
      $scope.searchResult = [];
      if (searchTerm.length !== 0) {
        $http({
          method: 'GET',
          url: `/api/search/users?q=${$scope.searchTerm}`
        }).then((response) => {
          if (response.data) {
            response.data.forEach((user) => {
              $scope.searchResult.push(user);
            });
          }
        });
      } else {
        $scope.searchResult = [];
      }
    };

    $scope.viewNotification = function () {
      $('#notify').modal('show');
    };

    // Set http header
    $scope.setHttpHeader = () => {
      const token = $window.localStorage.getItem('token');
      $http.defaults.headers.common.token = token;
    };

    $scope.addFriend = (friendName, friendId, friendEmail) => {
      const payload = {
        friendId,
        friendName,
        friendEmail
      };

      $scope.setHttpHeader();
      $http.put('/api/user/friends', payload)
        .then(
          (response) => {
            $scope.getFriendsList();
          },
          (error) => {
            $scope.getFriendsList();
          }
        );
    };


    // get Friends list
    $scope.getFriendsList = () => {
      $scope.setHttpHeader();
      $http.get('/api/user/friends')
        .then(
          (response) => {
            $scope.friendsList = response.data;
            console.log($scope.friendsList);
            $scope.friendsId = response.data.map(friend => friend.friendId);
          },
          (error) => {
            $scope.friendsList = [];
          }
        );
    };

    // send notifications
    $scope.sendNotification = (friendId, friendEmail) => {
      const payload = {
        link: document.URL,
        friendId
      };
      $scope.setHttpHeader();
      $http.post('/api/notifications', payload).then((response) => {
        $scope.inviteList.push(friendId);
        console.log('here %%%%');
        userID = game.players.filter(e => e.email === friendEmail);
        console.log('it works >>', userID[0]);
        game.broadcastNotification(userID[0].socketID);
      });
    };

    socket.on('notificationReceived', (userId) => {
      userID = game.players[game.playerIndex].socketID;
      console.log('>>>>>>>>>>>', game.playerIndex);
      if (userId === userID) {
        console.log('userId:  >>>', userID);
        $scope.loadNotifications();
      } else {
        console.log('not you man');
      }
    });


    $scope.loadNotifications = () => {
      console.log('loading Notifications....');
      $scope.setHttpHeader();
      $http.get('/api/notifications')
        .then(
          (response) => {
            console.log('from response', response.data);
            $scope.notifications = response.data.notifications.sort((a, b) => b.id - a.id);
            if ($scope.notifications.length >= 1) {
              toastr.success(`You have ${$scope.notifications.length} new Notification${$scope.notifications.length > 1 ? 's' : ''}!`);
            }
          },
          (error) => {
            $scope.notifications = $scope.notifications;
          }
        );
    };

    $scope.loadNotifications();

    $scope.inviteUser = (email) => {
      $scope.invitedUsers.push(email);
      return $http.post('/api/users/invite', {
        mailTo: email,
        gameLink: document.URL
      }).then(
        (res) => {
          $scope.message = res.data.message;
          setTimeout(() => {
            $scope.message = '';
          }, 5000);
        },
        (err) => {
          $scope.message = err.data.message;
          setTimeout(() => {
            $scope.message = '';
          }, 5000);
        }
      );
    };

    $scope.resetSearchTerm = () => {
      $scope.searchTerm = '';
    };

    $scope.isInvited = email => $scope.invitedUsers.indexOf(email) > -1;
  }]);
