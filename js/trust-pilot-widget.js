//Global vairables
const reviewContainer = document.getElementsByClassName("reviews-container")[0];
let positionLeft = 0;

const staticReviews = [
    {
        "author": "cpboy",
        "stars": 5,
        "title": "legit and most helpful online work…",
        "text": "legit and most helpful online work thank you so much for the opportunity God Bless and more power MORBG"
    },
    {
        "author": "MRS G M HENSON",
        "stars": 5,
        "title": "Prompt payment",
        "text": "You don't need much to qualify for a payout and the payment is very quick."
    },
    {
        "author": "Leonie Mirmikidis",
        "stars": 5,
        "title": "great survey company",
        "text": "doing business is easy and the rewards are fair and easy to access"
    },
    {
        "author": "JX",
        "stars": 5,
        "title": "Just got my first payout via PayPal",
        "text": "Just got my first payout via PayPal. This company is legit."
    },
    {
        "author": "Quentin Xavier Viljoen",
        "stars": 5,
        "title": "The surveys are interesting and…",
        "text": "The surveys are interesting and completely make sense, although (at times0 they become a bit less regular then usual, but , the rewards are worth it."
    },
    {
        "author": "marit helene",
        "stars": 5,
        "title": "My meaning of mobrog",
        "text": "Mobrog is a very good site if you want to earn a little money.My experience is good"
    },
    {
        "author": "Thapelo",
        "stars": 5,
        "title": "It's been great working with you guys",
        "text": "It's been great working with you guys, quick pay out, more surveys to get to the payout limit. Thank you and thank you again guys. keep doing the great work"
    },
    {
        "author": "Dineo Dhee",
        "stars": 5,
        "title": "MOBROG is the best app if you wanna…",
        "text": "MOBROG is the best app if you wanna make money online and you must be consinstant with with the website its not always that you'll make alot of money from the website but i recomend that if you wanna make money its the best site"
    }
];

// @ts-ignore
async function retrieveReviews() {
    const lang = (
        document.getElementsByTagName('html')[0].getAttribute('lang')
        ? document.getElementsByTagName('html')[0].getAttribute('lang')
        : "en" //Default to English
    );
    const sessionStorageLang =  JSON.parse(sessionStorage.getItem("page-lang"));
    const URL = `https://api.trustpilot.com/v1/business-units/4f143d2f0000640005124a6c/reviews?language=${lang}&stars=5&page=1&perPage=8`;
    const API_KEY = "XfKU5FiAV1GIZaXbMr4Ch5Rivnumv3V0";

    try {
        //Call API if it hasnt been called before hence sessionStorage reviews is empty or
        //sessionStorage reviews is present but page language is different from initial page language
        if(
            // @ts-ignore
            JSON.parse(sessionStorage.getItem("reviews")) == 0 ||
            (
                // @ts-ignore
                JSON.parse(sessionStorage.getItem("reviews")) != 0 &&
                lang !== sessionStorageLang
            )
        ) {
        const result = await fetch(URL, {
            headers: {
                "apikey": API_KEY,
                "Content-Type": "application/json",
            }
        }).then((fetchedData) => fetchedData.json());

        sessionStorage.setItem("reviews", JSON.stringify(result));
        sessionStorage.setItem("page-lang", JSON.stringify(document.getElementsByTagName('html')[0].getAttribute('lang')));

        return result;

        } else {
            // @ts-ignore
            return JSON.parse(sessionStorage.getItem("reviews"));
        }
    } catch (error) {
        console.log(error);
    }
}

function shortenText(text, maxLength) {
    const splitText = text.match(new RegExp(`.{1,${maxLength}}`, 'g'))[0];
    const ellipses = "...";
    const result = (
        text.length > maxLength
        ? splitText.concat(ellipses)
        : text
    );
    return result;
}

//Using Trustpilot API
function appendReviews(reviews, consent) {
    if(reviewContainer){
        if(consent) {
            reviewContainer.innerHTML = "";
            reviews.reviews.forEach((review) => {
                reviewContainer.innerHTML += `
                    <li class="trust-pilot-review">
                        <h2>${review.title}</h2>
                        <p>${shortenText(review.text, 250)}</p>
                        <div class="author-section">
                            <p>${review.consumer.displayName}</p>
                            <img src='https://internal.mobrog.com/assets/trustpilot-widget/img/trust-pilot-${review.stars}-star.webp'
                            alt="stars images" width="110" height="20">
                        </div>
                    </li>`
            });
        } else {
            reviewContainer.innerHTML = "";
            staticReviews.forEach((review) => {
                reviewContainer.innerHTML += `
                    <li class="trust-pilot-review">
                        <h2>${review.title}</h2>
                        <p>${shortenText(review.text, 250)}</p>
                        <div class="author-section">
                            <p>${review.author}</p>
                            <img src='https://internal.mobrog.com/assets/trustpilot-widget/img/trust-pilot-${review.stars}-star.webp'
                            alt="stars images" width="110" height="20">
                        </div>
                    </li>`
            });

            sessionStorage.removeItem("reviews");
            sessionStorage.removeItem("page-lang");
        }
    }
}

function scrollReviews(direction) {
    const reviewBox = document.getElementsByClassName("trust-pilot-review")[0];
    const lastReviewBox = document.querySelector(".trust-pilot-review:last-of-type");
    const reviewBoxWidth = getComputedStyle(reviewBox).getPropertyValue("width");
    const reviewContainerGap = getComputedStyle(reviewContainer).getPropertyValue("column-gap");
    const parsedWidth = parseFloat(reviewBoxWidth.split("px")[0]);
    const parsedPadding = parseFloat(reviewContainerGap.split("px")[0]);
    const rightButton = document.querySelector("[data-scroll-direction=right]");
    const leftbutton = document.querySelector("[data-scroll-direction=left]");

    let endOfScroll = (
        (
            lastReviewBox &&
            (
                Math.round(lastReviewBox.getBoundingClientRect().right -
                reviewContainer.getBoundingClientRect().right) <= 1
            )
            ? true
            : false
        )
    );

    if(leftbutton && rightButton) {
        if(direction === "right" && !endOfScroll) {
            positionLeft += Math.round(parsedWidth + parsedPadding);
        } else if (direction === "right" && endOfScroll) {
            resetReviews();
        }

        if (direction === "left" && reviewContainer.scrollLeft > 0) {
            positionLeft -= Math.round(parsedWidth + parsedPadding);
        }
    }

    //To ensure it doesnt break when screen size is being changed
    if(reviewContainer.scrollLeft < 0) {
        positionLeft = 0;
    }

    reviewContainer.scrollLeft = positionLeft;
}

function onControlButtonClick() {
    const controls = document.getElementsByClassName("control-button");

    for (let i = 0; i < controls.length; i++) {
        const element = controls[i];
        const scrollDirection = element.getAttribute("data-scroll-direction");
        element.addEventListener("click", function () {
            scrollReviews(scrollDirection);
        });
    }
}

function resetReviews() {
    positionLeft = 0;
    if(reviewContainer) {
        reviewContainer.scrollLeft = positionLeft;
    }
}

//Append click event
onControlButtonClick();

//Reset the slide when window is resized
window.addEventListener("resize", resetReviews);
