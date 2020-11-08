const roll = function (foo) {
    return Math.floor(Math.random() * foo) + 1;
}

let x = roll(6);
document.getElementById('myid').innerHTML = x;
