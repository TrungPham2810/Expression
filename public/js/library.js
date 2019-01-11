// $ là 1 function expression
var $ = function (selector) {
    var that = {};
    that.hide = function () {
      document.querySelector(selector).style.display= "none";
    };
    that.show = function () {
      document.querySelector(selector).style.display= "block";
    };
    return that;
  }