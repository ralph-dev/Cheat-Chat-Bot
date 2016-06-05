

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
function selectClientUser(supportUserClassName)
{

}



var users = ['Linux','Python']
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