
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const popUpMsg = document.querySelector('.Popup-Message');
const explore = document.querySelector('.explore');

//Menu Toggle
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  // PopUp-message
  setTimeout(() => {
    popUpMsg.classList.remove("hidden")
  }, 5000)
  

explore.addEventListener('click', () => {
  popUpMsg.classList.add("hidden")
});



