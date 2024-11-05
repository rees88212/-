//Adds cooldown to the search survey button
//and removes it after a given period
function triggerCooldown(element) {
    element.classList.add("disabled");
    setTimeout(() => {
        element.classList.remove("disabled");
    }, 2000);
}

//Appends Mutiple events to the search survey button
function appendEventsToCooldown() {
    const target = document.querySelector(".mobrog-v1-home-surveys-search-link.puprple_btn2");

    if(!target) { return false; }

    //All browsers - Middle click
    target.addEventListener("auxclick", (e) => {
        if (e.button === 1) {
            triggerCooldown(target);
        }
    });

    //All browsers - Left click
    target.addEventListener("click", (e) => {
        triggerCooldown(target);
    });
}

appendEventsToCooldown();