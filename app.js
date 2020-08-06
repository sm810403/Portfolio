//loading 
window.addEventListener('load', ()=>{
    const loader = document.querySelector('.loader');
    setTimeout(()=>{
        loader.classList.add('loader-finish')}, 3100);
    clearTimeout();
});

const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click',(e)=>{
    document.querySelector('.nav-side').classList.add('side-tog');
})
const closeX = document.querySelector('.closeX');
closeX.addEventListener('click', ()=>{
    document.querySelector('.nav-side').classList.remove('side-tog');
})