
 ///////////////////////////////////////////////////////////////////////////////
 //// NAVIGATION LOGGED IN / LOGGED OUT
 ///////////////////////////////////////////////////////////////////////////////

 //LOGGED IN----------------- 
 const mobrog_v1_nav_btn_toggle_logged_in = document.querySelector(".mobrog-v1-nav-toggle-btn-logged-in");
 const mobrog_v1_nav_links_loggedIn = document.querySelector(".mobrog-v1-nav-loggedIn");
 const mobrog_v1_nav_links_loggedIn_move = document.querySelector(".mobrog-v1-nav-show-toggle-list-loggedIn");
 const mobrog_v1_nav_profile_content_loggedIn = document.querySelector(".mobrog-v1-profile-content");
 const mobrog_v1_moveList_loggedIn = document.querySelector(".mobrog-v1-nav-show-move-list-loggedIn");
 const mobrog_v1_nav_profile_collap = document.querySelector('.mobrog-v1-nav-profile-collapsible');
 const mobrog_v1_li_selectedLinks = document.querySelectorAll(".mobrog-v1-li-selected");
 const divContElement = document.querySelector(".mobrog-body");

 const mobrog_v1_nav_links_loggedOut = document.querySelector(".mobrog-v1-nav-loggedOut");
 const mobrog_v1_nav_links_loggedOut_move = document.querySelector(".mobrog-v1-nav-show-toggle-list-loggedOut");

if (document.querySelector(".mobrog-v1-notification-container") != null) {
  document.querySelector(".mobrog-v1-nav-container").style.padding = "0";
  document.querySelector(".mobrog-more-info-popup").style.top = "8em";
 


  if (window.matchMedia("(max-width: 1090px)").matches) {
    document.querySelector(".mobrog-body").style.marginTop = "14em";
    if (document.querySelector(".mobrog-v1-profile-content") != null) {
      document.querySelector(".mobrog-v1-profile-content").style.top = "7em";
    }
  }else{
    if (document.querySelector(".mobrog-v1-profile-content") != null) {
      document.querySelector(".mobrog-v1-profile-content").style.top = "8em";
    }
    document.querySelector(".mobrog-body").style.marginTop = "14em";
  }
}



 //========= New added code =======================




 function disableScrolling() {
   document.body.classList.add("stop-scrolling");

 }

 function enableScrolling() {
   document.body.classList.remove("stop-scrolling");
 }

 let testNum = 0;

