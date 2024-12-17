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


document.getElementById("applyForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Form ke default behavior ko rokta hai

    // Form ko hide karte hain
    document.querySelector(".apply-now").style.display = "none";

    // Confirmation message ko show karte hain
    document.getElementById("confirmation").style.display = "block";
})


