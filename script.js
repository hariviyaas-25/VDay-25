// Only run on the proposal page
if (document.querySelector('.proposal-page')) {
    // Create floating hearts
    function createHearts() {
        const hearts = '❤️💖💝💕';
        for (let i = 0; i < 20; i++) {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = (Math.random() * 5 + 5) + 's';
            heart.style.animationDelay = (Math.random() * 5) + 's';
            heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
            document.body.appendChild(heart);
        }
    }

    // Move the "No" button when hovered
    function moveButton(button) {
        const x = Math.random() * (window.innerWidth - button.offsetWidth);
        const y = Math.random() * (window.innerHeight - button.offsetHeight);
        button.style.position = 'fixed';
        button.style.left = x + 'px';
        button.style.top = y + 'px';
    }

    // Initialize floating hearts when the page loads
    document.addEventListener('DOMContentLoaded', createHearts);
}