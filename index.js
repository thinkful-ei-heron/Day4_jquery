/* eslint-disable strict */
function fizzbuzz(num) {
  if(num % 15 === 0) return 'fizzbuzz';
  else if(num % 5 === 0) return 'buzz';
  else if(num % 3 === 0) return 'fizz';
  else return num;
}
function generateFizzItemHtml(fizzResult) {
  let fizzClass = '';
  if(typeof fizzResult === 'string') {
    fizzClass = fizzResult;
  }
  return `
  <div class="fizz-buzz-item ${fizzClass}">
    <span>${fizzResult}</span>
    </div>
  `;
}

function handleSubmit() {
  $('#number-chooser').on('submit', event => {
    event.preventDefault();
    const countTo = $('#number-choice').val();
    $('#numberChoice').val();
    const fizzBuzzResults = [];
    for(let i = 1 ; i <= countTo; i++) {
      fizzBuzzResults.push(fizzbuzz(i));
    }
    const html = fizzBuzzResults.map(result => generateFizzItemHtml());
    $('js-results').html(html.join());
  });
}

$(handleSubmit);