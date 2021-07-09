class MyHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <header class="header">
                <nav class="header__nav">
                    <a href="/" class="header__logo">
                        <img src="https://assets.website-files.com/559f85c38bde14cf4b3723cf/559f87ea0ddfe0783061dffb_Icon-coffee.png" alt="Css Generation Logo">
                        <h1 class="header__logo__text">CSS <span>3</span> Making </h1>
                        <h2 class="header__logo__subtitle">CSS3 Generation Tool</h2>
                    </a>
                    <div class="divider"></div>
                    <ul class="header__menu">
                        <li class="header__menu__item">
                            <a href="/" class="header__menu__link active">Home</a>
                        </li>
                        <li class="header__menu__item">
                            <a href="border-radius.html" class="header__menu__link">Border Radius</a>
                        </li>
                        <li class="header__menu__item">
                            <a href="#" class="header__menu__link">Box Shadow</a>
                        </li>
                        <li class="header__menu__item">
                            <a href="#" class="header__menu__link">Text Shadow</a>
                        </li>
                        <li class="header__menu__item">
                            <a href="#" class="header__menu__link">Button</a>
                        </li>
                        <li class="header__menu__item">
                            <a href="#" class="header__menu__link">Font Face</a>
                        </li>
                        <li class="header__menu__item">
                            <a href="#" class="header__menu__link">Gradient</a>
                        </li>
                        <li class="header__menu__item">
                            <a href="#" class="header__menu__link">Transition</a>
                        </li>
                        <li class="header__menu__item">
                            <a href="#" class="header__menu__link">Color Palets</a>
                        </li>
                    </ul>
                    <div class="divider"></div>
                    <!-- <ul class="header__social">
                        <li><a href=""><img src=""></a></li>
                    </ul> -->
                </nav>
            </header>
        `
    }
}

customElements.define('my-header',MyHeader)

class MyCard extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <figure class="card">
                <img src="../../src/images/border-radius.png" class="card__img">
                <figcaption class="card__caption">
                    <h3 class="card__title satisfy">Border Radius</h3>
                    <p class="card__dis">Experiment with the border-radius property with this generator. See how the radius changes with different options selected.</p>
                    <a href="#" class="card__more">View Generator<span class="card__arrow">&#8594;</span></a>
                </figcaption>
            </figure>
        `
    }
}

customElements.define('my-card', MyCard)