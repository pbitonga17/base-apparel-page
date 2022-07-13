'use strict';

const submitBtn = document.querySelector('#submit');
const warningSign = document.querySelector('.hidden');
const form = document.querySelector('form');
const email = document.querySelector('#email');


submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const validEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (email.value.match(validEmail)) {
        console.log(`true`);
        form.style.border = '1px solid hsl(0, 36%, 70%)';
        warningSign.classList.add('hidden');
    } else if(!email.value.match(validEmail) || email.value === '') {
        console.log(`false`);
        form.style.border = '2px solid red';
        warningSign.classList.remove('hidden');
    }
})