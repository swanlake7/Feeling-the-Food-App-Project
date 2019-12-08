<<<<<<< HEAD
$(document).ready(function () {
=======

$(document).ready(function() {
>>>>>>> 609e1da1220ffe0e5b9a194f3d053a383c5d0ee7
  // Creating jQuery selectors to handle to buttons
  const sleep = $("#sleep");
  const muscle = $("#muscle");
  const focus = $("#focus");
  const energy = $("#energy");
  const search = $("#search");
  let value = $("#searchInput")
    .val()
    .trim();

  // Adding event listener for button click on desired feeling
<<<<<<< HEAD
  $("#results").hide();
  $("#table").hide();
  $("#table").bootstrapTable("hideLoading");
  sleep.on("click", function () {
    $(".mood").empty();
    $(".search-container").hide();
    $("button").hide();
    $("#results").show();
    $("#table").show();
    $("#table").bootstrapTable("refresh", {
      url: "/api/sleep"
    });
  });
  muscle.on("click", function () {
    $(".mood").empty();
    $(".search-container").hide();
    $("button").hide();
    $("#results").show();
    $("#table").show();
    $("#table").bootstrapTable("refresh", {
      url: "/api/muscle"
    });
  });
  focus.on("click", function () {
    $(".mood").empty();
    $("button").hide();
    $(".search-container").hide();
    $("#results").show();
    $("#table").show();
    $("#table").bootstrapTable("refresh", {
      url: "/api/focus"
=======
  $(sleep).on("click", displaySleep);
  $(muscle).on("click", displayMuscle);
  $(focus).on("click", displayFocus);
  $(energy).on("click", displayEnergy);
  $(search).on("click", displayMood);

  var token = "?token=" + localStorage.token

  function displayMood(event) {
    let value = $("#searchInput")
      .val()
      .trim();
    console.log("inside", value);
    event.preventDefault();
    $.get(`/api/mood/${value}` + token, function (data) {
      console.log(data);

      $(".mood").empty();
      // Create table to hold the top 10 plants for each category
      for (let i = 0; i < data.length; i++) {
        const exampleTable = $(`<table class="table">
        <thead>
      <tr>
        <th scope='col'>Latin Name</th>
        <th scope='col'>Common Name</th>
        <th scope='col'>Known Hazards</th>
        <th scope='col'>Medicinal</th>
        <th scope='col'>Edibility Rating</th>
        <th scope='col'>Medicinal Rating</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>${data[i].Latinname}</td>
        <td>${data[i].Commonname}</td>
        <td>${data[i].Knownhazards}</td>
        <td>${data[i].Medicinal}
        <td>${data[i].EdibilityRating}</td>
        <td>${data[i].MedicinalRating}</td>
      </tr>
      </tbody>
    </table>`);
        $(".mood").append(exampleTable);
      }
    });
  }

  function displaySleep(event) {
    event.preventDefault();
    $.get("/api/sleep" + token, function (data) {
      console.log(data);

      $(".mood").empty();
      // Create table to hold the top 10 plants for each category
      for (let i = 0; i < data.length; i++) {
        const exampleTable = $(`<table class="table">
        <thead>
      <tr>
        <th scope='col'>Latin Name</th>
        <th scope='col'>Common Name</th>
        <th scope='col'>Known Hazards</th>
        <th scope='col'>Medicinal</th>
        <th scope='col'>Edibility Rating</th>
        <th scope='col'>Medicinal Rating</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>${data[i].Latinname}</td>
        <td>${data[i].Commonname}</td>
        <td>${data[i].Knownhazards}</td>
        <td>${data[i].Medicinal}
        <td>${data[i].EdibilityRating}</td>
        <td>${data[i].MedicinalRating}</td>
      </tr>
      </tbody>
    </table>`);
        $(".mood").append(exampleTable);
      }
    });
  }

  function displayMuscle(event) {
    event.preventDefault();
    $.get("/api/muscle" + token, function (data) {
      console.log(data);

      $(".mood").empty();
      // Create table to hold the top 10 plants for each category
      for (let i = 0; i < data.length; i++) {
        const exampleTable = $(`<table class="table">
        <thead>
      <tr>
        <th scope='col'>Latin Name</th>
        <th scope='col'>Common Name</th>
        <th scope='col'>Known Hazards</th>
        <th scope='col'>Medicinal</th>
        <th scope='col'>Edibility Rating</th>
        <th scope='col'>Medicinal Rating</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>${data[i].Latinname}</td>
        <td>${data[i].Commonname}</td>
        <td>${data[i].Knownhazards}</td>
        <td>${data[i].Medicinal}
        <td>${data[i].EdibilityRating}</td>
        <td>${data[i].MedicinalRating}</td>
      </tr>
      </tbody>
    </table>`);
        $(".mood").append(exampleTable);
      }
>>>>>>> 609e1da1220ffe0e5b9a194f3d053a383c5d0ee7
    });
  }
  function displayFocus(event) {
    event.preventDefault();
    $.get("/api/focus" + token, function (data) {
      console.log(data);

<<<<<<< HEAD
  energy.on("click", function () {
    $(".mood").empty();
    $("button").hide();
    $(".search-container").hide();
    $("#results").show();
    $("#table").show();
    $("#table").bootstrapTable("refresh", {
      url: "/api/energy"
=======
      $(".mood").empty();
      // Create table to hold the top 10 plants for each category
      for (let i = 0; i < data.length; i++) {
        const exampleTable = $(`<table class="table">
        <thead>
      <tr>
        <th scope='col'>Latin Name</th>
        <th scope='col'>Common Name</th>
        <th scope='col'>Known Hazards</th>
        <th scope='col'>Medicinal</th>
        <th scope='col'>Edibility Rating</th>
        <th scope='col'>Medicinal Rating</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>${data[i].Latinname}</td>
        <td>${data[i].Commonname}</td>
        <td>${data[i].Knownhazards}</td>
        <td>${data[i].Medicinal}
        <td>${data[i].EdibilityRating}</td>
        <td>${data[i].MedicinalRating}</td>
      </tr>
      </tbody>
    </table>`);
        $(".mood").append(exampleTable);
      }
>>>>>>> 609e1da1220ffe0e5b9a194f3d053a383c5d0ee7
    });
  }
  function displayEnergy(event) {
    event.preventDefault();
    $.get("/api/energy" + token, function (data) {
      console.log(data);

<<<<<<< HEAD
  search.on("click", function () {
    let value = $("#searchInput")
      .val()
      .trim();
    $(".mood").empty();
    $("button").hide();
    $(".search-container").hide();
    $("#results").show();
    $("#table").show();
    $("#table").bootstrapTable("refresh", {
      url: `/api/mood/${value}`
=======
      $(".mood").empty();
      // Create table to hold the top 10 plants for each category
      for (let i = 0; i < data.length; i++) {
        const exampleTable = $(`<table class="table">
        <thead>
      <tr>
        <th scope='col'>Latin Name</th>
        <th scope='col'>Common Name</th>
        <th scope='col'>Known Hazards</th>
        <th scope='col'>Medicinal</th>
        <th scope='col'>Edibility Rating</th>
        <th scope='col'>Medicinal Rating</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>${data[i].Latinname}</td>
        <td>${data[i].Commonname}</td>
        <td>${data[i].Knownhazards}</td>
        <td>${data[i].Medicinal}
        <td>${data[i].EdibilityRating}</td>
        <td>${data[i].MedicinalRating}</td>
      </tr>
      </tbody>
    </table>`);
        $(".mood").append(exampleTable);
      }
>>>>>>> 609e1da1220ffe0e5b9a194f3d053a383c5d0ee7
    });
  }
});
