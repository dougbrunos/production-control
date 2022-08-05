let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
    //call the function every 6 seconds
    nextImage();
}, 6000)

function nextImage() {
    count++;
    if (count > 6) {
        count = 1;
    }

    //radio change with count
    document.getElementById("radio" + count).checked = true;

}