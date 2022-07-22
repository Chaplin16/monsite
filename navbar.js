const tabs = [...document.querySelectorAll('.tab')];

tabs.forEach(tab => tab.addEventListener('click', tabsAnimation));

function tabsAnimation(e) {

    const indexToRemove = tabs.findIndex(tab => tab.classList.contains('active-tab'));

    tabs[indexToRemove].classList.remove('active-tab');

    const indexToShow = tabs.indexOf(e.target);

    tabs[indexToShow].classList.add('active-tab');
}
