const searchBtn = document.querySelector('.search-btn');
const searchContainer = document.querySelector('.header__search-container');

const dHamburgerMenu = document.querySelector('.header__hamburger-menu-container');
const hamburger = document.querySelector('.hamburger');

const btnDottsMenu = document.querySelector('.btn-dotts-menu');
const dDottsMenu = document.querySelector('.header__dotts-menu-container');

const mobMenu = document.querySelector('.mob-menu');

/*
  строка поиска
*/



const searchInput = document.querySelector('input[name = "search-string"]');
const searchSendBtn = document.querySelector('.search-send');

searchInput.addEventListener('input', function(){
  if (this.value.length){
    searchSendBtn.removeAttribute('disabled');

  } else{
    searchSendBtn.setAttribute('disabled', 'disabled');
  }
})

/*
  КОНЕЦ: строка поиска
*/


if ( searchBtn ){
  searchBtn.addEventListener('click', function(){
    const windowWidth = document.documentElement.clientWidth;

    if (windowWidth > 700){

      if (  !this.classList.contains('open') ){
        
        if (hamburger.classList.contains('open')){
          hamburger.classList.remove('open');
          dHamburgerMenu.classList.remove('open');
        }
        
        if ( dDottsMenu.classList.contains('open') ){
          btnDottsMenu.classList.remove('open');
          dDottsMenu.classList.remove('open');
        }

        this.classList.add('open');
        searchContainer.classList.add('open');



      } else{
        this.classList.remove('open');
        searchContainer.classList.remove('open');
      }
    } else{
      if (  !this.classList.contains('open') ){
        this.classList.add('open');
        searchContainer.classList.add('open');

        mobMenu.classList.remove('open');
        hamburger.classList.remove('open');
        document.body.classList.remove('no-scroll')
      } else{
        this.classList.remove('open');
        searchContainer.classList.remove('open');
      }
    }
  })
}


if ( hamburger ){
  hamburger.addEventListener('click', function(){

    const windowWidth = document.documentElement.clientWidth;

    if (windowWidth > 700){
      if (  !this.classList.contains('open') ){

        if (searchBtn.classList.contains('open')){
          searchBtn.classList.remove('open');
          searchContainer.classList.remove('open');
        }
        
        if ( dDottsMenu.classList.contains('open') ){
          btnDottsMenu.classList.remove('open');
          dDottsMenu.classList.remove('open');
        }
  
  
        this.classList.add('open')
        dHamburgerMenu.classList.add('open');
      } else{
        this.classList.remove('open');
        dHamburgerMenu.classList.remove('open');
      }
    } else{
      if (  !this.classList.contains('open') ){
        this.classList.add('open');
        mobMenu.classList.add('open');
        document.body.classList.add('no-scroll');
        searchBtn.classList.remove('open');
        searchContainer.classList.remove('open');

      } else{
        this.classList.remove('open');
        mobMenu.classList.remove('open');
        document.body.classList.remove('no-scroll');
      }
            
    }

    
  })
}

if ( btnDottsMenu ){
  btnDottsMenu.addEventListener('click', function(){

    if (  !this.classList.contains('open') ){

      if (searchBtn.classList.contains('open')){
        searchBtn.classList.remove('open');
        searchContainer.classList.remove('open');
      }
      if (hamburger.classList.contains('open')){
        hamburger.classList.remove('open');
        dHamburgerMenu.classList.remove('open');
      }


      this.classList.add('open')
      dDottsMenu.classList.add('open');
    } else{
      this.classList.remove('open');
      dDottsMenu.classList.remove('open');
    }
  })
}


window.addEventListener('resize', function(){
  if (hamburger.classList.contains('open')){
    hamburger.classList.remove('open');
    dHamburgerMenu.classList.remove('open');
  }
  
  if ( dDottsMenu.classList.contains('open') ){
    btnDottsMenu.classList.remove('open');
    dDottsMenu.classList.remove('open');
  }

  if (searchBtn.classList.contains('open')){
    searchBtn.classList.remove('open');
    searchContainer.classList.remove('open');
  }

  mobMenu.classList.remove('open');
  document.body.classList.remove('no-scroll');
})

let linkList = new Swiper(".hash-tags", {
  speed: 1000,
  slidesPerView: 'auto',
  
  observer: true,
  
})

