document.getElementById("copie").addEventListener('click', () => {
    let copyText = document.getElementById("copie").getAttribute('value');
    navigator.clipboard.writeText(copyText);
    alert("Mon adresse mail " + copyText + " est dans votre presse-papiers");
})

document.getElementById("copie").addEventListener("mouseover", () => {
    document.getElementById("copie").style.visibility = "normal";
});