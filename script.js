
/* CONTACT FORM VALIDATION */
document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("email");
    const sendBtn = document.querySelector(".btn.btn-primary.w-100");

    sendBtn.addEventListener("click", function () {

        const emailValue = emailInput.value.trim();

        if (!emailValue.includes("@")) {
            alert("Please enter a valid email address (must contain '@').");
            emailInput.focus();
            return;
        }

        // IF SUCCESS
        alert("Your message has been sent! 🎉");
    });
});

/*  BOOK SLOT BUTTONS */
const bookButtons = document.querySelectorAll(".btn.btn-primary.mt-2");

bookButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        alert("Slot booked successfully! See you in class 💜");
    });
});
