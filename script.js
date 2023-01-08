let colorVerify = null;
let mouseDown = false;

// Get Body Element index 0
let bodyContent = document.getElementsByTagName("body")[0];

// Get all Children of sidebar
let colorBlocks = document.querySelectorAll("#sidebar > *");

// Get all children of main "div"
let blocks = document.querySelectorAll("#main > *");

// Get button element index 0
let clearButton = document.getElementsByTagName("button")[0];

// Clear blocks when button is clicked
clearButton.addEventListener("click", () => {
    for (blockElement of blocks){
        blockElement.style.backgroundColor = "white";
    }
});

// Active button when mouse is down
bodyContent.addEventListener("mousedown", () => {
    mouseDown = true;
})

// Disable button when mouse is up
bodyContent.addEventListener("mouseup", () => {
    mouseDown = false;
})

// Add background when colorElement is clicked
for (colorElement of colorBlocks){
    colorElement.addEventListener("click", (e) => {
        colorVerify = e.target.style.backgroundColor;
    });
}

// Add event listeners
for (blockElement of blocks){
    blockElement.addEventListener("mousedown", (e) => {
        if (colorVerify != null) e.target.style.backgroundColor = colorVerify;
    });
    blockElement.addEventListener("mouseover", (e) => {
        if (mouseDown && colorVerify != null) e.target.style.backgroundColor = colorVerify;
    });
}