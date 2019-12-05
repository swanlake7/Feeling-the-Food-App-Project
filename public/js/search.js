$(document).ready(function() {
  // Creating jQuery selectors to handle to buttons
  const sleep = $("#sleep");
  const muscle = $("#muscle");
  const focus = $("#focus");
  const energy = $("#energy");
  const search = $("#search");
  // const find = $("#find");

  // Adding event listener for button click on desired feeling
  $(sleep).on("click", displaySleep);
  $(muscle).on("click", displayMuscle);
  $(focus).on("click", displayFocus);
  $(energy).on("click", displayEnergy);
  $(search).on("click", displayMood);
  // $(find).on("click", displayAll);

  function displayMood(event) {
    let value = $("#searchInput")
      .val()
      .trim();
    console.log("inside", value);
    event.preventDefault();
    $.get(`/api/mood/${value}`, function(data) {
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
    $.get("/api/sleep", function(data) {
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
    $.get("/api/muscle", function(data) {
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
  function displayFocus(event) {
    event.preventDefault();
    $.get("/api/focus", function(data) {
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
  function displayEnergy(event) {
    event.preventDefault();
    $.get("/api/energy", function(data) {
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
  $("#table").hide();
  $("#table").bootstrapTable("hideLoading");
  $("button").on("click", function() {
    $(".mood").empty();
    $("button").hide();
    $("#table").show();
    $("#table").bootstrapTable("refresh", {
      url: "http://localhost:3000/api/all"
    });
  });
});
