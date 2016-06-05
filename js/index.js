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


  // Response
  NYLM = ["Couldn't find anything :P, Try stackoverflow","The pip function might help", "Have you tried the cat function?","Well, I did create Linux didn't I :P"]; // Response
  var LOL;
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
      console.log( typeof index);
      $(".messages").append("<li class=\"i "+ "LinuxCU" +"\"><div class=\"head\"><span class=\"time\">" + (new Date().getHours()) + ":" + (new Date().getMinutes()) + " AM, Today</span><span class=\"name\"> User</span></div><div class=\"message\">" + innerText + "</div></li>");
      claerResizeScroll();
      return otvet = setInterval(function() {
        $(".messages").append("<li class=\"friend-with-a-SVAGina "+"LinuxC"+"\"><div class=\"head\"><span class=\"name\">Linux  </span><span class=\"time\">" + (new Date().getHours()) + ":" + (new Date().getMinutes()) + " AM, Today</span></div><div class=\"message\">" + index + "</div></li>");
        claerResizeScroll();
        return clearInterval(otvet);
      }, getRandomInt(2500, 500));
    }
  };



  messageAnalyze = function(oStringText) {
    stringText = oStringText.trim()
    stringText = stringText.replace(/[?!]/g,"")
    var stringTextArray = stringText.split(" ");
    console.log(stringTextArray);
    var index =0;
    var indexi = "Couldn't find anything :P, Try stackoverflow"
    for (stringValue in stringTextArray){
      if (stringTextArray[stringValue] == "install"){
        index = 1;
      }else if (stringTextArray[stringValue] == "read"){
        index = 2;
      }else if (stringTextArray[stringValue] == "thanks"){
        index = 3;
      }
    }
    if (index == 0) {
        $(function() {
            var params = {
                // Request parameters
                "q": oStringText,
                "count": "1",
                "offset": "0",
                "mkt": "en-us",
                "safesearch": "Moderate",
            };
          
            $.ajax({
                url: "https://bingapis.azure-api.net/api/v5/search/?" + $.param(params),
                beforeSend: function(xhrObj){
                    // Request headers
                    xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","c6896f12cb1c4d15b14e7f1378861c14");
                },
                type: "GET",
                async: false,
                // Request body
                data: "{body}",
                sucess : function (data){
                indexi = data.webPages.value[0].url.toString();
                console.log(indexi);
                return indexi;
                }
            })
            .done(function(data) {
                LOL = data.webPages.value[0].url.toString();
                console.log("Test" + LOL);
            })
            .fail(function() {
                console.log("error");
                return "Try stackoverflow, We had no luck XD";
            });
        });
    }else{
      return NYLM[index];
    }
    return "Try this <a href=" +LOL+ ">" + "Link" + "</a>";
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