// js/app.js
document.addEventListener('DOMContentLoaded', function () {

  const mainView = document.getElementById('main-view');

   const navButtons = document.querySelectorAll('.nav-btn');  
      const themeSwitch = document.querySelector('.theme-switch');
      function updateNavigation(targetSection) {

    navButtons.forEach(button => {
               button.classList.remove('is-active')
   }) ;

  targetSection.classList.add('is-active');
}
     mainView.addEventListener('click', function (event) {  // handling clicks or all HTML from event delegation ( specific action) on each item clicked / target / selection from components of those types

    const target = event.target ;
         if(target.classList.contains('nav-btn'))  {
             const targetViewId  =  target.getAttribute("data-nav-section") ;
             if(targetViewId){

         const targetViewSection=   document.getElementById( targetViewId+"-view" ) ;

          updateNavigation(target);
 
        showOnlyThisView(targetViewSection); // start the correct components /html sections by loading specific id using current actions for the specific view selected and updating rest via layout operation of visibility by the javascript
          }
      }
    })


  function showOnlyThisView(viewSection)
    { // removes inactive layouts for HTML and shows valid state of visibility when element is set via js action event in user state

 document.querySelectorAll(".content-view").forEach(sections=>{

  sections.classList.remove("is-active");


    }) ;
      viewSection.classList.add("is-active") // adds an attribute to class for an visibility on html that helps render / trigger correct UI or parts that were intended with event.


}


   themeSwitch.addEventListener('change',  function ()  // enables / switches to themes ( light or dark based from html/local storage methods , by setting user defined settings which make view state and styling layout change based the javascript operations ).
{
 document.body.classList.toggle('dark-mode')  ;

       localStorage.setItem("isDarkTheme", document.body.classList.contains('dark-mode'));  // set theme setting after a browser refresh state of dark mode

      });

    if(localStorage.getItem("isDarkTheme") === 'true'){   // read/set initial theme and applies its correct attributes, style and rendering in ui with html

     document.body.classList.add('dark-mode');

  themeSwitch.checked =true;   // makes layout persistent state, (from localStorage for that selected component view/setting selection that works as initial view) from browser, if set previously via a specific operation . So every state loads with persistent selection as the data or html changes are made by client in application runtime lifecycle and are valid when a specific section , item or tab / button or menu list or form view was used
     }
    const initTargetViewLink  =  document.querySelector("[data-nav-section='quiz']")  // starts and enables all correct actions  with data, layout, components when loading all those codes and rendering first HTML views from component type sections. and its states

        if(initTargetViewLink){   
    const initSectionToLoad=    document.getElementById("questions-view")
    updateNavigation(initTargetViewLink);  
    showOnlyThisView( initSectionToLoad ) ;
        }
});