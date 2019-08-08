let draw = false
const container = document.querySelector("#container")

window.onload = function () {
    createGrid(container,16);
    createReset();
}

function createGrid(c, n) {
    for (let index = 0; index < n*n; index++) {
        let dimension = (800/n) - 0.10 + 'px'; //calculate dimension of squares
        //console.log(dimension);
        const sqr = document.createElement('div');
        sqr.style.width = dimension; // set dimensions
        sqr.style.height = dimension;
        sqr.classList.add('sqr');
        sqr.addEventListener('mouseover', () => {
            console.log(sqr);
            sqr.classList.add('sqrActive');
        })

        c.appendChild(sqr);
    }

}

function clearGrid(c) {
    c.innerHTML = "";
}


function createReset(){
    const reset = document.querySelector("#reset");
    reset.addEventListener('click', () => {
        clearGrid(container);
        let d 
        while (isNaN(d)){  //checks for valid input
            d = askDimension();   
        }
        createGrid(container,d);
    })
}

function askDimension(){
    d = prompt("Please enter a grid dimension ex: 16 NOTE: Bigger the number the higher the wait time");
    return d
}