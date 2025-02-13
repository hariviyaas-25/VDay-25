document.getElementById("yesBtn").addEventListener("click", function() {
    window.location.href = "yes.html";
});

document.getElementById("noBtn").addEventListener("mouseover", function() {
    let container = document.querySelector(".container");
    let maxWidth = container.clientWidth - this.clientWidth;
    let maxHeight = container.clientHeight - this.clientHeight;

    let newX = Math.random() * maxWidth;
    let newY = Math.random() * maxHeight;

    this.style.left = newX + "px";
    this.style.top = newY + "px";
});
