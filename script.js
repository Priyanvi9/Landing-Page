document.addEventListener("DOMContentLoaded", () => {
    const learnMoreBtn = document.getElementById("learnMoreBtn");
    const loginBtn = document.getElementById("loginBtn");
    const phoneScreen = document.getElementById("phoneScreen");
    const phoneBack = document.getElementById("phoneBack");
    loginBtn.addEventListener("click", () => {
        phoneScreen.style.transform = "scale(0.8) translateX(50px)";
        phoneScreen.style.zIndex = "1";
        phoneScreen.style.opacity = "0.6";

        phoneBack.style.transform = "scale(1.1) translateX(-50px)";
        phoneBack.style.zIndex = "2";
        phoneBack.style.opacity = "1";

        setTimeout(() => {
            window.location.href = "home.html";  
        }, 500); 
    });
});





document.getElementById("applyForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    document.body.classList.add("green-background");

    document.getElementById("apply-now").style.display = "none";
    document.getElementById("confirmation").style.display = "block";
    
    // Optionally, you can reset the form here if required
    // document.getElementById("applyForm").reset();
});
