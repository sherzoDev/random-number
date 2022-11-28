let x;
let y;
let z;
let $btn = document.querySelector("#btn")

$btn.addEventListener("click", (evt) => {
    evt.preventDefault();

    x = Math.floor(Math.random() * 100) + 1;
    y = Math.floor(Math.random() * 100) + 1;
    z = Math.floor(Math.random() * 100) + 1;

    document.getElementById("xlabel").innerHTML = x;
    document.getElementById("ylabel").innerHTML = y;
    document.getElementById("zlabel").innerHTML = z;
});