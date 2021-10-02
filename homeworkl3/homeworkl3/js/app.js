// UI
const background = document.getElementById('background');

const username = document.getElementById('username');

const password = document.getElementById('password');

const form = document.getElementById('form');

const eyeicon = document.getElementById('eye');

const containerpass = document.getElementById('container-pass');

const display = document.querySelector('.display');

const goto = document.getElementById('goto');

const title = document.getElementById('title');

const containerstopwatch = document.querySelector('.container-stopwatch');

const showcontainertodolist = document.querySelector('.container-todolist');

// todolist
const todoform = document.getElementById('todoform');
const todolist = document.getElementById('todolist');
const todoul = document.getElementById('todoul');


// Event Listener
password.addEventListener('input',(e)=>{

   const input = e.target.value;
   const inputlength = input.length;
   
   const blurvalue = 20 - inputlength * 2;

   background.style.filter = `blur(${blurvalue}px)`;
});

eyeicon.addEventListener('click',()=>{
   // console.log('success');
    if(eyeicon.classList.contains('fa-eye')){
        eyeicon.classList.replace('fa-eye','fa-eye-slash');
        
        password.setAttribute('type','text');
    }else{
        eyeicon.classList.replace('fa-eye-slash','fa-eye');

        password.setAttribute('type','password');
    }
});

let time;

// Stop Watch
let [milliseconds,seconds] = [0,0];

form.addEventListener('submit',(e)=>{
      if(password.value === '1234567890'){
         // console.log('success');
         containerpass.classList.add('move');
         // console.log(containerpass);

         document.querySelector('.container-stopwatch').classList.add('move');
      }

      e.preventDefault();
});

goto.addEventListener('click',()=>{
   // console.log('success');
    title.textContent = 'Wait for 10 seconds';
    // starttimer();

    // displaytimer();
    time = setInterval('displaytimer()',10);

    // if(seconds === 10){
    //     showcontainertodolist.classList.add('show');
    // }
   
});


function displaytimer(){
    milliseconds += 1;
    if(milliseconds === 100){
        milliseconds = 0;
        seconds++;

        if(seconds === 10){
            seconds = 10;
            pause();

            containerstopwatch.classList.add('hide');

            showcontainertodolist.classList.add('show');

        }
    }

    let s = seconds < 10 ? "0"+seconds : seconds;
    let ms = milliseconds < 10 ? "0"+milliseconds : milliseconds;

    display.textContent = `${s} : ${ms}`;
}

function pause(){
    clearInterval(time);
}


// todolist
const todos = JSON.parse(localStorage.getItem('todos'));
// console.log(todos);
// console.log(typeof todos);

if(todos){
    todos.forEach(todo => addtodo(todo));
}

todoform.addEventListener('submit',(e)=>{
    addtodo();

    e.preventDefault();

    updatelocalstorage();
});

function addtodo(todo){
    let todotext = todolist.value;

    if(todo){
        todotext = todo.text;
    }

    
    if(todotext){
        const li = document.createElement('li');
        // console.log(li);

        if(todo && todo.complete){
            li.classList.add('completed');
        }

        li.appendChild(document.createTextNode(todotext));
        todoul.appendChild(li);
        todolist.value = '';

        li.addEventListener('click',()=>{
            li.classList.toggle('completed');

            updatelocalstorage();
        });

        li.addEventListener('contextmenu',(e)=>{
            li.remove();

            updatelocalstorage();

            e.preventDefault();
        });
    }else{
        window.alert('Enter your todo');
    }
}

function updatelocalstorage(){
    let todolis = document.querySelectorAll('li');

    let todos = [];

    todolis.forEach(todoli => {
        todos.push({
            text:todoli.innerText,
            complete:todoli.classList.contains('completed')
        });
    });

    localStorage.setItem('todos',JSON.stringify(todos));
}