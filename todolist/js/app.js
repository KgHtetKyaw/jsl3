// UI
const formel = document.getElementById('form');
const inputel = document.getElementById('input');
const todoul = document.getElementById('todos');

// database ထဲက ပြန်ဆွဲထုတ်
const todos = JSON.parse(localStorage.getItem("todos"));
// console.log(todos);
// console.log(typeof todos);

if(todos){
   todos.forEach(todo => addtodo(todo));
}

formel.addEventListener('submit',(e)=>{
   // console.log('hay');

   addtodo();

   e.preventDefault();
});

function addtodo(todo) {
   // console.log('i am working');

   let todotext = inputel.value;
   // console.log(todotext);

   if(todo){
      todotext = todo.text;
   }

   if (todotext) {
      const li = document.createElement('li');

      if(todo && todo.complete){
         // add class
         li.classList.add('completed');
      }

      li.appendChild(document.createTextNode(todotext));
      // console.log(li);
      todoul.appendChild(li);
      inputel.value = '';

      // add to localstorage
      updatelocalstorage();


      li.addEventListener('click', () => {
         li.classList.toggle('completed');

         updatelocalstorage();
      });


      li.addEventListener("contextmenu", (e) => {
         // console.log('working');
         li.remove();

         updatelocalstorage();

         e.preventDefault();
      });

   } else {
      window.alert('Enter your task');
   }
}

function updatelocalstorage(){
   // console.log('working');

   let todolis = document.querySelectorAll('li');
   // console.log('todolis');

   // array ထဲသွားထည့်ဖို့
   let todos = [];

   todolis.forEach((todoli)=>{
      // console.log(todoli);
      // console.log(todoli.innerText);

      // array ထဲထည့်ဖို့ push ကိုသုံး
      todos.push({
         text:todoli.innerText,
         // object:value
         complete:todoli.classList.contains('completed')
      });
   });

   // console.log(todos);
   localStorage.setItem('todos',JSON.stringify(todos));
}


// 22NF WDF4076

