// UI
const checkbox = document.getElementById('toggle'),
    slider = document.getElementById('slider');

const basic = document.querySelector('.basic');
const prof = document.querySelector('.prof');
const master = document.querySelector('.master');

// Event Listener
slider.addEventListener('click',()=>{
    // console.log('success');

    if(!checkbox.checked){
        // console.log('ok');
        basic.innerText = 110;
        prof.innerText = 230;
        master.innerText = 350;
    }else{
        // console.log('no');
        [basic.textContent,prof.textContent,master.textContent] = [9.99,19.99,29.99];
    }
});