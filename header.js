var header = {
    logo: "https://assets.website-files.com/559f85c38bde14cf4b3723cf/559f87ea0ddfe0783061dffb_Icon-coffee.png",
    logoTitle: "CSS 3 Making ",
    logoSubtitle: "CSS3 Generation Tool",
    menu: {
        home: "Home",
        borderRadius: "Border Radius",
        border: "Border",
        boxShadow: "Box Shadow",
        textShadow: "Text Shadow",
        button: "Button",
        fontFace: "Font Face",
        gradient: "Gradient",
        transition: "Transition",
        colorPalets: "Color Palets"
    }
}

class MyHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <header class="header">
                <nav class="header__nav">
                    <a href="/" class="header__logo">
                        <img src="${header.logo}" alt="${header.logoSubtitle}">
                        <h1 class="header__logo__text">${header.logoTitle}</h1>
                        <h2 class="header__logo__subtitle">${header.logoSubtitle}</h2>
                    </a>
                    <div class="divider"></div>
                    <ul class="header__menu">
                        <li class="header__menu__item">
                            <a href="/" class="header__menu__link active">${header.menu.home}</a>
                        </li>
                        <li class="header__menu__item">
                            <a href="border-radius.html" class="header__menu__link">${header.menu.borderRadius}</a>
                        </li>
                        <li class="header__menu__item">
                            <a href="border.html" class="header__menu__link">${header.menu.border}</a>
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

//active class
var navItem = document.querySelectorAll(".header__menu__link");
    navItem.forEach(e => {
    e.addEventListener("click", function(){
        navItem.forEach(nav=>nav.classList.remove("active"))
        this.classList.add("active");
    })
});