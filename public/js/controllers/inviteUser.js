/* eslint-disable no-undef,  */
angular.module('mean.system')
  .controller('InviteUserController', ['$scope', 'socket', 'game', '$window', '$http', ($scope, socket, game, $window, $http) => {
    $scope.searchTerm = '';
    $scope.invitedUsers = [];
    $scope.message = '';
    $scope.notifications = [];
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

    // $scope.viewNotification = function () {
    //   $('#notify').modal('show');
    // };

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
          () => {
            $scope.getFriendsList();
          },
          () => {
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
            $scope.friendsId = response.data.map(friend => friend.friendId);
          },
          () => {
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
      $http.post('/api/notifications', payload).then(() => {
        $scope.inviteList.push(friendId);

        const userID = game.players.filter(e => e.email === friendEmail);
        game.broadcastNotification(userID[0].socketID);
      });
    };

    socket.on('notificationReceived', (userId) => {
      const userID = game.players[game.playerIndex].socketID;
      if (userId === userID) {
        $scope.loadNotifications();
      } else {
        // console.log('not you man');
      }
    });


    $scope.loadNotifications = () => {
      $scope.setHttpHeader();
      $http.get('/api/notifications')
        .then(
          (response) => {
            $scope.notifications = response.data.notifications.sort((a, b) => b.id - a.id);
            console.log('Here >>>>', $scope.notifications);
            if ($scope.notifications.length >= 1) {
              toastr.success(`You have ${$scope.notifications.length} new Notification${$scope.notifications.length > 1 ? 's' : ''}!`);
            }
          },
          () => {
            $scope.notifications = $scope.notifications;
          }
        );
    };

    $scope.loadNotifications();

    $scope.viewNotification = function () {
      $('#notify').modal('show');
    };

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
