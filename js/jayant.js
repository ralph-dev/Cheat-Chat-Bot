



function hideDiv(tmp)
{
  for(var i = 0; i < tmp.length; i++)
  {
    document.getElementsByClassName(tmp[i])[0].style.display = 'none';
  }
}



function showDiv(tmp){
  for(var i = 0; i < tmp.length; i++)
  {
    document.getElementsByClassName(tmp[i])[0].style.display = 'block';
  }
}

// on mouse down on supportUser, do the operations in the function


function showAvatar(supportUserAvatarName)
{
  document.getElementsByClassName(supportUserAvatarName)[0].style.display = 'block';
}

function hideAvatar(supportUserAvatarName)
{
  document.getElementsByClassName(supportUserAvatarName)[0].style.display = 'none';
}



var users = ['Linux','Python']
var currentUser = 'Linux';
document.getElementById("searchSupport")
    .addEventListener("keyup", function(event) {
    var show = [];
    var hide = [];
    // alert(event.value);
    var val = $("#searchSupport").val();


    // string.indexOf(substring) > -1;
    for(var i = 0; i < users.length; i++)
    {
      if(users[i].toLowerCase().indexOf(val.toLowerCase()) > -1)
      {
        show.push(users[[i]]);
      }
      else
      {
        hide.push(users[[i]]);
      }
    }
    // resetDiv(users);

    hideDiv(hide);
    showDiv(show);


});


var ul = document.getElementById("flfs");  // Parent

ul.addEventListener('click', function(e) 
{

  console.log(e.target.textContent);

  if (e.target.textContent == "Python")
  {

    showAvatar("Python Avatar");
    hideAvatar("Linux Avatar");
    // change name here
    //hideConversation("linux");
   // showConversation("python");
   // currentUser = 'Python';
  }

if (e.target.textContent == "Linux")
  {
    showAvatar("Linux Avatar");
    hideAvatar("Python Avatar");
    // change class name
  //  hideConversation("python");
  //  showConversation("linux");
  }
});



// function hideConversation(supportUserClassName)
// {
//   var ConversationArray = document.getElementsByClassName(supportUserClassName);
//   for (i in ConversationArray)
//   {
//       ConversationArray[i].style.display = 'none';
//   }
// }

// function showConversation(supportUserClassName)
// {
// //add show code here
//   var ConversationArray = document.getElementsByClassName(supportUserClassName);
//   for (i in ConversationArray)
//   {
//       ConversationArray[i].style.display = 'block';
//   }
// }

