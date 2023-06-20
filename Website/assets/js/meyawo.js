/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});


//javascript code
const counter = document.querySelector(".counter-number");

async function updateCounter() {
  try {
    const response = await fetch('https://qecwjpkb80.execute-api.us-east-1.amazonaws.com/dev', {
      method: 'POST'
    });
    const data = await response.text();

    if (response.ok) {
      counter.innerHTML = `Views: ${data}`;
    } else {
      console.log('Error:', response.status);
    }
  } catch (error) {
    console.log('Error:', error);
  }
}

updateCounter();


