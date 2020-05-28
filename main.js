let sliderImages=Array.from(document.querySelectorAll(".slider-container img")),
   slideCount=sliderImages.length,
  currentSlide=2;
  //slide-number --> string elemnts
  let slideNumberElement=document.getElementById("slide-number");
   
  //previous and next button 
  let prevButton=document.getElementById("prev"),nextButton=document.getElementById("next");


   // handle previous and next 
   nextButton.addEventListener("click",nextSlide);
   prevButton.addEventListener("click",previousSlide);
  




// create the main ul elemnts 

let indicators=document.getElementById('indicators'),
 ul=document.createElement("ul"),
li=[];

//add attribuitte ID
ul.id="pagination-ul";

// create les element de pagination 
for (let index = 0; index < slideCount; index++) {
    let a=document.createElement("li")
    a.textContent=index+1;
    a.setAttribute("data-index",index+1)
    li.push(a);
    console.log( a.firstChild.nodeType)
}

 // ajoueter les elements de pagination 
for (let index = 0; index < li.length; index++) {

    ul.appendChild(li[index])
}

 indicators.appendChild(ul)

let paginationElement=Array.from( document.getElementById('pagination-ul').children);

paginationElement.forEach(element => {
    element.addEventListener('click',(e)=>{
       currentSlide=parseFloat(e.currentTarget.textContent)
       checker();
    })
});

// get the new ul created 


checker();




  // slide next previous 
  function nextSlide(){
    if(currentSlide<slideCount){
    currentSlide++;
    }
     checker()
  }
  function previousSlide(){
      if(currentSlide>1){
      currentSlide--;
      }
      checker()
 }

 //checker function 
 function checker(){

    removeActive();
     //
     slideNumberElement.textContent="slide #"+currentSlide+' of '+slideCount;
     //active class on current pagination
     ul.children[currentSlide-1].classList.add('active');
     //acive class on current slide
     sliderImages[currentSlide-1].classList.add('active');
    
     if(currentSlide==1){
         prevButton.classList.add('disabled')
     }else  {
        prevButton.classList.remove('disabled')
     }


     if(currentSlide==slideCount){
        nextButton.classList.add('disabled')
    }else  {
       nextButton.classList.remove('disabled')
    }

   // removeActive();
 }

 //remove all active classes 
 function removeActive(){

  sliderImages.forEach(images => {
      images.classList.remove('active')
  });


  paginationElement.forEach(element => {
      element.classList.remove('active')
  });
}

 