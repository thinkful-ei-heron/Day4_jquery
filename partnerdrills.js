'use strict';
function changeCatPic() {
  $('.thumbnail').on('click', function(event) {
    const imgSrc = $(this).find('img').attr('src');  
    const imgAlt = $(this).find('img').attr('alt');         //Spent 30 mins on this one, couldn't solve. also
    $('.hero img').attr('src', imgSrc).attr('alt', imgAlt);  //meant to be accompanied with html and css files from replt.it
  });                                                           // url to repl.it w/ sol : https://repl.it/@juli0crypto/Cat-carousel-jQuery-1
}
$(changeCatPic);