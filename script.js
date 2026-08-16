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

function mouseTask1() {
    if (flag) {
        document.body.addEventListener("mouseover", mouseOver);
        document.body.addEventListener("mouseout", mouseOut);
        flag = false;
    }
    else {
        document.body.removeEventListener("mouseover", mouseOver);
        document.body.removeEventListener("mouseout", mouseOut);
        flag = true;
    }
}

button.addEventListener("click", mouseTask1)


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