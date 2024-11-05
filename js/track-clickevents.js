function getLandingPageVariantLetter() {
    const registerBtnBottom = document.getElementsByClassName("register-button-bottom")[0];
    if(!registerBtnBottom) { return false; }
    const registerPageUrl = registerBtnBottom.href;
    const urlObj = new URL(registerPageUrl);
    const params = new URLSearchParams(urlObj.search);
    const abTestGroupValue = params.get('a_b_test_group');
    const abTestGroupLetter = (
        abTestGroupValue == "1"
        ? "A"
        : "B"
    );

     return abTestGroupLetter;
}

function logTargetClick(tag) {
    const form = new FormData();

    const pageVariantLetter = getLandingPageVariantLetter();

    if(!pageVariantLetter) {
        form.append("tag", `${tag}`);
    } else {
        form.append("tag", `Landing_page_${pageVariantLetter}_${tag}`);
    }

    const options = {
        method: 'POST'
    };

    options.body = form;
    fetch('https://internal.mobrog.com/stats/click_stats.php', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}

function languageSelectorTrackingLogic(targetTag) {
    const languageSelectorContainer = (
        document.getElementsByClassName("mobrog-v1-all-languages-list")[0]
    );
    if(!languageSelectorContainer) { return false; }

    if(!languageSelectorContainer.classList.contains("mobrog-v1-language-selector-displayNone")) {
        logTargetClick(targetTag);
    }
}

function appendClickEventToTargets() {
    const logTargets = [
        "about_us_top_nav",
        "how_does_it_work_top_nav",
        "help_and_support_top_nav",
        "login_top_nav",
        "register_header",
        "register_bottom",
        "google_play_store_footer",
        "app_store_footer",
        "language_selector_footer"
    ]

    for (let i = 0; i < logTargets.length; i++) {
        const targetTag = logTargets[i];
        const targetElement = document.querySelector(`[data-tracking-key=${targetTag}]`);

        if(targetElement) {
            targetElement.addEventListener("click", () => {
                if(targetTag === "language_selector_footer") {
                    languageSelectorTrackingLogic(targetTag);
                } else {
                    logTargetClick(targetTag);
                }
            });
        }
    }
}

document.addEventListener("DOMContentLoaded", appendClickEventToTargets);