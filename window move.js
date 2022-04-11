var form = document.getElementById("form");
form.addEventListener("mousemove", (e) => {
    var x = (window.innerWidth / 2 - e.client) / 12;
    var y = (window.innerHeight / 2 - e.client) / 12;

    form.style.transform = "rotateX(" + x + "deg)  rotateY(" + x + "deg)";
});