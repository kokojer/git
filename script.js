const inputFirst = document.querySelector('input:first-of-type');
const inputs = document.querySelectorAll('input:not(:first-of-type)');
const p = document.querySelector('p')
// const button = document.querySelector('button')



inputFirst.addEventListener('blur', () =>{
        sum = 0;
        p.textContent = new Date().getFullYear() - inputFirst.value;
        console.log();
    console.log('4124');

        
    })