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
            </div>
        `;
    }

    hoverCards() {
        return `
            <div class="portfolio-hover hidden" data-id="${this.id}">
                <h4 class="portfolio-title-hover">${this.title}</h4>
                <p class="portfolio-paragraphe-hover">${this.object}</p>
                <span class="portfolio-span-hover">${this.code}</span>
                <a class="portfolio-link-hover" href="${this.link}">⭐ Découvrir ⭐</a>
            </div>
        `;
    }
}

const portfolio = document.getElementById('portfolio');

website.forEach(ele => {
    const card = new Card(ele);
    portfolio.insertAdjacentHTML('beforeend', card.displayCards());
    portfolio.insertAdjacentHTML('beforeend', card.hoverCards());

    const portfolioCard = document.querySelector(`.portfolio-card[data-id='${ele.id}']`);
    const portfolioHover = document.querySelector(`.portfolio-hover[data-id='${ele.id}']`);

    console.log(portfolioCard, portfolioHover);

    portfolioCard.addEventListener('mouseenter', (e) => {
        portfolioHover.classList.remove('hidden');
    });

    portfolioCard.addEventListener('mouseleave', (e) => {
        portfolioHover.classList.add('hidden');
    })
});









