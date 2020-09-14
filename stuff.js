// var saveButton = $(".save-btn");

// saveButton.on("click", function(event) {
//     event.preventDefault();
//     var alcoholType = $("#type").val();
//     var alcoholName = $("#name").val();
//     var alcoholRating = $("rating").val();

//     localStorage.setItem('alcohol-type', alcoholType.toUpperCase());
//     localStorage.setItem('alcohol-name', alcoholName.toUpperCase());
//     localStorage.setItem('alcohol-rating', alcoholRating.toUpperCase());
// });


// Add to local storage
function getData() {
    var alcoholType = document.getElementById("type").value;
    var alcoholName = document.getElementById("name").value;
    var alcoholRating = document.getElementById("rating").value;

    localStorage.setItem("alcohol-type", alcoholType);
    localStorage.setItem("alcohol-name", alcoholName);
    localStorage.setItem("alcohol-rating", alcoholRating);
}