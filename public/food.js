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

  // Get the signup modal
  // var modalsu = document.getElementById('signupp');
  // When the user clicks anywhere outside of the modal, close it
  // window.onclick = function (event) {
  //   if (event.target == modalsu) {
  //     modalsu.style.display = "none";
  //   }
  // }


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
    $.post('/login', user).then(success => {
      console.log("good to go!")
      window.location.replace("/home.html");
    }).catch(err => {
      window.location.replace("/");
    });
  };

  function signUpSubmit(event) {
    event.preventDefault();
    var email = $("#emailsu").val();
    var pw = $("#pwsu").val();
    var pwsec = $("#pwsusec").val();
    // var check = $("#checksu").val();

    console.log(email);
    console.log(pw);
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
    console.log(userinfo.email);
    console.log(userinfo.pw);
  }

  //submit info 
  function postUser(info) {
    $.post('/api/users', info).then(console.log("signup success!!")).then($("#sumodal").hide());
  }
});

