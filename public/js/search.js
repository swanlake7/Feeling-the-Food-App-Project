$(document).ready(function () {
  // Creating jQuery selectors to handle to buttons
  const sleep = $("#sleep");
  const muscle = $("#muscle");
  const focus = $("#focus");
  const energy = $("#energy");
  const search = $("#search");

  // Adding event listener for button click on desired feeling
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
    });
  });

  energy.on("click", function () {
    $(".mood").empty();
    $("button").hide();
    $(".search-container").hide();
    $("#results").show();
    $("#table").show();
    $("#table").bootstrapTable("refresh", {
      url: "/api/energy"
    });
  });

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
    });
  });
});
