document.getElementById("copie").addEventListener('click', () => {
    let copyText = document.getElementById("copie").getAttribute('value');
    navigator.clipboard.writeText(copyText);
    if (document.location.pathname == "/Portfolio/English.html") {
        alert("My email address " + copyText + " is in your clipboard");
    } else {
        alert("Mon adresse mail " + copyText + " est dans votre presse-papiers");
    }
})

document.getElementById("copie").addEventListener("mouseover", () => {
    document.getElementById("copie").style.visibility = "normal";
});

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("proj");
    if (c == "tous") c = ""; // tout est affiché
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}
filterSelection("tous");

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
    }
}

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("barre_selection");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}