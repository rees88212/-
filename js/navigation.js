/*Toggle secondary navigation menu. Cases:
- When user clicks on hamburger icon
- When user clicks anywhere on the page other than the
  hamburger icon/its menu content
- When secondary navigation menu is open and logged-in user
  hovers/clicks (depending on device) on avatar icon
- Prevents default events like links from firing while menu is open
*/
function changeAvatarIconState(state) {
    const avatarImg = document.querySelector(".nav-item.has_dropdown .nav-link > img");
    const drpBtn = document.querySelector(".nav-item.has_dropdown > .drp_btn");

    if (avatarImg && drpBtn) {
        if(state !== "active") {
            avatarImg.src = "https://internal.mobrog.com/assets/mobrog2/img/profile-no-avatar-img.svg";
            drpBtn.src = "https://internal.mobrog.com/assets/mobrog2/img/mobrog-2-dropdown-arrow-white.svg"
        } else {
            avatarImg.src = "https://internal.mobrog.com/assets/mobrog2/img/profile-no-avatar-img-hover.svg";
            drpBtn.src = "https://internal.mobrog.com/assets/mobrog2/img/mobrog-2-dropdown-arrow-grey.svg"
        }
    }
}

function toggleHamburgerNavigation() {
    const toggleButton = document.querySelectorAll("[data-toggle='collapse']")[0];
    const hamburgerMenu = document.getElementById("navbarSupportedContent");
    const userAvatarLink = document.getElementsByClassName("nav-item has_dropdown")[0];

    if (toggleButton && hamburgerMenu) {

        document.addEventListener("click", function(e) {
            const target = e.target;

            if(!target) { return false; }

            //Close secondary menu if user clicks outside the menu
            if(
                !hasOrInheritsClass(target, "navbar-collapse") &&
                !hasOrInheritsClass(target, "navbar-toggler") &&
                hamburgerMenu.classList.contains("show")
            ) {
                e.preventDefault();
                hamburgerMenu.classList.remove("show");
            }

            //Close primary menu if user clicks outside the menu
            if(
                userAvatarLink &&
                !hasOrInheritsClass(target, "sub_menu") &&
                !hasOrInheritsClass(target, "has_dropdown") &&
                userAvatarLink.classList.contains("hover-dropdown")
            ) {
                e.preventDefault();
                userAvatarLink.classList.remove("hover-dropdown");
            }
        });

        //If screen is made smaller (eg: users changes screen)
        window.addEventListener("resize", function(){
            if(hamburgerMenu) {
                if(
                    window.innerWidth >= 992 &&
                    hamburgerMenu.classList.contains("show")
                ) {
                    hamburgerMenu.classList.remove("show");
                }
            }
        });

        if(userAvatarLink) {
            //For desktop users
            if (!deviceIsMobile()) {
                userAvatarLink.addEventListener("mouseover", function(){
                    if(hamburgerMenu.classList.contains("show")) {
                        hamburgerMenu.classList.remove("show");
                    }
                    if(!userAvatarLink.classList.contains("hover-dropdown")) {
                        userAvatarLink.classList.add("hover-dropdown");
                        changeAvatarIconState("active");
                    }
                });

                userAvatarLink.addEventListener("mouseout", function(){
                    if(userAvatarLink.classList.contains("hover-dropdown")) {
                        userAvatarLink.classList.remove("hover-dropdown");
                        changeAvatarIconState("inactive");
                    }
                });
            }
            //For mobile users
            userAvatarLink.addEventListener("click", function(){
                if(hamburgerMenu.classList.contains("show")) {
                    hamburgerMenu.classList.remove("show");
                }
                //Check if element is in hover state
                if(!userAvatarLink.classList.contains("hover-dropdown")) {
                    userAvatarLink.classList.add("hover-dropdown");
                    changeAvatarIconState("active");
                } else {
                    userAvatarLink.classList.remove("hover-dropdown");
                    changeAvatarIconState("inactive");
                }
            });
        }
    }
}

function addBackgroundToNav() {
    const nav = document.querySelector(".mobrog-2-transparent-index-navbar > header");
    const triggerElement = document.querySelector(".mobrog-2-transparent-index-navbar .banner_section")

    if (nav && triggerElement) {
        if (triggerElement.getBoundingClientRect().top < 0) {
            nav.setAttribute("data-scrolled", "scrolled");
        } else if (triggerElement.getBoundingClientRect().top === 0) {
            nav.removeAttribute("data-scrolled");
        }
    }
}

/*Condition should only pass on logged out index page*/
if (document.getElementsByClassName("mobrog-2-transparent-index-navbar")[0]) {
    document.addEventListener("scroll", addBackgroundToNav);
    addBackgroundToNav();
}

toggleHamburgerNavigation();