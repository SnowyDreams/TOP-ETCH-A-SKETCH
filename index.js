const container = document.getElementById("container");

function makeRows(rows, cols) {
    container.innerHTML = "";
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        cell.addEventListener("mouseover", colorShift);
        cell.classList.add("grid-item", "pixel")
        container.appendChild(cell);
    };
};

function colorShift() {
    event.target.style.backgroundColor = "blue";
}

function reset() {
    let pixels = document.querySelectorAll('.pixel')
    pixels.forEach(pixel => {
        pixel.style.backgroundColor = ""
    });

    let userSize = prompt("What size would you like?", "20X20").split(/\D+/);
    if (userSize.length > 2 || userSize.length < 1) {
        alert("Invalid value: must be 1 or 2 numbers seperated (by any character)");
        reset();
    }

    userSize.forEach(element => {
        if (element < 1 || element > 100) {
            alert("Invalid values: must be between 1 and 100");
            reset();
        }
    });
    userSize.length != 1 ?  makeRows(userSize[0], userSize[1]) : makeRows(userSize[0],userSize[0]);

}
makeRows(20, 20);