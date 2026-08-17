let parentUl = document.getElementById("parentUl");
let allDl = parentUl.querySelectorAll("dl");
let button = document.getElementById("mouse");
let flag = true;

function mouseOver(e) {
    let curent = e.target;
    curent.style.fontWeight = "bold";
}

function mouseOut(e) {
    let curent = e.target;
    curent.style.fontWeight = "normal";
}

parentUl.addEventListener("mouseover", mouseOver);
parentUl.addEventListener("mouseout", mouseOut);


function hideDd(e) {
    let curent = e.target;
    let next;
    switch (curent.id) {
        case "PC":
            next = curent.nextElementSibling;
            changeDisplay(next);
            break;
        case "dt1":
            next = curent.nextElementSibling;
            changeDisplay(next);
            break;
        case "dt2":
            next = curent.nextElementSibling;
            changeDisplay(next);
            break;
    }
}

function changeDisplay(next) {
    if (next.style.display === "block" || next.style.display === "") {
        next.style.display = "none";
    }
    else {
        next.style.display = "block";
    }
}

parentUl.addEventListener("click", hideDd);

///////////////////////////////////////////////////////////

//Task 2
let select = document.getElementById("task2");
let allLi = select.querySelectorAll("li");

function selectedItems(e) {


    let curentElement = e.target;
    if (curentElement.tagName !== 'LI') return;
    let lastSelected = -1;

    if (e.shiftKey) {
        curentElement.classList.toggle("is-selected")
        for (let i = 0; i < allLi.length; i++) {
            if (allLi[i].classList.contains("is-selected")) {
                if (allLi[i] !== curentElement) {
                    lastSelected = i;
                    break;
                }
            }
        }
        if (lastSelected != -1) {
            let curentIndex = -1;
            for (let i = 0; i < allLi.length; i++) {
                if (allLi[i] === curentElement) {
                    curentIndex = i;
                    break;
                }
            }
            let start = Math.min(curentIndex, lastSelected);
            let end = Math.max(curentIndex, lastSelected);
            for (let i = start; i <= end; i++) {
                allLi[i].classList.add("is-selected");
            }
        }
    }
    else if (e.ctrlKey) {
        curentElement.classList.toggle("is-selected")
    }
    else {
        resetSelected();
    }
}

select.addEventListener("click", selectedItems);

function resetSelected() {
    allLi.forEach(elem => {
        if (elem.classList.contains("is-selected")) {
            elem.classList.toggle("is-selected")
        }
    });
}

///////////////////////////////////////////////////////////

//Task 3

let divTask3 = document.getElementById("task3");
let triangle = document.getElementById("divTriangle");

triangle.addEventListener("mousedown", DownHandler);
document.addEventListener("mouseup", UpHandler);
document.addEventListener("mousemove", MoveHandler);
let flagT3 = false, X, Y, W, H;

function DownHandler(ev) {
    ev.preventDefault();
    flagT3 = true;
    X = ev.clientX;
    Y = ev.clientY;
    W = divTask3.offsetWidth;
    H = divTask3.offsetHeight;
}
function UpHandler(ev) {
    flagT3 = false;
}
function MoveHandler(ev) {
    if (flagT3) {
        divTask3.style.width = (ev.clientX - X + W) + "px";
        divTask3.style.height = (ev.clientY - Y + H) + "px";
    }
}
