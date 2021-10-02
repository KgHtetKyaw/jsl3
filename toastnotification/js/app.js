// UI
const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
    'Message Five'
];

// Event Listener

// Method 1
// button.addEventListener('click',()=>createnotification());

// function  createnotification(){
//     // console.log('hay');
//
//     const notify = document.createElement('div');
//     // console.log(notifi);
//     notify.classList.add('toast');
//     notify.innerText = getrandommessage();
//     // console.log(notify);
//
//     toasts.appendChild(notify);
//
//     setTimeout(()=>{
//         notify.remove();
//     },3000);
// }

// Method 2
// button.addEventListener('click',()=>createnotification('can\'t access','success'));
// button.addEventListener('click',()=>createnotification('can\'t access','danger'));
button.addEventListener('click',()=>createnotification());

function  createnotification(message,type){
    // console.log('hay');

    const notify = document.createElement('div');
    // console.log(notifi);
    notify.classList.add('toast');
    notify.classList.add(type ? type : 'info');
    notify.innerText = message ? message : getrandommessage();
    // console.log(notify);

    toasts.appendChild(notify);

    setTimeout(()=>{
        notify.remove();
    },3000);
}

function getrandommessage(){
    return messages[Math.floor(Math.random()*messages.length)];
}

// console.log(getrandommessage());

// 5TN WDF4076