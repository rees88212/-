const mobrog_v1_languageSelector = document.querySelector(".mobrog-v1-selected-language");
const mobrog_v1_listLanguages = document.querySelectorAll(".mobrog-v1-all-languages-item");
const mobrog_v1_LanguagesDiv = document.querySelector(".mobrog-v1-all-languages-list");


if (document.querySelector(".mobrog-v1-footer-topper-link")) {
    document.querySelector(".mobrog-v1-footer-topper-link").addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })
}




var dropOutCheck = 1;
window.addEventListener('pointerup', function (event) {

    if (event.target.parentNode != document.getElementById("mobrog-v1-myDropdown")) {
        mobrog_v1_LanguagesDiv.classList.add("mobrog-v1-language-selector-displayNone");
    }

    if (event.target.parentNode === document.querySelector(".mobrog-v1-selected-language-container-div")) {
        dropOutCheck++;

        if (dropOutCheck === 2 && mobrog_v1_LanguagesDiv.classList.contains("mobrog-v1-language-selector-displayNone")) {
            mobrog_v1_LanguagesDiv.classList.remove("mobrog-v1-language-selector-displayNone");

        } else {
            mobrog_v1_LanguagesDiv.classList.add("mobrog-v1-language-selector-displayNone");
            dropOutCheck = 1;
        }
    } else {
        dropOutCheck = 1;
    }
});









// Select links
mobrog_v1_listLanguages.forEach(function (language) {

    language.addEventListener('click', function () {

        var selectedLang = language.innerHTML;
        if (localStorage.getItem('lastSelectedLanguage') != null) {
            mobrog_v1_languageSelector.innerHTML = localStorage.getItem('lastSelectedLanguage');
        }

        localStorage.setItem('lastSelectedLanguage', selectedLang);

    })

})