let topNews = new Swiper(".top-news", {
    speed: 1000,
    autoplay: {
        delay: 6000,
    },
    slidesPerView: 1,
    spaceBetween: 20,
  
    
    navigation: {
        nextEl: '.top-news-next',
        prevEl: '.top-news-prev',
    },
    breakpoints: {
        420: {
          slidesPerView: 1.5,
          spaceBetween: 20
        },
        640: {
            slidesPerView: 2.3,
            spaceBetween: 20
        },
        800: {
            slidesPerView: 3,
            spaceBetween: 20
        }
    }
})

let videoNews = new Swiper(".video-news", {
  speed: 1000,
  autoplay: {
      delay: 5000,
  },
  slidesPerView: 1,
  spaceBetween: 20,

  
  navigation: {
      nextEl: '.video-news-next',
      prevEl: '.video-news-prev',
  },
  breakpoints: {
    420: {
      slidesPerView: 1.5,
      spaceBetween: 20
    },
    640: {
        slidesPerView: 2.3,
        spaceBetween: 20
    },
    800: {
        slidesPerView: 3,
        spaceBetween: 20
    }
  }
})



let posters = new Swiper(".posters", {
  speed: 1000,
  autoplay: {
      delay: 5000,
  },
  slidesPerView: 1,
  spaceBetween: 20,
  
  
  navigation: {
      nextEl: '.posters-next',
      prevEl: '.posters-prev',
  },
  breakpoints: {
    420: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    620: {
        slidesPerView: 2.3,
        spaceBetween: 20
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 20
  },
    1024: {
        slidesPerView: 4,
        spaceBetween: 20
    }
  }
})



/*Форма голосования*/


const surveyForm = document.querySelector('.survey-form');
const surveyResults = document.querySelector('.survey-results')

if ( surveyForm ) {
  surveyForm.addEventListener( 'submit', function(event){
    event.preventDefault();

    let voice = this.querySelector('input[name="variants"]:checked');
    
    let data_body = "voice=" + voice.value; 
    fetch("script-name.php", {
        method: "POST",
        body: data_body,
        headers:{"content-type": "application/x-www-form-urlencoded"} 
    })
    .then( (response) => {
        if (response.status !== 200) {
            return Promise.reject();
        }
        /*
        this.classList.add('hide');  
        surveyResults.classList.remove('hide');*/
        return response.text()
    })
    .then(i => console.log(i))
    .catch(() => {
      
      console.log('ошибка');

      this.classList.add('hide');  
      surveyResults.classList.remove('hide');
    });
    

    
  } )
}

const surveyRadios = document.querySelectorAll('.survey-form input[type="radio"]');
const  surveyResultBlock = document.querySelectorAll('.survey-results__block');
const reSurvey = document.querySelector('.survey-results__resurvey');


if ( surveyRadios.length ){

  surveyRadios.forEach( (radio, index) => {
    radio.addEventListener( 'change', function(){
      surveyResultBlock.forEach( block => {
        block.classList.remove('selected');
      })

      surveyResultBlock[index].classList.add('selected');

    } )


    reSurvey.addEventListener('click', function(){
      surveyForm.classList.remove('hide');
      surveyResults.classList.add('hide');
    })

  })

}

/*
  КОНЕЦ:
  Форма голосования

  
*/


const selectFeedbackTypeNode = document.querySelector('.select-cat-articles');

if ( selectFeedbackTypeNode ){
  const selectFeedbackType = new Choices(selectFeedbackTypeNode, {
    searchEnabled: false,
    itemSelectText: '',
  });
}
  




const filterArticlesDate = document.querySelector('.filter-articles__date');

if ( filterArticlesDate ){
   

  
  
  
  const calendarIcons = document.querySelector('.filter-articles__icon');
  
  if ( calendarIcons ) {
    let input = document.querySelector('input[name="articles-date"]');
    
    calendarIcons.addEventListener('click', function(){

      console.log('sd');
      lPicker.show();
    })
    
  }



}




const newsTabs = document.querySelectorAll('.news-tabs__tab');

