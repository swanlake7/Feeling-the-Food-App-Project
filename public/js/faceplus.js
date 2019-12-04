const realFileBtn = document.getElementById("real-file");
const customBtn = document.getElementById("custom-button");
const customTxt = document.getElementById("custom-text");


customBtn.addEventListener("click", function () {
    realFileBtn.click();
});

realFileBtn.addEventListener("change", function (event) {
    console.log(event.target.files[0])
    if (realFileBtn.value) {
        customTxt.innerHTML = realFileBtn.value.match(
            /[\/\\]([\w\d\s\.\-\(\)]+)$/
        )[1];
    } else {
        customTxt.innerHTML = "No file chosen, yet.";
    }
});

$("#real-file").change(function (event) {
    console.log(event.target.files)
    encodeImageFileAsURL(event.target);
});

function encodeImageFileAsURL(element) {
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
        urlSearchVar = reader.result.split(',')[1]
    }
    reader.readAsDataURL(file);
    console.log(urlSearchVar);
}

//FacePlus

var urlSearchVar = '';

var faceplusKeywords = [];

$("#search-button").on("click", function () {
    $(this).hide();
    let spin = document.createElement('div');
    spin.innerHTML =
        `<div class="spinner-border" id="spinner" role="status">
  <span class="sr-only">Loading...</span>
    </div>`
    $(".upload-button").append(spin);

    $.post("/faceplus", { image: `${urlSearchVar}` }, function (data) {
        console.log(data);
    })
})