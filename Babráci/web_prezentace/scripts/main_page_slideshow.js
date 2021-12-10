//tlacitka
const prevBtn = document.querySelector('#left-arrow');
const nextBtn = document.getElementById('right-arrow');
const image = document.querySelector('#budova');

//counter
let counter = 1;

let arr = [
    "/images/antivirus_rozhrani_2.png",
    "/images/antivirus_rozhrani.png", 
    "/images/obrazek_budova.png"
];

//tlacitkalistener
nextBtn.addEventListener('click',()=>{
    counter = (counter+1) % arr.length;
    image.src = arr[counter]; 
});
prevBtn.addEventListener('click',()=>{
    
    counter = (counter-1) % arr.length;
    if (counter < 0) {
        counter = arr.length - 1;
    }
    console.log(counter);
    image.src = arr[counter]; 
});