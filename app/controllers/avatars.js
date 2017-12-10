/**
 * List of Avatars
 */

const avatars = [
  '/assets/img/avatars/1.png',
  '/assets/img/avatars/2.png',
  '/assets/img/avatars/3.png',
  '/assets/img/avatars/4.png',
  '/assets/img/avatars/5.png',
  '/assets/img/avatars/6.png',
  '/assets/img/avatars/7.png',
  '/assets/img/avatars/8.png',
  '/assets/img/avatars/9.png',
  '/assets/img/avatars/10.png',
  '/assets/img/avatars/11.png',
  '/assets/img/avatars/12.png',
  '/assets/img/avatars/13.png',
  '/assets/img/avatars/14.png',
  '/assets/img/avatars/15.png',
  '/assets/img/avatars/16.png',
  '/assets/img/avatars/17.png',
  '/assets/img/avatars/18.png'
];

exports.allJSON = (req, res) => {
  res.jsonp(avatars);
};

exports.all = () => avatars;