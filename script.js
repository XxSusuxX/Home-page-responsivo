window.onload = function () {
  const featureBtn = document.querySelector(".features");
  const companyBtn = document.querySelector(".company");
  const featureMenu = document.querySelector(".features-menu");
  const companyMenu = document.querySelector(".company-menu");
  const arrowUp1 = document.querySelector(".arrow-up1");
  const arrowDown1 = document.querySelector(".arrow-down1");
  const arrowUp2 = document.querySelector(".arrow-up2");
  const arrowDown2 = document.querySelector(".arrow-down2");
  const btnMenu = document.querySelector(".active-menu");
  const menu = document.querySelector(".menu");
  const menuClose = document.querySelector(".btn-close");
  featureBtn.addEventListener("click", () => {
    if (
      featureMenu.classList.contains("invisible") &&
      arrowUp1.classList.contains("display-none")
    ) {
      featureMenu.classList.remove("invisible");
      arrowDown1.classList.add("display-none");
      arrowUp1.classList.remove("display-none");
    } else {
      featureMenu.classList.add("invisible");
      arrowUp1.classList.add("display-none");
      arrowDown1.classList.remove("display-none");
    }
  });

  companyBtn.addEventListener("click", () => {
    if (
      companyMenu.classList.contains("invisible") &&
      arrowUp2.classList.contains("display-none")
    ) {
      companyMenu.classList.remove("invisible");
      arrowDown2.classList.add("display-none");
      arrowUp2.classList.remove("display-none");
    } else {
      companyMenu.classList.add("invisible");
      arrowUp2.classList.add("display-none");
      arrowDown2.classList.remove("display-none");
    }
  });

  btnMenu.addEventListener("click", () => {
    if (menu.style.display == "flex") {
      menu.style.display = "none";
    } else {
      menu.style.display = "flex";
      menuClose.style.display = "block";
    }
  });
  menuClose.addEventListener("click", () => {
    if (menu.style.display == "flex") {
      menu.style.display = "none";
    }
  });
};
