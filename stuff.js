// Add to local storage
function getData() {
    var alcoholType = document.getElementById("type").value;
    var alcoholName = document.getElementById("name").value;
    var alcoholRating = document.getElementById("rating").value;

    localStorage.setItem("alcohol-type", alcoholType);
    localStorage.setItem("alcohol-name", alcoholName);
    localStorage.setItem("alcohol-rating", alcoholRating);
};
// will reset input fields but will not allow saving to local storage
function getData() {
    document.getElementById("myForm").reset();
}