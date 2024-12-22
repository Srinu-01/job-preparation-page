   // js/utils.js
   function createElementFromString(htmlString){
    const fragment =document.createElement('div') // dynamic element using templates
   
           fragment.innerHTML = htmlString;  // converts text format string into elements that browser understands / and generate HTML element tag from it by injecting using this .
   
    return fragment.firstChild  // single view from multiple html types / fragments for components /sections
       }
   
     function isJsonString(str){   // validating  proper type from given input strings using try catch , a protection code , which is type is really a valid formatted JSON ( type check from parsing action) this is highly advised to test if value is proper before working with object structure type format from serverside of ajax like html view changes and data rendering) to validate / protect your components or methods from un wanted invalid values types. that helps better code managements
   
        try {
     JSON.parse(str)   ;
   
   
        } catch(error)  {   
         return false; // on try, set and show value from javascript.
     }
   
           return true
     }
     function toggleLoader (element, show){
        if(show) {
      element.classList.add('show');
   
          }  else  {
           element.classList.remove('show');
    }
      }