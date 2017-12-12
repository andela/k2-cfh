/* eslint-disable no-undef */
/**
 * generates current time string in format HH:MM:SS (AM/PM)
 * @returns {string} - current time
 */
const timeNow = () => {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  let second = date.getSeconds();

  if (`${second}`.length === 1) {
    second = `0${second}`;
  }

  if (hour > 12) {
    return `${hour - 12}:${minute}:${second} PM`;
  }
  return `${hour}:${minute}:${second} AM`;
};

/**
 * Class representing a chat
 */
class Chat {
  /**
   * creates a chat object
   * @param {object} user - user object
   * @param {string} content - chat text
   */
  constructor({ avatar, username }, content) {
    this.user = {
      avatar,
      username
    };
    this.content = content;
    this.createdAt = timeNow();
  }
}

angular.module('mean.system')
  .controller('ChatController', ['$scope', '$firebaseArray', 'game', ($scope, $firebaseArray, game) => {
    $scope.content = '';
    $scope.isChatOpen = false;
    $scope.hasUnreadMessages = false;

    $scope.$watch('game.gameID', (newValue) => {
      if (newValue !== null) {
        const chatRef = new Firebase(`https://k2-cfh-215c8.firebaseio.com/chats/${game.gameID}`);
        $scope.chats = $firebaseArray(chatRef);

        // notifications
        $scope.chats.$watch(() => {
          // if chat box is not open set has unread to true
          if (!$scope.isChatOpen) {
            $scope.hasUnreadMessages = true;
          }
        });
      }
    });

    $scope.addChat = () => {
      const { playerIndex, players } = game;
      const { avatar, username } = players[playerIndex];

      if ($scope.content) {
        const chat = new Chat({ avatar, username }, $scope.content);
        $scope.chats.$add(chat);

        const chatsList = document.querySelector('.chats');
        chatsList.scrollTop = chatsList.scrollHeight;
        $scope.content = '';
      }
    };

    $scope.toggleChatOpen = () => {
      // if chat box is open set hasUnreadMessages to false and clear text input
      if ($scope.isChatOpen) {
        $scope.hasUnreadMessages = false;
        $scope.content = '';
      }
      $scope.isChatOpen = !$scope.isChatOpen;
      const chatsList = document.querySelector('.chats');
      // 50 is the bottom margin on the last li in chat list
      chatsList.scrollTop = chatsList.scrollHeight + 50;
    };
  }]);

