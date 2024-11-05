let selectedOptions = [];

function removeElemFromArray(elem) {
    const index = selectedOptions.indexOf(elem);
    if (index > -1) {
        selectedOptions.splice(index, 1);
    }
}

  function delete_cookie(name) {
    var realhostvaldel = gethost();
    document.cookie = name +'=;domain=.'+realhostvaldel+';path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }

  function cookie_ui_off() {
    toggleCookiePopupDisplay({
        targetContainerSelector: getDisplayedPopupSelector(),
        currentContainer: ""
    }, true);
  }

  function cookie_ui_on() {
    const firstPopup = document.getElementsByClassName("mobrog-2-privacy-manager-first")[0];
    if(firstPopup && firstPopup.classList.contains("display-none")) {
        firstPopup.classList.remove("display-none");
    }
  }

  function cookie_ui_reset() {

        delete_cookie("settings");

        // delete all custom cookies
        delete_cookie("google");
        delete_cookie("google-ads");
        delete_cookie("bing");
        delete_cookie("microsoft-clarity");
        delete_cookie("trustpilot");
        /*Google recaptcha commented out on 08.08.2024
        delete_cookie("google-recaptcha");
        */

        toggleGtagAccess("denied", "all");

        cookie_ui_on();
  }


//// Specific

// 1.  Listeners: 
const checkbox_googleAds = document.getElementById('google-ads');
if(checkbox_googleAds) {
    checkbox_googleAds.addEventListener('change', (event) => {
        if (event.currentTarget && event.currentTarget.checked) {
            set_cookie('google-ads', 'on');
            selectedOptions.push("google-ads");
        } else {
            delete_cookie('google-ads');
            removeElemFromArray("google-ads");
        }
    });
}

const checkbox_google = document.getElementById('google-analytics');
if(checkbox_google) {
    checkbox_google.addEventListener('change', (event) => {
        if (event.currentTarget && event.currentTarget.checked) {
            set_cookie('google', 'on');
        } else {
            delete_cookie('google');
        }
    });
}

const checkbox_bing = document.getElementById('microsoft-advt');
if(checkbox_bing) {
    checkbox_bing.addEventListener('change', (event) => {
        if (event.currentTarget && event.currentTarget.checked) {
            set_cookie('bing', 'on');
        } else {
            delete_cookie('bing');
        }
    });
}

const checkbox_trustpilot = document.getElementById('trustpilot-reviews');
if(checkbox_trustpilot) {
    checkbox_trustpilot.addEventListener('change', (event) => {
        if (event.currentTarget && event.currentTarget.checked) {
            set_cookie('trustpilot', 'on');
        } else {
            delete_cookie('trustpilot');
        }
    });
}

/*Google recaptcha commented out on 02.08.2024
const checkbox_googlerecapthca = document.getElementById("google-recaptcha");
if(checkbox_googlerecapthca) {
    checkbox_googlerecapthca.addEventListener('change', (event) => {
    if (event.currentTarget && event.currentTarget.checked) {
        set_cookie('google-recaptcha', 'on');
    } else {
        delete_cookie('google-recaptcha');
        removeElemFromArray("google-recaptcha");
    }
    });
}
*/

const checkbox_microsoftClarity = document.getElementById("microsoft-clarity");
if(checkbox_microsoftClarity) {
    checkbox_microsoftClarity.addEventListener('change', (event) => {
        if (event.currentTarget && event.currentTarget.checked) {
            set_cookie("microsoft-clarity", "on");
        } else {
            delete_cookie("microsoft-clarity");
            removeElemFromArray("microsoft-clarity");
        }
    });
}


// 2. Cookie setters: 


function activate_selected() {

    var setting_googleAds = getCookie("google-ads");
    if (setting_googleAds == "on") {
        // Load gtag.js script.
        let gtagScript = document.createElement('script');
        gtagScript.async = true;
        gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-KP1FF31NN5';

        let firstScript = document.getElementsByTagName('script')[0];
        firstScript.parentNode.insertBefore(gtagScript,firstScript);

        loadGoogleAd();
    }

    var setting_google = getCookie("google");
    if (setting_google == "on") {
        // Google Analytics
        var googleanaly = document.createElement('script');
        googleanaly.src = 'https://www.googletagmanager.com/gtag/js?id=UA-5880615-18';
        googleanaly.async = true;
        document.head.appendChild(googleanaly);

        var googleanaly_initi = document.createElement('script');
        googleanaly_initi.src = 'https://internal.mobrog.com/assets/js/ga.js';
        googleanaly_initi.setAttribute("type", "text/javascript");
        document.head.appendChild(googleanaly_initi);
        // End of Google Analytics

        console.log('Google Analytics consent activated.');
        
    }

    var setting_bing = getCookie("bing");
    if (setting_bing == "on") {
        
        // Activate bing

        // UET
        var bing_uet = document.createElement('script');
        bing_uet.src = 'https://internal.mobrog.com/assets/js/bing-uetc.js';
        bing_uet.setAttribute("type", "text/javascript");
        document.head.appendChild(bing_uet);
        // End of UET

        console.log('Bing consent activated.');
    }

    var setting_trustpilot = getCookie("trustpilot");
    //TP code commented out for now to avoid console log errors
    //Put it back when ready to test + set live
    if (setting_trustpilot == "on") {
        //Only call function if no stored reviews are found or data changes
        //Append reviews after promise has passed
        retrieveReviews().then((result) => {
            appendReviews(result, true);
        });

        console.log('Trustpilot consent activated.');
    } else {
        appendReviews(false);
    }

    /*Google recaptcha commented out on 02.08.2024
    var setting_googlerecaptcha = getCookie("google-recaptcha");
    const captchaElement = document.getElementsByClassName("g-recaptcha")[0];
    if(captchaElement) {
        if (setting_googlerecaptcha == "on") {
            captchaElement.removeAttribute("style");
        } else {
            captchaElement.style.display = "none";
        }
    }
    */

    var setting_msClarity = getCookie("microsoft-clarity");
    const scriptHolder = document.querySelector("[data-script-id='ms-clarity-script']");
    if(scriptHolder) {
        if (setting_msClarity == "on") {
            scriptHolder.src = "https://internal.mobrog.com/assets/mobrog2/js/privacy-manager/ms-clarity-setup.js"
            console.log('MS Clarity consent activated.');
        } else {
            scriptHolder.removeAttribute("src");
        }
    }
}

// 3.  Initiate: 
function deny_all() {
    set_cookie('settings', 'on');

    cookie_ui_off();

    delete_cookie('google-ads');
    delete_cookie('google');
    /*Google recaptcha commented out on 02.08.2024
    delete_cookie('google-recaptcha');
    */
    delete_cookie("microsoft-clarity");
    delete_cookie('bing');
    delete_cookie('trustpilot');

    toggleGtagAccess("denied", "all");

    logfeature("pm_rejectAll_hits");
}

function accept_selected() {
    toggleGtagAccess("denied", "all");

    set_cookie('settings', 'on');
    activate_selected();

    if(getCookie("google")) {
        toggleGtagAccess("granted", "google");
    }

    if(getCookie("google-ads")) {
        toggleGtagAccess("granted", "google-ads");
    }

    cookie_ui_off();

    if(selectedOptions.includes("google-ads")) {
        logfeature("pm_acceptedGoogleAdsense_hits");
    }

}

function accept_all() {
    set_cookie('settings', 'on');

    // set all custom cookies
    if(!getCookie("appview")) {
        set_cookie('google-ads', 'on'); //Google Adsense
        set_cookie('bing', 'on');
        set_cookie('trustpilot', 'on');
        set_cookie("microsoft-clarity", "on");
        /*Google recaptcha commented out on 02.08.2024
        set_cookie('google-recaptcha', 'on');
        */
    }

    set_cookie('google', 'on'); //Google Analytics

    toggleGtagAccess("granted", "all");

    activate_selected();

    cookie_ui_off();

    logfeature("pm_acceptAll_hits");
}



// Finalize for returning users:
var setting_set = getCookie("settings");
if (setting_set == "on") {

    if(getCookie("google") && getCookie("google-ads")) {
        toggleGtagAccess("granted", "all");
    } else if(getCookie("google-ads")) {
        toggleGtagAccess("granted", "google-ads");
    } else if(getCookie("google")) {
        toggleGtagAccess("granted", "google");
    }

    activate_selected();

    cookie_ui_off();
} else {
    // First visitor tasks
    // End of first visitor tasks
    if (!document.getElementById("cookie-policy-disabler")) {
        cookie_ui_reset();
    }
}


// Additions
function loadGoogleAd() {
    const autogad = document.getElementById("adt2container");

    if (autogad) {
        var elementedg = document.querySelectorAll('[mobrog-el-type="adt2"]')[0];
        var elementedg_id = elementedg.getAttribute('id');

        if (elementedg_id == 'portalpage') {
            // Load the Google Ad dependencies
            var scriptgad = document.createElement('script');
            scriptgad.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2415598056582493";
            scriptgad.crossOrigin = "anonymous";
            document.head.appendChild(scriptgad);

            //Do not add a new slot if one is already present
            if(elementedg.getElementsByTagName("ins")[0]) { return false; }

            // Wait for the dependencies to load before placing the ad
            scriptgad.onload = function () {

                // Define the ad slot
                var adSlot = document.createElement('ins');
                adSlot.className = "adsbygoogle";
                adSlot.style.display = "block";
                adSlot.setAttribute('data-ad-client', 'ca-pub-2415598056582493');

                /*Append appropriate ad slot*/
                if(deviceIsMobile()) {
                    if(getCookie("appview")) {
                        /*NEU - APP*/
                        adSlot.setAttribute('data-ad-slot', '7257183349');
                    } else {
                        /*NEU - MOBILE WEB*/
                        adSlot.setAttribute('data-ad-slot', '5341466444');
                    }
                } else {
                    /*NEU - PORTAL*/
                    adSlot.setAttribute('data-ad-slot', '3695066723');
                }

                adSlot.setAttribute('data-ad-format', 'auto');
                adSlot.setAttribute('data-full-width-responsive', 'true');

                // Place the ad in the specified div element
                var adDiv = document.querySelector('div[mobrog-el-type="adt2"]');
                if (!adDiv) { return false; }
                adDiv.appendChild(adSlot);

                // Initialize the ad
                (adsbygoogle = window.adsbygoogle || []).push({});

            }
        } else if (elementedg_id == 'startsurvey') {
            // Load the Google Ad dependencies
            var scriptgad = document.createElement('script');
            scriptgad.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2415598056582493";
            scriptgad.crossOrigin = "anonymous";
            document.head.appendChild(scriptgad);

            // Wait for the dependencies to load before placing the ad
            scriptgad.onload = function () {

                // Define the ad slot
                var adSlot = document.createElement('ins');
                adSlot.className = "adsbygoogle";
                adSlot.style.display = "block";
                adSlot.setAttribute('data-ad-client', 'ca-pub-2415598056582493');
                adSlot.setAttribute('data-ad-slot', '5351725339');

                adSlot.setAttribute('data-ad-format', 'auto');
                adSlot.setAttribute('data-full-width-responsive', 'true');

                // Place the ad in the specified div element
                var adDiv = document.querySelector('div[mobrog-el-type="adt2"]');
                if (!adDiv) { return false; }
                adDiv.appendChild(adSlot);

                // Initialize the ad
                (adsbygoogle = window.adsbygoogle || []).push({});

            }
        } else if (elementedg_id == 'endpage') {
            // Load the Google Ad dependencies
            var scriptgad = document.createElement('script');
            scriptgad.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2415598056582493";
            scriptgad.crossOrigin = "anonymous";
            document.head.appendChild(scriptgad);

            //Do not add a new slot if one is already present
            if(elementedg.getElementsByTagName("ins")[0]) { return false; }

            // Wait for the dependencies to load before placing the ad
            scriptgad.onload = function () {

                // Define the ad slot
                var adSlot = document.createElement('ins');
                adSlot.className = "adsbygoogle";
                adSlot.style.display = "block";
                adSlot.setAttribute('data-ad-client', 'ca-pub-2415598056582493');

                /*Append appropriate ad slot*/
                if(deviceIsMobile()) {
                    if(getCookie("appview")) {
                        /*NEU - APP*/
                        adSlot.setAttribute('data-ad-slot', '7751211204');
                    } else {
                        /*NEU - MOBILE WEB*/
                        adSlot.setAttribute('data-ad-slot', '2821382372');
                    }
                } else {
                    /*NEU - ENDING*/
                    adSlot.setAttribute('data-ad-slot', '5734868713');
                }

                adSlot.setAttribute('data-ad-format', 'auto');
                adSlot.setAttribute('data-full-width-responsive', 'true');

                // Place the ad in the specified div element
                var adDiv = document.querySelector('div[mobrog-el-type="adt2"]');
                if (!adDiv) { return false; }
                adDiv.appendChild(adSlot);

                // Initialize the ad
                (adsbygoogle = window.adsbygoogle || []).push({});

            }
        }
    } else {
        console.log('Google ad does not exist.');
    }

    console.log('Google Ad consent activated.');
}

function toggleGtagAccess(permission, type) {
    localStorage.setItem("consentGranted",
        (permission === "granted" ? "true" : "false")
    );

    if(type === "all") {
        gtag('consent', 'update', {
            ad_user_data: permission,
            ad_personalization: permission,
            ad_storage: permission,
            analytics_storage: permission
        });

    } else if(type === "google-ads") {
        gtag('consent', 'update', {
            ad_user_data: permission,
            ad_personalization: permission,
            ad_storage: permission
        });
    } else if(type === "google") {
        gtag('consent', 'update', {
            analytics_storage: permission
        });
    } else { /*Do nothing*/ }

}