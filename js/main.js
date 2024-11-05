//Removes duplicate currency text from string
//Specifically made for amount on hot survey row
function removeDuplicateCurrencyString() {
    const target = document.getElementsByClassName("hot-survey-amount")[0];

    if(!target) { return false; }
    const targetText = target.innerText;
    const regex = /[A-Za-z]+/g; //Gets all words
    const currenyString = (targetText.match(regex))[0];
    const result = targetText.split(`${currenyString}`).join("").concat(` ${currenyString}`);

    target.innerText = result;
}


//Ads a title to the Ads iframe for better SEO score
function appendTitleOnAdsIframe() {
    const adContainer = document.querySelector(".adsbygoogle > div > iframe");
    if(!adContainer) { return false; }
    adContainer.setAttribute("title", "Advertisement");
}

//Toggles open and close state of accordian widgets
function collapseSiblingPanelAccordian () {
    if(this.nextElementSibling) {
        if(this.nextElementSibling.classList.contains("collapse")) {
            this.nextElementSibling.classList.remove("collapse");
            this.classList.add("open");
        } else {
            this.nextElementSibling.classList.add("collapse");
            this.classList.remove("open");
        }
    }
}

//Toggles open and close state of voucher section
function toggleVoucherSection() {
    const container = document.querySelector(".mobrog-2-RedeemRewards-grid-container .mobrog-v1-RedeemRewards-payout-vouchers");
    let actionElem;

    if (container) {
        actionElem = container.querySelector(".mobrog-2-RedeemRewards-grid-container .mobrog-v1-RedeemRewards-payout-vouchers-title");

        if(actionElem) {
            actionElem.addEventListener("click", () => {
                if(container.classList.contains("vouchers-visible")) {
                    container.classList.remove("vouchers-visible");
                } else {
                    container.classList.add("vouchers-visible");
                }
            });
        }
    }
}

//Adds a class to any element when scrolled into viewport
function addClassOnScroll() {
    let target = document.querySelectorAll(".animate");
    let windowHeight = window.innerHeight;
    let leeway = 250;
    let elementTop;
    let i;

    for (i = 0; i < target.length; i += 1) {
        elementTop = target[i].getBoundingClientRect().top;

        if (elementTop < (windowHeight - (elementTop + leeway))) {
            target[i].classList.add("reveal");
        }
    }
}

//Prevents default function when progress stickers is clicked on user profile page
function onProfileProgressClick() {
    const progressStickers = document.getElementsByClassName("profile-section-progress");
    for (let i = 0; i < progressStickers.length; i++) {
        const element = progressStickers[i];

        element.addEventListener("click", (e) => {
            e.preventDefault();
        });
    }
}

//V1
//Change img source to that of the corresponding country of the clicked button
function displayCorrespondingCountry () {
    const image = document.querySelector(".supported-countries-image > img");
    const buttons = document.querySelectorAll(".country-buttons > .button-group > button");
    const coutryName = this.getAttribute("data-country-button");

    const removeActive = () => {
        for(let i = 0; i < buttons.length; i += 1) {
            if(buttons[i].classList.contains("active")) {
                buttons[i].classList.remove("active");
            }
        }
    }

    if(!this.classList.contains("active")) {
        removeActive();
        this.classList.add("active");
        image.src = `https://internal.mobrog.com/assets/mobrog2/img/maps/${coutryName}-map-about-us.webp`;
    }
}

function displayCorrespondingCountry () {
    const image = document.querySelector("#widget-one-image > img");
    const buttons = document.querySelectorAll(".country-buttons > .button-group > button");
    const coutryName = this.getAttribute("data-country-button");

    const removeActive = () => {
        for(let i = 0; i < buttons.length; i += 1) {
            if(buttons[i].classList.contains("active")) {
                buttons[i].classList.remove("active");
            }
        }
    }

    if(!this.classList.contains("active")) {
        removeActive();
        this.classList.add("active");
        image.src = `https://internal.mobrog.com/assets/mobrog2/img/maps/${coutryName}-map-about-us.webp`;
    }
}

function changeRegistrationLink() {
    const registerbuttonBottom = document.getElementsByClassName("register-button-bottom")[0];
    const registerbuttonMain = document.getElementsByClassName("register-button-main")[0];

    if(registerbuttonBottom && registerbuttonMain) {
        const targetLink = registerbuttonBottom.href;
        registerbuttonMain.href =  targetLink;
    }
}

function appendLinkToAppBanner() {
    const banner = document.getElementById("app-banner-link");
    const playStoreElem = document.getElementsByClassName("google-play-store-link-footer")[0];
    const appStoreLinkElem = document.getElementsByClassName("app-store-link-footer")[0];

    if(!banner) { return false; }

    if(!playStoreElem || !appStoreLinkElem) { return false; }

    if(!deviceIsMobile()) {
        banner.href = "javascript:void(0);";
    } else {
        if(deviceIsMobile("iOS")) {
            banner.href = appStoreLinkElem.href;
        } else if(deviceIsMobile("android")) {
            banner.href = playStoreElem.href;
        }
    }
}

initClickEventOnElements(".mobrog-2-main-achievements-container .panel-heading", collapseSiblingPanelAccordian);
initClickEventOnElements(".accordion-widget .accordion-heading", collapseSiblingPanelAccordian);
initClickEventOnElements(".country-buttons > .button-group > button", displayCorrespondingCountry);

toggleVoucherSection();
onProfileProgressClick();

removeDuplicateCurrencyString();

// AB testing - Changing registration link in banner section
// Comment-out changeRegistrationLink() function below when AB testing
changeRegistrationLink();

/*Redirect to appropriate store link on click*/
appendLinkToAppBanner();

//Delayed by 2 seconds to allow the iframe to load
setTimeout(() => {
    appendTitleOnAdsIframe()
}, 2000);

window.addEventListener("scroll", addClassOnScroll);