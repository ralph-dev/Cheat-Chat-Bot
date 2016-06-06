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
  var switchtwo = true;
  NYLM = ["Couldn't find anything :P, Try stackoverflow","The pip function might help", "Have you tried the cat function?","Well, I did create Linux didn't I :P", "It sounds like the replace function, heres the syntax {string}.replace('OLD_VALUE','NEW_VALUE')"]; // Response
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
  var innerText, otvet, switchone;
  innerText = $.trim($("#texxt").val());
  if (innerText !== "") {
      index = messageAnalyze(innerText);
      console.log( typeof index);

      if (switchtwo == true){
        switchone = "linux";
      }else{
        switchone = "python";
      }
      $("." + switchone).append("<li class=\"i\"><div class=\"head\"><span class=\"time\">" + (new Date().getHours()) + ":" + (new Date().getMinutes()) + " AM, Today</span><span class=\"name\"> User</span></div><div class=\"message\">" + innerText + "</div></li>");
      claerResizeScroll();
      return otvet = setInterval(function() {
      $("." + switchone).append("<li class=\"friend-with-a-SVAGina\"><div class=\"head\"><span class=\"name\">Linux </span><span class=\"time\">" + (new Date().getHours()) + ":" + (new Date().getMinutes()) + " AM, Today</span></div><div class=\"message\">" + index + "</div></li>");
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
      }else if (stringTextArray[stringValue] == "replace"){
        index=4
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
          console.log('hrllo');
          document.getElementsByClassName("Python Avatar")[0].style.display = 'none';
          document.getElementsByClassName("Python Avatar")[0].style.display = 'none';
          //hideConversation("python");
          var ConversationArrayPython = document.getElementsByClassName('python');
          ConversationArrayPython[0].style.display = 'none';
          

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


        //This code covers the on click event
      var ul = document.getElementById("flfs");  // Parent

      ul.addEventListener('click', function(e) {
        console.log(e.target.textContent);
        if (e.target.textContent == "Python"){
          switchtwo = false;
          // var ConversationArraytestlinux = document.getElementsByClassName('testlinux');
          // ConversationArraytestlinux[0].style.display = 'none';

          // var ConversationArraytestpython = document.getElementsByClassName('testpython');
          // ConversationArraytestpython[0].style.display = 'block';

          var ConversationArrayPython = document.getElementsByClassName('python');
        ConversationArrayPython[0].style.display = 'block';

          var ConversationArrayLinux = document.getElementsByClassName('linux');
          ConversationArrayLinux[0].style.display = 'none';
          
        }else if (e.target.textContent == "Linux") {
          switchtwo = true;
          // var ConversationArraytestpython = document.getElementsByClassName('testpython');
          // ConversationArraytestpython[0].style.display = 'none';

          // var ConversationArraytestlinux = document.getElementsByClassName('testlinux');
          // ConversationArraytestlinux[0].style.display = 'block';

          var ConversationArrayPython = document.getElementsByClassName('python');
        ConversationArrayPython[0].style.display = 'none';
          var ConversationArrayLinux = document.getElementsByClassName('linux');
          ConversationArrayLinux[0].style.display = 'block';
          
        }
      });

}).call(this);


