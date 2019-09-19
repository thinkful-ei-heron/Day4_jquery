/* eslint-disable no-console */
'use strict';

function fizzBuzz(countTo) {
  if (countTo < 1) return null;
  
  let response = [];
  for (let i = 1; i <= countTo; i++) {
    let pushStr = '';
    if (i % 3 === 0) pushStr += 'fizz';
    if (i % 5 === 0) pushStr += 'buzz';
    if (pushStr === '') pushStr = i;
    response.push(pushStr);
  }

  return response;
}

function main() {  
  $('.js-form').submit(function(event) {
    event.preventDefault();
    $('.js-results').empty();    
    const userTextElement = $(event.currentTarget).find('#number-choice');
    const seqArray = fizzBuzz(`${userTextElement.val()}`);

    seqArray.forEach(function (elem) {
      let class2 = '';
      if (elem === 'fizz') class2 = ' fizz';
      else if (elem === 'buzz') class2 = ' buzz';
      else if (elem === 'fizzbuzz') class2 = ' fizzbuzz';
      $('.js-results').append(
        `<div class = "fizz-buzz-item${class2}">
          ${elem}
        </div>`
      );
    });
  });
}

$(main);
