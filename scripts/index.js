let form = document.getElementById("form")

form.addEventListener("submit", function(){
    event.preventDefault()
    let email = form.email.value;
    let password = form.password.value;

    console.log(email, password)

    // empher@gmail.com
  // empher@123

  if(email=="empher@gmail.com" && password=="empher@123"){
    alert("Login Success, you are redirecting to quiz page")
    window.location.href = "quiz.html"
  }

})