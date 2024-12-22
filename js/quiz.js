 // quiz.js
 const questionContainer = document.getElementById('questions-wrapper');
 const pageNavButton = document.querySelectorAll('.page-navigation  button');
  const loaderElem = document.querySelector('.questions-loader');
    let questions = [];
  let currentIndex = 0;

   function showQuestion(index) {

       toggleLoader(loaderElem,true) ;
       if(!questions[index]){

           toggleLoader(loaderElem,false);

      return ;
 }

      const question = questions[index];

   const cardElement=   createElementFromString (  `
   <div  class ='question-card'>
        <h3  class ='question-title'>  ${question.question}  </h3>
       <p class = 'question-text'>  ${question.answer}  </p>

    <div class='code-container'  >
              ${ question.code_example  ? `<pre>   ${escapeHTML(question.code_example)}    </pre>`    :''}
       </div>
           ${question.image  ?   `<div style = 'text-align: center'>   <img  src ='${question.image}'    style = ' max-width: 350px'  alt='${question.question}'>   </div>`    :""  }

                <div  class= 'answer'>  
                      <p>   Explanation :   ${  question.explanation ?   escapeHTML( question.explanation  )  : ''  } </p>

    </div>
 <div class='card-meta' >  <div>  Topic : <span>${question.topic}</span>  </div>    <div>   Difficulty:   <span>${question.difficulty} </span>  </div>   <div>  related to :   <span> ${ question.related_questions ?  question.related_questions.length :0  }   questions  </span>    </div>
      </div>

       </div> `);

        questionContainer.innerHTML ="";
        questionContainer.appendChild (cardElement) ;
    updateButtons () ;
      toggleLoader(loaderElem, false ); // always display that after the views (html) was completed to the view / html section

   }
