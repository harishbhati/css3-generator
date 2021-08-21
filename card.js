var card = [
    {
        cardImg: "src/images/border-radius.png",
        title: "Border Radius",
        url:"border-radius.html",
        discription: "Experiment with the border-radius property with this generator. See how the radius changes with different options selected.",
    },
    {
        cardImg: "src/images/square-shadow.png",
        title: "Border",
        url:"border.html",
        discription: "creating multipe type of box border using this.",
    },
    {
        cardImg: "src/images/text-height.png",
        title: "Text Shadow",
        discription: "Apply a shadow to text by using this online generator. Multiple shadows can be applied to create different looks for your text.",
    },
    {
        cardImg: "src/images/button.png",
        title: "Button Generator",
        discription: "Generate CSS code for your web buttons with our online CSS button generator. Include shadows, hover effects and more.",
    },
    {
        cardImg: "src/images/font.png",
        title: "@Font Face",
        discription: "Experiment with the border-radius property with this generator. See how the radius changes with different options selected.",
    },
    {
        cardImg: "src/images/gradient.png",
        title: "Gradient Generator",
        discription: "A fun little generator...this online tool will create CSS Gradients Generator.",
    },
    {
        cardImg: "src/images/transition.png",
        title: "Transition Generator",
        discription: "Need help creating a transition. Try our generator to create the perfect transition effect and just copy that is generated.",
    },
    {
        cardImg: "src/images/pantone.png",
        title: "Color Palets",
        discription: "See how different color codes will look with opacity. Enter each value separately to see how different shades look.",
    }
];
// card = JSON.stringify(card);
// card = JSON.parse(card);

//card count add in html
var totalCard = card.length;
var cardCount = document.querySelector('.list__count');
cardCount.innerHTML = totalCard;
var cardData = document.querySelector('.card__list');
cardData.innerHTML = `${card.map(function(card){
    return `
    <div class="card">
        <img class="card__img" src="${card.cardImg}" alt="${card.title}">
        <figcaption class="card__caption">
            <h3>${card.title}</h3>
            <p>${card.discription}</p>
            <a href="${card.url}" class="card__more">View Generator<span class="card__arrow">&#8594;</span></a>
        </figcaption>
    </div>
    `
}).join('')}`;