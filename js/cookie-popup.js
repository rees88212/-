function getDisplayedPopupSelector() {
    const firstPopupSelector = ".mobrog-2-privacy-manager-first"
    const secondPopupSelector = ".mobrog-2-privacy-manager-second"
    const firstPopup = document.querySelector(firstPopupSelector);
    const SecondPopup = document.querySelector(secondPopupSelector);

    if(firstPopup && !firstPopup.classList.contains("display-none")) {
        return firstPopupSelector;
    } else if (SecondPopup && !SecondPopup.classList.contains("display-none")) {
        return secondPopupSelector;
    } else {
        return false;
    }
}

//Toggles the display between the target to be displayed
//and the current container which is displayed
function toggleCookiePopupDisplay(
    {targetContainerSelector, currentContainer},
    initalizer
) {
    const target = document.querySelector(targetContainerSelector);

    if(!target) { return false; }

    if(!initalizer) {
        const current = document.querySelector(currentContainer);

        if(
            target && current &&
            target.classList.contains("display-none") &&
            !current.classList.contains("display-none")
        ) {
            target.classList.remove("display-none");
            current.classList.add("display-none");
        }
    } else {
        if(target.classList.contains("display-none")) {
            target.classList.remove("display-none");
        } else {
            target.classList.add("display-none");
        }
    }
}

function unhideFirstSummary() {
    const firstSummary = document.getElementsByClassName("cookie-summary")[0];
    const firstCookieOptionButton = document.getElementsByClassName("option-item")[0];

    if(
        firstSummary && firstCookieOptionButton && 
        firstSummary.classList.contains("display-none") &&
        !firstCookieOptionButton.classList.contains("active-option")
    ) {
        hideAllSummaries();
        firstSummary.classList.remove("display-none");
        firstCookieOptionButton.classList.add("active-option");
    }
}

function hideAllSummaries() {
    const allSummaries = document.getElementsByClassName("cookie-summary");
    const allCookieOptionButtons = document.getElementsByClassName("option-item");

    for (let i = 0; i < allSummaries.length; i += 1) {
        const summary = allSummaries[i];
        const button = allCookieOptionButtons[i]

        if(summary && !summary.classList.contains("display-none")) {
            summary.classList.add("display-none");
            button.classList.remove("active-option");
        }
    }
}

function hideAllDetailedSummaries() {
    const allDetailedSummaries = document.getElementsByClassName("detailed-summary");

    for (let i = 0; i < allDetailedSummaries.length; i += 1) {
        const detailedSummary = allDetailedSummaries[i];
        if(
            detailedSummary &&
            !detailedSummary.classList.contains("display-none")
        ) {
            detailedSummary.classList.add("display-none");
        }
    }
}

function toggleCookieSummaryDisplay(optionButton) {
    const cookieOption = optionButton.getAttribute("data-cookie-option");
    const targetSelector = `[data-cookie-option-summary=${cookieOption}]`
    const targetSummary = document.querySelector(targetSelector);
    const triggerWidth = 500;

    if(!targetSummary) { return false; }

    if(targetSummary.classList.contains("display-none")) {
        hideAllSummaries();
        targetSummary.classList.remove("display-none");
        optionButton.classList.add("active-option");
    } else {
        if(window.innerWidth <= triggerWidth) {
            targetSummary.classList.add("display-none");
            optionButton.classList.remove("active-option");
        }
    }

}

function mobileViewPopup() {
    const triggerWidth = 500;
    if(window.innerWidth <= triggerWidth) {
        hideAllSummaries();
    } else {
        unhideFirstSummary();
    }
}

function displayCookieDetails(detailsButton) {
    const parentContainer = detailsButton.parentElement;
    const cookieOption = parentContainer.getAttribute("data-cookie-option-summary");
    const targetSelector = `[data-detailed-summary=${cookieOption}]`
    const detailedSummary = document.querySelector(targetSelector);

    toggleCookiePopupDisplay({
        targetContainerSelector: ".mobrog-2-detailed-summaries",
        currentContainer: ".mobrog-2-privacy-manager-second"
    }, false);

    if(
        detailedSummary &&
        detailedSummary.classList.contains("display-none")
    ) {
         detailedSummary.classList.remove("display-none")
    }
}

initClickEventOnElements( "#manageCookies", () => {
    toggleCookiePopupDisplay({
        targetContainerSelector: ".mobrog-2-privacy-manager-second",
        currentContainer: ".mobrog-2-privacy-manager-first"
    }, false)
});

initClickEventOnElements( "#back-to-first", () => {
    toggleCookiePopupDisplay({
        targetContainerSelector: ".mobrog-2-privacy-manager-first",
        currentContainer: ".mobrog-2-privacy-manager-second"
    }, false)
});

initClickEventOnElements( "#back-to-second", () => {
    toggleCookiePopupDisplay({
        targetContainerSelector: ".mobrog-2-privacy-manager-second",
        currentContainer: ".mobrog-2-detailed-summaries"
    }, false)

    hideAllDetailedSummaries()
});

initClickEventOnElements( ".option-item", (e) => {
    toggleCookieSummaryDisplay(e.target)
});

initClickEventOnElements(".cookie-more-details", (e) => {
    displayCookieDetails(e.target)
});

mobileViewPopup();
window.addEventListener("resize", mobileViewPopup);