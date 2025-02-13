document.getElementById("yesBtn").addEventListener("click", function() {
    window.location.href = "yes.html";
});

document.getElementById("noBtn").addEventListener("mouseover", function() {
    this.style.position = "absolute";
    this.style.left = Math.random() * (window.innerWidth - 100) + "px";
    this.style.top = Math.random() * (window.innerHeight - 50) + "px";
});