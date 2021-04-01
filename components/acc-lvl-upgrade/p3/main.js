function submitCard(event,cardChoice) {
  event = event || window.event;
  event.preventDefault()
  var i;
  var x = document.getElementsByClassName("submitchoice");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(cardChoice).style.display = "block";  
}

function nextStep(){
 
  var a = document.getElementsByClassName("acc-lvl-scohice-tphoto");
  var b = document.getElementsByClassName("acc-lvl-schoice-tphoto-s2");
  console.log(b)
  a[0].style.display = "none";
  b[0].style.display= "flex"
}