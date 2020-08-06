window.addEventListener('load', ()=>{
    const loader = document.querySelector('.loader');
    setTimeout(()=>{
        loader.classList.add('loader-finish')}, 3100);
    clearTimeout();
});