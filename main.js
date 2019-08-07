let draw = false


window.onload = function () {
    const container = document.querySelector("#container")
    createGrid(container);
    
    
    
    
}

function createGrid(c) {
    for (let index = 0; index < 256; index++) {
        const sqr = document.createElement('div');
        sqr.classList.add('sqr');
        sqr.addEventListener('mouseover', () => {
            console.log(sqr);
            sqr.classList.add('sqrActive');
    
        })

        c.appendChild(sqr);
    }

}

