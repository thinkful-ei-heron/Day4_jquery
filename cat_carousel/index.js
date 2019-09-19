/* eslint-disable no-console */
'use strict';

function main() {
  $('.thumbnail').click(function(event) {
    let targetImage = $(event.currentTarget).find('img').attr('src');
    $('.hero img').attr('src', targetImage);
  });
}

$(main);
