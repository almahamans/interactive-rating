const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const btn = document.getElementById('btn');

let ratingTxt = document.querySelector('.selectedRating');
let sec1 = document.getElementById('section1');
let sec2 = document.getElementById('section2');
sec2.style.display = 'none';

let rating = 0;
one.addEventListener('click', ()=> {
    rating = 1;
    one.style.background='hsl(25, 97%, 53%)';
    two.style.background='hsl(206, 6%, 23%)';
    three.style.background='hsl(206, 6%, 23%)';
    four.style.background='hsl(206, 6%, 23%)';
    five.style.background='hsl(206, 6%, 23%)';
    one.style.color='white';
});
two.addEventListener('click', ()=> {
    rating = 2;
    two.style.background='hsl(25, 97%, 53%)';
    one.style.background='hsl(206, 6%, 23%)';
    three.style.background='hsl(206, 6%, 23%)';
    four.style.background='hsl(206, 6%, 23%)';
    five.style.background='hsl(206, 6%, 23%)';
    two.style.color='white';
});
three.addEventListener('click', ()=> {
    rating = 3;
    three.style.background='hsl(25, 97%, 53%)';
    two.style.background='hsl(206, 6%, 23%)';
    one.style.background='hsl(206, 6%, 23%)';
    four.style.background='hsl(206, 6%, 23%)';
    five.style.background='hsl(206, 6%, 23%)';
    three.style.color='white';
});
four.addEventListener('click', ()=> {
    rating = 4;
    four.style.background='hsl(25, 97%, 53%)';
    two.style.background='hsl(206, 6%, 23%)';
    three.style.background='hsl(206, 6%, 23%)';
    one.style.background='hsl(206, 6%, 23%)';
    five.style.background='hsl(206, 6%, 23%)';
    four.style.color='white';
});
five.addEventListener('click', ()=> {
    rating = 5;
    five.style.background='hsl(25, 97%, 53%)';
    two.style.background='hsl(206, 6%, 23%)';
    three.style.background='hsl(206, 6%, 23%)';
    four.style.background='hsl(206, 6%, 23%)';
    one.style.background='hsl(206, 6%, 23%)';
    five.style.color='white';
});

btn.addEventListener('click', ()=>{
    sec1.style.display = 'none';
    sec2.style.display = 'block';
    ratingTxt.innerHTML = `You selected ${rating} out of 5`;
});