if(document.querySelector(".mobrog-v1-nav-clicked-content")) {
 document.querySelector(".mobrog-v1-nav-clicked-content").addEventListener("click", function () {
   testNum++;
   if (testNum == 2) {
     document.querySelector(".mobrog-v1-nav-clicked-content").classList.remove("mobrog-v1-nav-clicked-content-display");
     if (mobrog_v1_nav_profile_content_loggedIn != null) {
       mobrog_v1_nav_profile_content_loggedIn.classList.add("mobrog-v1-display-hidden");
       mobrog_v1_nav_profile_content_loggedIn.classList.remove("mobrog-v1-display-show");
       mobrog_v1_moveList_loggedIn.classList.add("mobrog-v1-display-hidden");
       enableScrolling();
     }

     if (mobrog_v1_nav_links_loggedOut != null) {
       mobrog_v1_nav_links_loggedOut.classList.add("mobrog-v1-display-hidden");
       mobrog_v1_nav_links_loggedOut.classList.remove("mobrog-v1-display-show");
       document.querySelector(".mobrog-v1-nav-show-move-list-loggedOut").classList.add("mobrog-v1-display-hidden");
       enableScrolling();
     }
     testNum = 0;
   } else if (testNum == 0) {
     document.querySelector(".mobrog-v1-nav-clicked-content").classList.add("mobrog-v1-nav-clicked-content-display");
   }

 },  {passive: true})
}


 if (mobrog_v1_nav_profile_collap != null) {
   mobrog_v1_nav_profile_collap.addEventListener("click", function () {
     mobrog_v1_nav_profile_content_loggedIn.classList.toggle("mobrog-v1-display-show");
     if (window.matchMedia("(max-width: 1090px)").matches) {
       testNum = 0;
       if (mobrog_v1_nav_profile_content_loggedIn.classList.contains("mobrog-v1-display-show")) {

         disableScrolling();
      
       } else {
         enableScrolling();
      
       }

     }
     mobrog_v1_moveList_loggedIn.classList.add("mobrog-v1-display-hidden");
     mobrog_v1_moveList_loggedIn.classList.remove("mobrog-v1-display-show");

     if (document.querySelector(".mobrog-v1-nav-clicked-content") != null) {
       if (mobrog_v1_nav_profile_content_loggedIn.classList.contains("mobrog-v1-display-show")) {
         mobrog_v1_nav_profile_content_loggedIn.classList.add("mobrog-v1-display-show");
         document.querySelector(".mobrog-v1-nav-clicked-content").classList.add("mobrog-v1-nav-clicked-content-display");

       } else {
         mobrog_v1_nav_profile_content_loggedIn.classList.remove("mobrog-v1-display-show");
         document.querySelector(".mobrog-v1-nav-clicked-content").classList.remove("mobrog-v1-nav-clicked-content-display");

       }

     }

   },  {passive: true})
 }



 if (mobrog_v1_nav_btn_toggle_logged_in) {
   mobrog_v1_nav_btn_toggle_logged_in.addEventListener('click', function () {
     if (window.matchMedia("(max-width: 1090px)").matches) {
       testNum = 0;

       if (mobrog_v1_moveList_loggedIn.classList.contains("mobrog-v1-display-hidden")) {
         disableScrolling();
       
       } else {
         enableScrolling();

       }
     }
     mobrog_v1_nav_links_loggedIn_move.innerHTML = mobrog_v1_nav_links_loggedIn.innerHTML;
     mobrog_v1_moveList_loggedIn.classList.toggle("mobrog-v1-display-hidden");
     mobrog_v1_nav_profile_content_loggedIn.classList.add("mobrog-v1-display-hidden");
     mobrog_v1_nav_profile_content_loggedIn.classList.remove("mobrog-v1-display-show");

     if (document.querySelector(".mobrog-v1-nav-clicked-content") != null) {
       if (mobrog_v1_moveList_loggedIn.classList.contains("mobrog-v1-display-hidden")) {
         document.querySelector(".mobrog-v1-nav-clicked-content").classList.remove("mobrog-v1-nav-clicked-content-display");

       } else {
         document.querySelector(".mobrog-v1-nav-clicked-content").classList.add("mobrog-v1-nav-clicked-content-display");
       }
     }


     if (!mobrog_v1_moveList_loggedIn.classList.contains("mobrog-v1-display-hidden")) {
       mobrog_v1_nav_profile_content_loggedIn.style.maxHeight = null;
       mobrog_v1_nav_profile_content_loggedIn.style.padding = null;
       mobrog_v1_nav_profile_content_loggedIn.style.transition = "max-height 0.3s ease-out";
       mobrog_v1_nav_profile_content_loggedIn.style.padding = "2em";
     }
   },  {passive: true});

 }

 document.addEventListener("scroll", scrollFunction, {passive: true});
 if(document.querySelector(".mobrog-v1-nav-container")) {
    document.querySelector(".mobrog-v1-nav-container").style.padding = "0";
}


  if (window.matchMedia("(max-width: 1090px)").matches){
    if (document.querySelector(".mobrog-v1-profile-content") != null) {
      if (document.querySelector(".mobrog-v1-notification-container") != null){
        document.querySelector(".mobrog-v1-profile-content").style.top = "10.5em";
       }else{
        document.querySelector(".mobrog-v1-profile-content").style.top = "6.7em";
       }
      }
  }else{
    if (document.querySelector(".mobrog-v1-profile-content") != null) {
      }
      if (document.querySelector(".mobrog-v1-notification-container") != null){
        document.querySelector(".mobrog-v1-profile-content").style.top = "8em";
       }else{
        if (document.querySelector(".mobrog-v1-profile-content") != null) {
        document.querySelector(".mobrog-v1-profile-content").style.top = "7em";
        }
      }
      
  }

 function scrollFunction() {
   /*== scroll ==*/
   if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
     /*== desktop version ==*/
     if(document.querySelector(".mobrog-v1-nav-container-main-div")) {
        document.querySelector(".mobrog-v1-nav-container-main-div").style.padding = "0.4em 3em 0.4em 3em";
     }
     if(document.querySelector(".mobrog-v1-nav-container")){
        document.querySelector(".mobrog-v1-nav-container").style.padding = "0";
     }
     if(document.querySelector(".mobrog-v1-nav-logo-img")) {
        document.querySelector(".mobrog-v1-nav-logo-img").style.height = "2.9em";
         document.querySelector(".mobrog-v1-nav-logo-img").style.paddingRight = "0.9em";
     }

     if (document.querySelector(".mobrog-v1-notification-container") != null) {
      if (document.querySelector(".mobrog-more-info-popup") != null) {
        document.querySelector(".mobrog-more-info-popup").style.top = "2em";
        }
     }

     if (document.querySelector(".mobrog-v1-profile-content") != null) {
       document.querySelector(".mobrog-v1-profile-content").style.top = "3.5em";
     }

     /*== mobile version ==*/
     if (window.matchMedia("(max-width: 1090px)").matches) {
        if(document.querySelector(".mobrog-v1-nav-logo-img")) {
            document.querySelector(".mobrog-v1-nav-logo-img").style.height = "2.4em";
        }

       if (document.querySelector(".mobrog-v1-profile-content") != null) {
         document.querySelector(".mobrog-v1-profile-content").style.top = "9.5em";
       }

       if (document.querySelector(".mobrog-v1-nav-profile-collapsible") != null) {
         document.querySelector(".mobrog-v1-nav-profile-collapsible").style.height = "2em";
       }

       if (document.querySelector(".mobrog-v1-notification-container") != null) {
        document.querySelector(".mobrog-body").style.marginTop = "9em";
        if (document.querySelector(".mobrog-more-info-popup") != null) {
          document.querySelector(".mobrog-more-info-popup").style.top = "2em";
          }
       }
     }else{
      if (document.querySelector(".mobrog-v1-notification-container") != null) {
        document.querySelector(".mobrog-body").style.marginTop = "9em";
      }
      
     }

     /*== if notification is available ==*/
     if (document.querySelector(".mobrog-v1-notification-container") != null) {
       document.querySelector(".mobrog-v1-notification-container").style.display = "none";
       document.querySelector(".mobrog-v1-nav-container").style.padding = "0";
     }

   } else {
     /*== go to top ==*/
     if(document.querySelector(".mobrog-v1-nav-container-main-div")) {
        document.querySelector(".mobrog-v1-nav-container-main-div").style.padding = "1.5em 3em 1.5em 3em";
     }
     if(document.querySelector(".mobrog-v1-nav-container")) {
          document.querySelector(".mobrog-v1-nav-container").style.padding = "0";
     }
     if(document.querySelector(".mobrog-v1-nav-logo-img")) {
        document.querySelector(".mobrog-v1-nav-logo-img").style.height = "4em";
        document.querySelector(".mobrog-v1-nav-logo-img").style.paddingRight = "0";
     }

     if (document.querySelector(".mobrog-v1-profile-content") != null) {
       document.querySelector(".mobrog-v1-profile-content").style.top = "7em";
     }
 

     /*== mobile version ==*/
     if (window.matchMedia("(max-width: 1090px)").matches) {
        if(document.querySelector(".mobrog-v1-nav-logo-img")) {
            document.querySelector(".mobrog-v1-nav-logo-img").style.height = "3em";
        }
       if (document.querySelector(".mobrog-v1-profile-content") != null) {
         
         if (document.querySelector(".mobrog-v1-notification-container") != null){
          document.querySelector(".mobrog-v1-profile-content").style.top = "9.5em";
         }else{
          document.querySelector(".mobrog-v1-profile-content").style.top = "6.2em";
         }
       }
       if (document.querySelector(".mobrog-v1-notification-container") != null) {
        document.querySelector(".mobrog-body").style.marginTop = "8em";
        document.querySelector(".mobrog-v1-notification-container").style.display = "flex";
       }
     }else{
        /*== if notification is available ==*/
        if (document.querySelector(".mobrog-v1-notification-container") != null) {
          document.querySelector(".mobrog-body").style.marginTop = "11em";
          document.querySelector(".mobrog-v1-notification-container").style.display = "flex";

          if (document.querySelector(".mobrog-v1-profile-content") != null) {
            document.querySelector(".mobrog-v1-profile-content").style.top = "8em";
          }
          if (document.querySelector(".mobrog-more-info-popup") != null) {
            document.querySelector(".mobrog-more-info-popup").style.top = "8em";
          }
        }
     }
   }

 }






 if (document.querySelector(".mobrog-body") != null) {
   document.querySelector(".mobrog-body").addEventListener("click", function () {
     testNum = 0;
     enableScrolling();
     document.querySelector(".mobrog-v1-all-languages-list").classList.add("mobrog-v1-language-selector-displayNone");
     if(mobrog_v1_nav_profile_content_loggedIn != null){
      if (mobrog_v1_nav_profile_content_loggedIn.classList.contains("mobrog-v1-display-show") && mobrog_v1_nav_profile_content_loggedIn != null) {
        mobrog_v1_nav_profile_content_loggedIn.classList.add("mobrog-v1-display-hidden");
        mobrog_v1_nav_profile_content_loggedIn.classList.remove("mobrog-v1-display-show");
        document.querySelector(".mobrog-v1-nav-clicked-content").classList.remove("mobrog-v1-nav-clicked-content-display");
      }
     }

     if (document.querySelector(".mobrog-v1-submenu-items-AboutUs") != null) {
       document.querySelector(".mobrog-v1-submenu-items-AboutUs").classList.remove("mobrog-v1-display-show");
     }
   },  {passive: true})
 }

 //LOGGED OUT--------------------
 const mobrog_v1_nav_btn_toggle_logged_out = document.querySelector(".mobrog-v1-nav-toggle-btn-logged-out");

 const mobrog_v1_nav_loggedOut_registerBtns = document.querySelector(".mobrog-v1-nav-register-loggedOut-btns");
 const mobrog_v1_nav_loggedOut_registerBtns_move = document.querySelector(".mobrog-v1-nav-register-loggedOut-btns-move");
 const mobrog_v1_nav_register_buttons = document.querySelector(".mobrog-v1-nav-login-buttons");
 const mobrog_v1_moveList_loggedOut = document.querySelector(".mobrog-v1-nav-show-move-list-loggedOut");



 if (mobrog_v1_nav_btn_toggle_logged_out) {

   mobrog_v1_nav_btn_toggle_logged_out.addEventListener('click', function () {
     if (window.matchMedia("(max-width: 1090px)").matches) {
       testNum = 0;
     }

     if (mobrog_v1_moveList_loggedOut.classList.contains("mobrog-v1-display-hidden")) {
       disableScrolling();
  
     } else {
       enableScrolling();
   
     }

     mobrog_v1_nav_links_loggedOut_move.innerHTML = mobrog_v1_nav_links_loggedOut.innerHTML;
     mobrog_v1_moveList_loggedOut.classList.toggle("mobrog-v1-display-hidden");
     document.querySelector(".mobrog-v1-nav-clicked-content").classList.toggle("mobrog-v1-nav-clicked-content-display");

     if (mobrog_v1_nav_loggedOut_registerBtns) {
       mobrog_v1_nav_loggedOut_registerBtns_move.innerHTML = mobrog_v1_nav_loggedOut_registerBtns.innerHTML;
       mobrog_v1_nav_register_buttons.classList.toggle("mobrog-v1-display-show");
     }

   },  {passive: true});

 }













 ///////////////////////////////////////////////////////////////////////////////
 //// TUTORIAL JS
 ///////////////////////////////////////////////////////////////////////////////

 const articleList = [{
     id: "Tutorial1",
     content: `<p> sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam <img class="mobrog-v1-showTutorial-article_img_inner" src="image/tutorial1_img.png"> </p>`,
   },
   {

     id: "Tutorial2",
     content: `<p> Lorem ipsum dolor sit amet, consetetur sadipscing <i class="far fa-address-card"></i> elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam </p>`,
   },
   {

     id: "Tutorial3",
     content: `Lorem Ipsum is simply <img class="mobrog-v1-showTutorial-article_img_inner" src="image/test_icon.png"> 
      dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
      since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has 
      survived not only five centuries, but also the <br><img class="mobrog-v1-showTutorial-article_img_after" src="images/test.png">`,
   }

 ]

 const mobrog_v1_tutorial_button = document.querySelector(".mobrog-v1-showTutorial-button-link");
 const mobrog_v1_tutorial_button_links = document.querySelectorAll(".mobrog-v1-showTutorial-button-link");
 const mobrog_v1_tutorial_article = document.querySelector(".mobrog-v1-showTutorial-article");
 const mobrog_v1_tutorial_article_close = document.querySelector(".mobrog-v1-showTutorial-close");
 const mobrog_v1_tutorial_article_info = document.querySelector(".mobrog-v1-showTutorial-text-info");



 // Select buttons
 if (mobrog_v1_tutorial_button_links != null) {
   mobrog_v1_tutorial_button_links.forEach(function (link) {
     link.addEventListener('click', function (e) {

       let info = e.currentTarget.dataset.id;

       articleList.filter(function (linkItem) {
         if (linkItem.id === info) {
           mobrog_v1_tutorial_article.style.display = "flex";
           mobrog_v1_tutorial_article_info.innerHTML = displayArticle(linkItem);
         }
       })
     })
   },  {passive: true})
 }




 // Close the article
 if (mobrog_v1_tutorial_article_close != null) {
   mobrog_v1_tutorial_article_close.addEventListener("click", function () {
     mobrog_v1_tutorial_article.style.display = "none";
   },  {passive: true})
 }




 // Display body info
 function displayArticle(item) {
   return `
      <div class="mobrog-v1-showTutorial-text-info">
        ${item.content}
      </div>`;
 }



 function displayOnload(content) {
   if (mobrog_v1_tutorial_article) {
     mobrog_v1_tutorial_article.style.display = "flex";
     mobrog_v1_tutorial_article_info.innerHTML = content;
   }

 }

 var content = `djkfbdkhvfb`;

 displayOnload(content)





 ///////////////////////////////////////////////////////////////////////////////
 //// FAQ
 ///////////////////////////////////////////////////////////////////////////////








 ///////////////////////////////////////////////////////////////////////////////
 //// REGISTRATION
 ///////////////////////////////////////////////////////////////////////////////

 //======================== VARIABLES ========================================
 const mobrog_v1_register_form = document.querySelector(".mobrog-v1-register");
 const mobrog_v1_register_config = document.querySelector(".mobrog-v1-registration-conformation-container");

 const mobrog_v1_register_step_numbers = document.querySelectorAll(".mobrog-v1-registration-numbers");
 const mobrog_v1_register_title_step = document.querySelector(".mobrog-v1-registration-steps-title-h2");
 const mobrog_v1_register_step1_header = document.querySelector(".mobrog-v1-registration-first-step");
 const mobrog_v1_register_step2_header = document.querySelector(".mobrog-v1-registration-second-step");
 const mobrog_v1_register_step3_header = document.querySelector(".mobrog-v1-registration-third-step");
 const mobrog_v1_register_step1_checked = document.querySelector(".mobrog-v1-registration-step-img1");
 const mobrog_v1_register_step2_checked = document.querySelector(".mobrog-v1-registration-step-img2");

 const mobrog_v1_register_step1 = document.querySelector(".mobrog-v1-registration-questions-part1-profile");
 const mobrog_v1_register_step2 = document.querySelector(".mobrog-v1-registration-questions-part2-prof");
 const mobrog_v1_register_step3 = document.querySelector(".mobrog-v1-registration-questions-part3-reg");

 const mobrog_v1_register_next_button = document.querySelector(".mobrog-v1-registration-back-next-button");
 const mobrog_v1_register_back_button = document.querySelector(".mobrog-v1-registration-back-prev-button");
 const mobrog_v1_register_complete_button = document.querySelector(".mobrog-v1-registration-complete-button");


 //---------------- GENDER ---------------- 
 const mobrog_v1_register_genderFemale = document.querySelector(".mobrog_v1_registration_female");
 const mobrog_v1_register_genderFemale_text = document.querySelector(".mobrog_v1_registration_female_text");
 const mobrog_v1_register_genderMale = document.querySelector(".mobrog_v1_registration_male");
 const mobrog_v1_register_genderMale_text = document.querySelector(".mobrog_v1_registration_male_text");
 const mobrog_v1_register_gender_error = document.querySelector(".mobrog_v1_register_gender_error");
 //---------------- USERNAME ---------------- 
 const mobrog_v1_register_username = document.querySelector('[name="f678"]');
 const mobrog_v1_register_username_error = document.querySelector(".mobrog_v1_register_username_error");
 //---------------- BIRTHDATE---------------- 
 const mobrog_v1_registration_monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
 let mobrog_v1_registration_qntYears = 95;
 let mobrog_v1_registration_selectYear = document.querySelector(".year");
 let mobrog_v1_registration_selectMonth = document.querySelector(".month");
 let mobrog_v1_registration_selectDay = document.querySelector(".day");
 let mobrog_v1_registration_currentYear = new Date().getFullYear();
 const mobrog_v1_register_birthday_error = document.querySelector(".mobrog_v1_register_birthday_error");
 //---------------- POSTALCODE---------------- 
 const mobrog_v1_register_postalcode = document.querySelector('[name="f194"]');
 const mobrog_v1_register_pCode_error = document.querySelector(".mobrog_v1_register_pCode_error");
 //---------------- EDUCATIONAL QUALIFICATION ---------------- 
 const mobrog_v1_register_eduQualif = document.querySelector(".mobrog_v1_registration_eduQualif");
 const mobrog_v1_register_eduQualif_error = document.querySelector(".mobrog_v1_register_eQualif_error");
 //---------------- PROFESSIONAL STATUS---------------- 
 const mobrog_v1_register_profession = document.querySelector(".mobrog_v1_registration_profession");
 const mobrog_v1_register_profession_error = document.querySelector(".mobrog_v1_register_profession_error");
 //---------------- EMAIL---------------- 
 const mobrog_v1_register_email = document.querySelector('[name="login"]');
 const mobrog_v1_register_email_error = document.querySelector(".mobrog_v1_register_email_error");
 //---------------- PASSWORD---------------- 
 let mobrog_v1_pass_show_hide = document.querySelector('#show_hide');
 const mobrog_v1_register_password = document.querySelector('[name="password"]');
 const mobrog_v1_register_pass_error = document.querySelector(".mobrog_v1_register_pass_error");
 //---------------- PRIVACY---------------- 
 const mobrog_v1_register_privacy = document.querySelector('[name="conditions"]');
 const mobrog_v1_register_privacy_error = document.querySelector(".mobrog_v1_register_privacy_error");







 //======================== FUNCTIONS ========================================

 //---------------- DEFAULT ---------------- 
 let countSteps = 1;
 windowDefault();

 function windowDefault() {
   displayNone(mobrog_v1_register_gender_error);
   displayNone(mobrog_v1_register_username_error);
   displayNone(mobrog_v1_register_birthday_error);
   displayNone(mobrog_v1_register_pCode_error);
   displayNone(mobrog_v1_register_eduQualif_error);
   displayNone(mobrog_v1_register_profession_error);
   displayNone(mobrog_v1_register_email_error);
   displayNone(mobrog_v1_register_pass_error);
   displayNone(mobrog_v1_register_privacy_error);


   displayNone(mobrog_v1_register_step2);
   displayNone(mobrog_v1_register_step3);
   displayNone(mobrog_v1_register_complete_button);

   if (mobrog_v1_register_back_button != null) {
     mobrog_v1_register_back_button.style.visibility = "hidden";
   }

   if (mobrog_v1_register_step1_header != null) {
     mobrog_v1_register_step1_header.classList.add("mobrog-v1-registration-step-selected");
   }

   if (mobrog_v1_register_step_numbers[0] != null || mobrog_v1_register_step_numbers[0] != undefined) {
     mobrog_v1_register_step_numbers[0].classList.add("mobrog-v1-registration-step-selected-number");
     mobrog_v1_register_step_numbers[0].classList.remove("mobrog-v1-registration-numbers");
   }

 }







 //======================== EVENTLISTENER ========================================
 //Inline in the form self



 //--------------------------- GENDER -------------------------
 /* mobrog_v1_register_genderFemale.addEventListener("click", function () {
   document.querySelector(".mobrog_v1_registration_female_text").classList.add("mobrog-v1-registration-selected-gender");
   document.querySelector(".mobrog_v1_registration_male_text").classList.remove("mobrog-v1-registration-selected-gender");
 })


 mobrog_v1_register_genderMale.addEventListener("click", function () {
   document.querySelector(".mobrog_v1_registration_female_text").classList.remove("mobrog-v1-registration-selected-gender");
   document.querySelector(".mobrog_v1_registration_male_text").classList.add("mobrog-v1-registration-selected-gender");
 })

  */





 //======================== CHECK ERROR MESSAGES ========================================

 //Inline in the form self






 //======================== EMAIL ========================================



 //======================== PASSWORD ========================================


 if (mobrog_v1_pass_show_hide != null) {
   mobrog_v1_pass_show_hide.addEventListener('click', showHide,  {passive: true});
 }
 if (mobrog_v1_register_password != null) {
   mobrog_v1_register_password.addEventListener('input', textChange,  {passive: true});
 }

 function showHide() {
   if (mobrog_v1_pass_show_hide.className == "fas fa-eye") {
     mobrog_v1_pass_show_hide.className = "fas fa-eye-slash";
     mobrog_v1_register_password.type = "text";
   } else {
     mobrog_v1_pass_show_hide.className = "fas fa-eye";
     mobrog_v1_register_password.type = "password";
   }
 }


 function valid(itemValid, v_icon, inv_icon) {
   let text = document.querySelector(`${itemValid}`);
   if (text != "" || text != null) {
     text.style.opacity = "1";
   }

   let valid_icon = document.querySelector(`${itemValid} .${v_icon}`);
   valid_icon.style.opacity = "1";
   valid_icon.style.color = "green";
   valid_icon.style.border = "2px solid green";

   let invalid_icon = document.querySelector(`${itemValid} .${inv_icon}`);
   invalid_icon.style.opacity = "0";
 }


 function invalid(itemValid, v_icon, inv_icon) {
   let text = document.querySelector(`${itemValid}`);
   if (text != "" || text != null) {
     text.style.opacity = ".5";
   }
   let valid_icon = document.querySelector(`${itemValid} .${v_icon}`);
   valid_icon.style.opacity = "0";
   let invalid_icon = document.querySelector(`${itemValid} .${inv_icon}`);
   invalid_icon.style.opacity = "1";
 }


 function textChange() {
   if (mobrog_v1_register_password.value.match(/[A-Z]/) != null)
     valid('#capital', 'fa-check', 'fa-times');

   else
     invalid('#capital', 'fa-check', 'fa-times');


   if (mobrog_v1_register_password.value.match(/[0-9]/) != null)
     valid('#num', 'fa-check', 'fa-times');
   else
     invalid('#num', 'fa-check', 'fa-times');


   if (mobrog_v1_register_password.value.match(/[!@#$%^&*]/) != null)
     valid('#char', 'fa-check', 'fa-times');

   else
     invalid('#char', 'fa-check', 'fa-times');


   if (mobrog_v1_register_password.value.length > 7)
     valid('#more8', 'fa-check', 'fa-times');

   else
     invalid('#more8', 'fa-check', 'fa-times');

 }




 //---------------- DISPLAY NONE FUNCTION ---------------- 
 function displayNone(className) {
   if (className) {
     className.classList.add("mobrog-v1-registration-display-none");
     className.classList.remove("mobrog-v1-registration-display-block");
     className.classList.remove("mobrog-v1-registration-display-flex");
   }
 }


 //---------------- DISPLAY BLOCK FUNCTION ---------------- 
 function displayBlock(className) {
   if (className) {
     className.classList.remove("mobrog-v1-registration-display-none");
     className.classList.add("mobrog-v1-registration-display-block");
   }

 }


 //---------------- DISPLAY FLEX FUNCTION ---------------- 
 function displayFlex(className) {
   if (className) {
     className.classList.remove("mobrog-v1-registration-display-none");
     className.classList.add("mobrog-v1-registration-display-flex");
   }

 }





 ///////////////////////////////////////////////////////////////////////////////
 //// Redeem Rewards
 ///////////////////////////////////////////////////////////////////////////////




    var today_date_payout = new Date();
    var dd_today = String(today_date_payout.getDate()).padStart(2, '0');
    var mm_today = String(today_date_payout.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy_today = today_date_payout.getFullYear();

    today_date_payout = dd_today + '.' + mm_today + '.' + yyyy_today;
    if(document.getElementById("current_date_payout")){
      document.getElementById("current_date_payout").innerText = today_date_payout;
    }









 ///////////////////////////////////////////////////////////////////////////////
 //// LOGIN
 ///////////////////////////////////////////////////////////////////////////////

 function IsValidEmail(email) {
   var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
   return regex.test(email);
 };





///////////////////////////////////////////////////////////////////////////////
 //// ABOUT US 
///////////////////////////////////////////////////////////////////////////////


if( document.querySelector(".mobrog-v1-videos-prev")){
  var slideIndex = 1;
  document.querySelector(".mobrog-v1-videos-prev").addEventListener("click", function () {
   plusSlides(-1);
 },  {passive: true})
 
 document.querySelector(".mobrog-v1-videos-next").addEventListener("click", function () {
   plusSlides(1);
 },  {passive: true})
 showSlides(slideIndex);
 
 
 
  function plusSlides(n) {
   showSlides(slideIndex += n);
 }
 
 function currentSlide(n) {
   showSlides(slideIndex = n);
 }
 
 function showSlides(n) {
   var i;
   var slides = document.getElementsByClassName("mobrog-v1-aboutUs-videos");
   if (n > slides.length) {
     slideIndex = 1
   }
   if (n < 1) {
     slideIndex = slides.length
   }
   for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
   }
 
   slides[slideIndex - 1].style.display = "block";
 }
}

