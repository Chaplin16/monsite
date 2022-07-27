const tabs = [...document.querySelectorAll('.tab')];

tabs.forEach(tab => tab.addEventListener('click', tabsAnimation));

function tabsAnimation(e) {

    const indexToRemove = tabs.findIndex(tab => tab.classList.contains('active-tab'));

    tabs[indexToRemove].classList.remove('active-tab');

    const indexToShow = tabs.indexOf(e.target);

    tabs[indexToShow].classList.add('active-tab');
}

// essai pour cacher/montrer button
let nav = document.getElementById('nav')
window.addEventListener("scroll", () => {
    if (window.scrollY > 600) {
      nav.classList.add("fixed");
    } else {
      nav.classList.remove("fixed");
    }
  });