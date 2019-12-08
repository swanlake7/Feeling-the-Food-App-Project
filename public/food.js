$(document).ready(function () {
  //for adding signup info into database
  $("#signupForm").on("submit", signUpSubmit);
  //for logging in the user
  $("#loginForm").on("submit", logIn);
  // Get the login modal
  var modal = document.getElementById('id01');
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

<<<<<<< HEAD
  // Get the signup modal
  // var modalsu = document.getElementById('signupp');
  // When the user clicks anywhere outside of the modal, close it
  // window.onclick = function (event) {
  //   if (event.target == modalsu) {
  //     modalsu.style.display = "none";
  //   }
  // }

=======
>>>>>>> 609e1da1220ffe0e5b9a194f3d053a383c5d0ee7
  function logIn() {
    event.preventDefault();
    var passw = $("#loginPw").val();
    var rem = $("#remLog").val();
    var un = $("#loginUserName").val();
    var logInfo = {
      'email': un,
      'pw': passw
    };
    getUser(logInfo);
  }

  function getUser(user) {
    $.post('/login', user).then(data => {
      console.log(data);
      console.log("good to go!")
      localStorage.setItem('token', data);
      window.location.replace("/home.html");
    })
  };

  function signUpSubmit(event) {
    event.preventDefault();
    var email = $("#emailsu").val();
    var pw = $("#pwsu").val();
    var pwsec = $("#pwsusec").val();

    if (pw !== pwsec) {
      alert("the passwords do not match");
      return;
    }

    if (!email || !pw || !pwsec) {
      alert('Please fill out all of the fields');
      return;
    }

    var userinfo = {
      'email': `${email}`,
      'pw': `${pw}`
    };
    postUser(userinfo);
  }

  //submit info 
  function postUser(info) {
    $.post('/api/users', info).then(console.log("signup success!!")).then($("#sumodal").hide());
  }
});

