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

  NYLM = ["Уходи дверь закрой", "У меня теперь другой", "Все для тебя", "Мне не нужен больше твой номер в книжке записной", "Владимирский централ, ветер сука", "Ты ушол, а я текла", "Ты пришол в красный день календаря", "бла бла", ")", "умри", "ой все.", "ой все.", "ой все.", "Ты говоришь ТОЧНЕЕ пишешьСя сам с собой"];

  getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  claerResizeScroll = function() {
    $("#texxt").val("");
    $(".messages").getNiceScroll(0).resize();
    return $(".messages").getNiceScroll(0).doScrollTop(999999, 999);
  };

  insertI = function() {
    var innerText, otvet;
    innerText = $.trim($("#texxt").val());
    if (innerText !== "") {
      $(".messages").append("<li class=\"i\"><div class=\"head\"><span class=\"time\">" + (new Date().getHours()) + ":" + (new Date().getMinutes()) + " AM, Today</span><span class=\"name\"> Буль</span></div><div class=\"message\">" + innerText + "</div></li>");
      claerResizeScroll();
      return otvet = setInterval(function() {
        $(".messages").append("<li class=\"friend-with-a-SVAGina\"><div class=\"head\"><span class=\"name\">Юния  </span><span class=\"time\">" + (new Date().getHours()) + ":" + (new Date().getMinutes()) + " AM, Today</span></div><div class=\"message\">" + NYLM[getRandomInt(0, NYLM.length - 1)] + "</div></li>");
        claerResizeScroll();
        return clearInterval(otvet);
      }, getRandomInt(2500, 500));
    }
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