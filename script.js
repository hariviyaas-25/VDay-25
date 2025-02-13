document.getElementById("yesBtn").addEventListener("click", function() {
    window.location.href = "yes.html";
});

document.getElementById("noBtn").addEventListener("mouseover", function() {
    let containerWidth = 375;  // Mobile width
    let containerHeight = 667; // Mobile height

    let newX = Math.random() * (containerWidth - 100);
    let newY = Math.random() * (containerHeight - 50);

    this.style.left = newX + "px";
    this.style.top = newY + "px";
});
