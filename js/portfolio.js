//le constructor pou chaque card du portfolio
class Card {
    constructor(card) {
        this.id = card.id;
        this.title = card.title;
        this.attachment = card.attachment;
        this.object = card.object;
        this.link = card.link;
        this.code = card.code;
        this.alt = card.alt;
    }

    displayCards() {
        return `
            <div class="portfolio-card" data-id="${this.id}">
                <a href="#">
                    <img class="portfolio-img" src="${this.attachment}" alt="${this.alt}" />
                    <h3 class="portfolio-title">${this.title}</h3>
                </a>
                <div class="portfolio-hover hidden">
                    <h4 class="portfolio-title-hover">${this.title}</h4>
                    <p class="portfolio-paragraphe-hover">${this.object}</p>
                    <span class="portfolio-span-hover">${this.code}</span>
                    <a class="portfolio-link-hover" href="${this.link}">⭐ Découvrir ⭐</a>
                </div>
            </div>
        `;
    }
}

const portfolio = document.getElementById('portfolio');

// je boucle sur le tableau website.js
website.forEach(ele => {
    const card = new Card(ele);
    portfolio.insertAdjacentHTML('beforeend', card.displayCards());
    
    const portfolioCard = document.querySelector(`.portfolio-card[data-id='${ele.id}']`);
    const portfolioHover = portfolioCard.querySelector(`.portfolio-hover`);
    const portfolioImg = portfolioCard.querySelector(`.portfolio-img`);
    const portfolioTitle = portfolioCard.querySelector(`.portfolio-title`);
// lors du survol de la card    
    portfolioCard.addEventListener('mouseenter', (e) => {
        portfolioHover.classList.remove('hidden');
        portfolioImg.style.visibility = "hidden";
        portfolioTitle.style.visibility= "hidden"

    });
// quand on ne survole plus la card
    portfolioCard.addEventListener('mouseleave', (e) => {
        portfolioHover.classList.add('hidden');
        portfolioImg.style.visibility = "visible";
        portfolioTitle.style.visibility= "visible"
    })
});