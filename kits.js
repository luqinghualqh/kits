/* 
  我们将来在开发的时候，肯定会有很多重复使用的代码
  这些代码我们应该封装起来，以提高工作效率

  怎么封装呢？
    通常我们喜欢把方法封装到对象身上
*/
var kits = {};

kits.dispatchZero = function (num) {
  if (num < 10) {
    num = '0' + num;
  }
  return num;
}

// 把方法都放到对象的身上
// 1.formatDate	获取当前时间，并且返回： xxxx-xx-xx HH:mm:ss格式的时间
kits.formatDate = function () {
  var date = new Date();
  // 把年月日时分秒获取
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  month = this.dispatchZero(month);
  var day = date.getDate();
  day = this.dispatchZero(day);
  var hour = date.getHours();
  hour = this.dispatchZero(hour);
  var minute = this.dispatchZero(date.getMinutes());
  var second = this.dispatchZero(date.getSeconds());
  return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
}
// 2.randomInt  获取n到m之间的随机整数
kits.randomInt = function (n, m) {
  return Math.floor(Math.random() * (m - n + 1) + n);
}

//3.randomRGBColor   获取一个随机的rgb格式的颜色
kits.random = function (n, m) {
  return Math.floor(Math.random() * (m - n + 1) + n);
}

kits.randomColor = function () {
  var r = this.random(0, 255);
  var g = this.random(0, 255);
  var b = this.random(0, 255);
  return 'rgb(' + r + ',' + g + ',' + b + ')';
}
// 4.随机产生十六进制的颜色值

kits.randomColor16 = function () {
  var i = 0;
  var str = "#";
  var random = 0;
  var aryNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

  for (i = 0; i < 6; i++) {
    random = Math.floor((Math.random() * 16));
    str += aryNum[random];
  }
  return str;
};

// 5.常见的给id的方式1
// 当前时间戳 + 大的随机数
kits.getId = function () {
  // 返回一个不容易重复的id
  let date = new Date();
  let time = date.getTime(); // 得到的是从1970年1月1日到现在为止的毫秒总数
  // 然后在得到一个足够大的随机数，把毫秒和随机数相连，作为新的id
  let r = this.randomInt(100000, 999999);
  // 把两个数字连起来
  let id = time + '' + r;
  return id;
}