if ( newsTabs.length ){

  newsTabs.forEach( tab => {
    tab.addEventListener('click', function(){
      if ( !this.classList.contains('active') ){
        let index = this.getAttribute('data-index');
        let parent = this.closest('.news-tabs');

        parent.querySelector('.news-tabs__tab.active').classList.remove('active');
        this.classList.add('active');

        parent.querySelector('.sheet.active').classList.remove('active');

        const activeSheet = parent.querySelector('.sheet[data-index="' + index + '"]');
        activeSheet.classList.add('active');
        
        const sheets = parent.querySelector('.sheets');
        const sheetsContainer = parent.querySelector('.sheets-container');

        if ( sheets && sheetsContainer.getAttribute('data-state') === '1' ){
          sheets.style.height = activeSheet.offsetHeight + 'px';
        }


      }
    })
  } )



}


  const lightning = document.querySelector('.lightning__tape--inner');
  const lightningTape = document.querySelector('.lightning__tape');
  let lightningIsPlay = true;
  const sLightning = document.querySelector('.s-lightning')




  if ( lightning ){
    let width = lightning.offsetWidth;
    let i = 0;
  
    sLightning.addEventListener('mouseenter', function(){
      lightningIsPlay = false;
    });
    sLightning.addEventListener('mouseleave', function(){
      lightningIsPlay = true;
    });


    

    setInterval( ()=>{

      if ( lightningIsPlay){
        i--;

        if ( ( i * (-1) ) > (width * 1.1)  ){
          i = lightningTape.offsetWidth ;

        }

      }

      
      lightning.style.transform = 'translate(' +i+ 'px, 0)';
    }, 15 )
  }





//.sheets-rd-btn-container

//sheets


let sheetsRDBnts = document.querySelectorAll('.sheets-rd');

if ( sheetsRDBnts.length ){

  window.addEventListener('resize', function(){

    const sheetsContainers = document.querySelectorAll('.sheets-container');
    sheetsContainers.forEach( sc => {
      sc.removeAttribute('data-state')
    } )

    const sheets = document.querySelectorAll('.sheets');

    sheets.forEach( shs => {
      shs.removeAttribute('style');
    } )

    sheetsRDBnts.forEach( btn => {
      btn.innerHTML = 'Развернуть';
    })
  })



  sheetsRDBnts.forEach( btn => {


    btn.addEventListener('click', function(){
      const sheetsContainer = this.closest('.sheets-container');
      const activeSheet = sheetsContainer.querySelector('.sheet.active');
      const sheets = sheetsContainer.querySelector('.sheets');
      
      if ( sheetsContainer.getAttribute('data-state') !== '1'){
        sheetsContainer.setAttribute('data-state', '1');
        sheets.style.height = activeSheet.offsetHeight + 'px';
        this.innerHTML = 'Свернуть';
      } else{
        this.innerHTML = 'Развернуть';
        sheets.style.height = 0 + 'px';
        sheetsContainer.setAttribute('data-state', '0');
      }
    })

    



    

  
  } )
}


let dateField = document.querySelector('input[name="articles-date"]');

if (dateField){
  var lPicker = new Lightpick({
    field: document.querySelector('input[name="articles-date"]'),
    singleDate: false,
    onOpen: function(){
      let lightPick = document.querySelector('.lightpick');
      let field = document.querySelector('input[name="articles-date"]');
      lightPick.style.width = field.offsetWidth + 'px';
    }
  });
  
}




const openFilterBtn = document.querySelector('.filter-articles__open');

if ( openFilterBtn ){

  const parent = openFilterBtn.closest('.filter-articles');      
  const inner = parent.querySelector('.filter-articles__inner');
  const form = parent.querySelector('.filter-articles__form');


  function removeOverflowHidden(){
    inner.style.overflow = 'initial';
    inner.removeEventListener('transitionend', removeOverflowHidden);
  }

  function setOverflowHidden(){
    inner.style.overflow = 'hidden';
    
  }

  window.addEventListener('resize', function(){
    parent.removeAttribute('data-state');
    inner.setAttribute('style', '');
    inner.addEventListener('transitionend', removeOverflowHidden);
  });


  openFilterBtn.addEventListener('click', function(){
    
    


    if (parent.getAttribute('data-state') !== '1'){
      parent.setAttribute('data-state', '1');
      inner.addEventListener('transitionend', removeOverflowHidden);
      inner.style.height = form.offsetHeight + 'px';

      

    } else{
      parent.setAttribute('data-state', '0');
      setOverflowHidden();
      inner.style.height = 0 + 'px';
    }

  })
}

