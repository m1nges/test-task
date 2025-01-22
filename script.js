//Search button logic
function searchToggler() {
  const searchButton = document.querySelector('.nav__search-button_disabled');
  const searchForm = document.querySelector('.search-form');
  const closeSearchField = document.querySelector('.close-search-btn_disabled');
  const navLinks = document.querySelectorAll('.nav-links__item');
  if (window.innerWidth <= 1600 && window.innerWidth > 1153) {
    searchButton.style.display = 'flex';
    searchForm.style.opacity = '0';
    searchForm.style.position = 'absolute';
    searchButton.addEventListener('click', function () {
      searchForm.style.opacity = '1';
      searchForm.style.position = 'relative';
      searchForm.style.top = '0';
      searchButton.style.display = 'none';
      navLinks[2].style.margin = '0 10px 0 0';
    });
    closeSearchField.addEventListener('click', function () {
      searchButton.style.display = 'flex';
      searchForm.style.opacity = '0';
      searchForm.style.position = 'absolute';
      searchForm.style.top = '-300px';
      navLinks[2].style.margin = '';
    })
  }
  else if (window.innerWidth > 1600){
    searchButton.style.display = 'none';
    searchForm.style.display = 'flex';
    searchForm.style.opacity = '1';
    searchForm.style.position = 'relative';
  }
  if (window.innerWidth < 1153) {
    searchButton.style.display = 'none';
  }
}

searchToggler();
window.addEventListener('resize', searchToggler);


//Burger menu logic
const menu = document.querySelector('.nav-burger-menu');
menu.addEventListener("mouseenter", () => {
  document.getElementById("menu__first-line").style.transform = "rotate(45deg)";
  document.getElementById("menu__first-line").style.top = "12px";
  document.getElementById("menu__second-line").style.transform = "rotate(-45deg)";
  document.getElementById("menu__second-line").style.top = "12px";
  document.getElementById("menu__third-line").style.display = "none";
  document.getElementById("menu__pages").style.opacity = "1";
  document.getElementById("menu__pages").style.top = "0";
});
menu.addEventListener("mouseleave", () => {
  document.getElementById("menu__first-line").style.transform = "rotate(0deg)";
  document.getElementById("menu__first-line").style.top = "0px";
  document.getElementById("menu__second-line").style.transform = "rotate(0deg)";
  document.getElementById("menu__second-line").style.top = "8px";
  document.getElementById("menu__third-line").style.display = "block";
  document.getElementById("menu__pages").style.opacity = "0";
  document.getElementById("menu__pages").style.top = "-2000px";
});

// For mobile click menu
menu.addEventListener("click", () => {
  document.getElementById("menu__first-line").style.transform = "rotate(45deg)";
  document.getElementById("menu__first-line").style.top = "12px";
  document.getElementById("menu__second-line").style.transform = "rotate(-45deg)";
  document.getElementById("menu__second-line").style.top = "12px";
  document.getElementById("menu__third-line").style.display = "none";
  document.getElementById("menu__pages").style.opacity = "1";
  document.getElementById("menu__pages").style.top = "0";
});