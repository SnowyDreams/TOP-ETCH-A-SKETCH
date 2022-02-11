const container = document.getElementById("container");
const saturation = 100,
    lightness = 10;

function makeRows(rows, cols) {
    container.innerHTML = "";
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        cell.addEventListener("mouseover", colorShift);
        cell.classList.add("grid-item", "pixel")
        cell.dataset.pass = 0;
        cell.dataset.hue = "";
        container.appendChild(cell);
    };
};

function colorShift(event) {
    let data = event.target.dataset;
    if (data.hue == "") {
        data.hue = Math.floor(Math.random() * 255);
    }

    data.pass = parseInt(data.pass) + 1;
    event.target.style.backgroundColor = `hsl(${data.hue},${saturation}%,${100-(lightness*data.pass)}%)`;
}

function reset() {
    let pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pixel => {
        pixel.style.backgroundColor = "";
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
    userSize.length != 1 ? makeRows(userSize[0], userSize[1]) : makeRows(userSize[0], userSize[0]);

}
makeRows(20, 20);