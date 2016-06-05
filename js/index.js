  (function() {
  var NYLM, claerResizeScroll, conf, getRandomInt, insertI, lol;

  conf = {
    cursorcolor: "#696c75",
    cursorwidth: "4px",
    cursorborder: "none"
  };

  lol = {
    cursorcolor: "#cdd2d6",
    cursorwidth: "4px",
    cursorborder: "none"
  };



  //This code covers the on click event
  var ul = document.getElementsByClassName("list-friends");  // Parent

  ul.addEventListener('click', function(e) {
    console.log("Hello");
    if (e.target.tagName === 'LI'){
        alert(e.target.id);  // Check if the element is a LI
    }
  });

  // Response
  NYLM = ["Couldn't find anything :P, Try stackoverflow","The pip function might help", "Have you tried the cat function?","Well, I did create Linux didn't I :P"]; // Response

  getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  claerResizeScroll = function() {
    $("#texxt").val("");
    $(".messages").getNiceScroll(0).resize();
    return $(".messages").getNiceScroll(0).doScrollTop(999999, 999);
  };

  // This is where the response is called from User and second one is Linux (InnerText contains the user message)
  insertI = function() {
    var innerText, otvet;
    innerText = $.trim($("#texxt").val());
    if (innerText !== "") {
      index = messageAnalyze(innerText);
      $(".messages").append("<li class=\"i\"><div class=\"head\"><span class=\"time\">" + (new Date().getHours()) + ":" + (new Date().getMinutes()) + " AM, Today</span><span class=\"name\"> User</span></div><div class=\"message\">" + innerText + "</div></li>");
      claerResizeScroll();
      return otvet = setInterval(function() {
        $(".messages").append("<li class=\"friend-with-a-SVAGina\"><div class=\"head\"><span class=\"name\">Linux  </span><span class=\"time\">" + (new Date().getHours()) + ":" + (new Date().getMinutes()) + " AM, Today</span></div><div class=\"message\">" + NYLM[index] + "</div></li>");
        claerResizeScroll();
        return clearInterval(otvet);
      }, getRandomInt(2500, 500));
    }
  };

  messageAnalyze = function(stringText) {
    stringText = stringText.trim()
    stringText = stringText.replace(/[?!]/g,"")
    var stringTextArray = stringText.split(" ");
    console.log(stringTextArray);
    for (stringValue in stringTextArray){
      if (stringTextArray[stringValue] == "install"){
        var index = 1;
      }else if (stringTextArray[stringValue] == "read"){
        var index = 2;
      }else if (stringTextArray[stringValue] == "thanks"){
        var index = 3;
      }
    }
    if (index == null || index == undefined) {
      var index = 0;
    }
    return index;
  };


  $(document).ready(function() {
    $(".list-friends").niceScroll(conf);
    $(".messages").niceScroll(lol);
    $("#texxt").keypress(function(e) {
      if (e.keyCode === 13) {
        insertI();
        return false;
      }
    });
    return $(".send").click(function() {
      return insertI();
    });
  });

}).call(this);