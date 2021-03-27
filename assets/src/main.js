const gnb = document.querySelector(".gnb");

gnb.addEventListener("click", () => {
  const menuBtn = document.querySelector(".gnb-menu");
  const closeBtn = document.querySelector(".gnb-close");
  const menuList = document.querySelector(".header__container");
  menuBtn.classList.toggle("hide");
  closeBtn.classList.toggle("hide");
  menuList.classList.toggle("active");
});
