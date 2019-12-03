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

    //these will be used on the server...use
    //dotenv to hide keys, we need to send 
    //urlSearchVar with ajax to server
    const settings = {
        "method": "post",
        "url": "https://api-us.faceplusplus.com/facepp/v3/detect",
        "data": {
            api_key: "RozOm7f1iC8JiGq5B0jQoDFuJnyOHXOa",
            api_secret: "ABBfaMDDUUtfNHfK46gxeLd2bLU6H4_Q",
            image_base64: `${urlSearchVar}`,
            return_attributes: "gender,age,emotion,skinstatus",
        }
    }
    //use an ajax get request to then make an axios 
    //post request on the server side. Once the results from
    //that post are made, handle the info, search
    //our database, and return the results to 
    //the client
    $.ajax(settings).done(response => {
        console.log(response);
    })
})