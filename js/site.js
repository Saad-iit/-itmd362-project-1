function chkemtpy(){
	
  var fname = document.forms["registerForm"]["fname"].value
  var lname = document.forms["registerForm"]["lname"].value
  var phone = document.forms["registerForm"]["phone"].value
  var email = document.forms["registerForm"]["email"].value
  var pass = document.forms["registerForm"]["password"].value
  
  if ((!fname) || (!lname) || (!phone) || (!email) || (!pass) ) {
    alert("Please fill all the fields");
    return false;

  } else{
    alert("You are all signed up! We look forward to meeting you!")
  }
  
}