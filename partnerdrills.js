'use strict';
function changeCatPic() {
  $('.thumbnail').on('click', function(event) {
    const imgSrc = $(this).find('img').attr('src');  //this line sets a variable on the image the is clicked linking the src attribute
    const imgAlt = $(this).find('img').attr('alt');  //this line does the same as above but instead copies the alt attribute
    $('.hero img').attr('src', imgSrc).attr('alt', imgAlt);  //this line searches for the ('.hero img') class / attr and sets the old
  });                                                           
}                                                            //src : 'src' to the new one that we linked earlier and also the alt attr.
$(changeCatPic);

// url to repl.it w/ sol : https://repl.it/@juli0crypto/Cat-carousel-jQuery-1