function updateButtons ()
     {
    if (currentIndex  === 0 ) { // always first state for starting at view / components
     pageNavButton.forEach (item=>{

    if ( item.getAttribute( "data-nav") ==="previous")  // must correctly read this name, other parts that have not specified attribute this part, never effect view layout changes, rather stay  unmodified . if different type attribute used, the same code from html can also get that  component. with new/differnt implementation/attribute usage
        {


        item.setAttribute ( "disabled"  , 'disabled' )   ;


         }else {


          item.removeAttribute("disabled");


   }

       });

        }
        else  if ( currentIndex === questions.length-1 ){

      pageNavButton.forEach (item=>{ // on html layout it disables the html ( ui components) properties when no longer needed ( with view navigation controls using data ) based a set HTML values which has data based html string for a ui parts or its layout

  if ( item.getAttribute (  "data-nav") ===  'next'  )    {  // here its HTML property that help the rendering process
      item.setAttribute ("disabled" , "disabled");  // for navigation control set / change HTML from DOM with properties . if the navigation view type exist that they control specific properties
     }  else{
      item.removeAttribute ("disabled") ;


         }
    }   ) ;

 }

     else {
     pageNavButton.forEach (  item =>{  // by this all valid index HTML views navigation with other components type should enable at all cases , if no boundaries

           item.removeAttribute( 'disabled');  // remove this properties which can change UI  as a navigation component for HTML ( from js when the views loading with actions/navigation types by javascript codes ) also remove that attribute so that element should also show all times with browser view components

   }    ) ;

   }
 }
  function escapeHTML (str)   // from String , special chars conversions ( replace all entities) by html
  {   return  String(str).replace( /[&<>"']/g , function  (tag){
          const chars =
             {
         '&' :'&',    
            '<':'<',
            '>':'>',  
          '"':'"',   //  map of object where we do conversions . where this set all type is used  from HTML standards by escaping HTML syntax char to make data part correct when layout using its properties from tags with HTML implementation parts.
    "'":'''
      }  ;

          return chars[tag] || tag ;


  }  )

      }


    function fetchQuestionData() {
         toggleLoader(loaderElem ,true);


  fetch ( 'data/questions.json'  )
       .then ( response  => response.text(   ))
         .then((data)=>{  //  always test / validate that a proper format has reached the client by that test on structure/ data is json, it should never fail
           if (isJsonString (data) )    // validates using method ( as a fallback also ), when wrong / different data arrives unexpectedly . and make better security if it contains mal form data on code type structure that a js may load , but those can also be protected / test. on those method / properties during loading using client server interaction over APIs / remote URLs during data requests also
  {

             return   JSON.parse ( data )   ;  // correct if return proper formatted, that js could access object values
     }  else{

          loaderElem.textContent=" Data Source from URL is broken / does not match.  check Json formatting is correct ( use validator ), or file address (path). Please verify in local dev or server with file access ! ( open by that browser on the address for such JSON type URL which return the valid string value format data if issue exits with json types ) "; // feedback for problems from source , or if request does not provide right data response with a javascript implementation. that also improve with all methods when using fetch that makes components reliable or less issues when dealing HTML data / views / components etc for layouts with HTML DOM and its operations on events.
   throw   new   Error (" json validation / file or source access issues / check the type or structure from file data ") ;
 }



   }  )
     .then( questionList  =>{ // set array only or use any methods form other js code
       questions= questionList.questions || []  ;  // all HTML UI layouts / sections works with values with different data on that structure of properties by access method based from components.  then next /previous button actions set new / specific item data for that particular sections. with these value to access that components / views parts in js
   showQuestion (currentIndex)    // load component with data object and then set its visibility for layout using JS based functions from HTML tag which set their attribute also with valid index to display at view parts
            setupTopics (questions) ;

          } )
          .catch(  (error)=>{    // it’s all those html methods call types must catch as it will allow to handle any issues or prevent crashes from layout, or invalid type of operations by unexpected behaviours or different code styles or format that js codes may have while they are setting those layout / DOM property on different parts
      loaderElem.textContent =' Check errors / inspect by source HTML, using JS debugger console / logs   . please correct path / type errors.';

         console.log ("data-fetch error message :", error );  // log method for debugging / issues to set/ analyze
       toggleLoader( loaderElem  ,false)  // after setting message hide them too
          } );


  }
   function navigateQuestion ( direction  )  { // control different sections for navigation and to control the view which must start form that state which they selected
       if (direction==="next")  // selection methods for setting next parts and other operation using next / prev types  ( by those property string/ values when buttons has that type attribute properties / tags properties , which are defined as valid values and from html also. its always should check before using these HTML attribute types with html element / or type of javascript view selection component / properties which must exist in type) ( like a type setting before operation  is validated or before action takes place by the code / and it’s layouts / or methods from browser and dom/html) ( view layout changes are trigger ) if data part allows

          {
    if ( currentIndex  <questions.length  -  1){


           currentIndex++    //   then change the view using index. after checks passed above as valid html section control components  operations are safe to take with properties from browser actions on page
        }
     }     else    if ( direction === 'previous'   ) {

  if (currentIndex > 0)  {
    currentIndex --;


    }


 }  else  {   // if none matched to action, it not navigate to anywhere, it stops with validation , because only valid component type should allow , from properties / or events
           return;

          }
         showQuestion ( currentIndex  );   // single part view from html or from  specific components by the values/ or with properties , with those index using valid components for layouts, to update them view /layout for the specific part using js action .

 }
 questionContainer.addEventListener ('click' ,function(event){  // listening only those buttons action ( view) , and only for actions to HTML components layout with properties (data-) in attributes where operations has to occur using that event by client when selecting any views and its property. so html parts from dom layout knows which view changed and update. the views / content from html part also change correctly
         if (event.target.hasAttribute ('data-nav') ) {  // using an object validation via propertie from the click target with its attribute type

  const   clickedBtnType  =    event.target.getAttribute ( 'data-nav'  )  ;  // value that we stored for an object for proper actions via view methods/ code or functions also those will enable the view state
    navigateQuestion(clickedBtnType) ;

 }


  }     )
   function setupTopics ( questions ){
        const  topicContainer   =   document.getElementById('topic-selection')    ;  // html id
    const uniqueTopics =     Array.from (    new Set(questions.map(  item =>  item.topic     )  )   );  // generates from data ( js method, to creates components data properties )  , here topic name from objects with unique structure in the array by selecting all valid list objects by that name/ category using methods on array (mapping with types) by using data which came from data objects with its value properties when selected by using different approach, this also used dynamicly html layouts if a list of html properties and actions from js component type objects based that view of data in HTML element, which works for selection parts of different type on user actions .  it generate new set or types
          const  html  =      uniqueTopics.map( item =>{   return   ` <div  data-filter-value="${item}"    > ${item}</div>`  }  )     .join('')    // generate specific html properties for display / from html components as string format from the javascript

        topicContainer.innerHTML =  html   // load generated sections which have html style using above text components parts using those methods . and injects on browser. DOM part where to html properties will display those elements , also can add behaviours/ styles etc or data based attribute those could also perform UI operations
 topicContainer.addEventListener('click'  ,  filterQuestionsHandler) ;

     }


function  filterQuestionsHandler (event) { // handling clicks from each selected list

       const    clickTarget   = event.target;

       const    topicFilterValue =     clickTarget.getAttribute ( "data-filter-value")  // access values that came from a client / browser for data object handling with a safe format. from specific tag/ component on html by javascript actions during events for filter types of different category data selections , here that HTML section has some properties also

   if  ( ! topicFilterValue )    return  ;
        const  filteredQuestions =    questions.filter(item=>
         { return item.topic=== topicFilterValue } ) ;

       questions =    filteredQuestions ;    // after new filtered item ( view html) those objects replaces previous set/ html from views so browser shows those changes/ filtered types only using that state of components for display layout
       currentIndex= 0 ;  // initial value
        showQuestion ( 0) // load the single initial object / view from newly object data / also reset / update if other layout / selection also performed
  }

     fetchQuestionData ();