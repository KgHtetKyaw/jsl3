// UI
const picdiv = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

picdiv.addEventListener('dragstart',dragstart);
picdiv.addEventListener('dragend',dragend);

// Drag Start
function dragstart(){
    // console.log('drag start is working');

    // this.classList.add('hold');
    // or (assignment operator နဲ့ သုံးပြ)
    this.className += " hold";

    setTimeout(()=>{
        this.className = "invisible";
    },0);
}

// console.log(empties);

// forEach loop
empties.forEach(empty=>{
    // console.log(empty);

    empty.addEventListener('dragover',dragover);
    empty.addEventListener('dragenter',dragenter);
    empty.addEventListener('dragleave',dragleave);
    empty.addEventListener('drop',dragdrop);

});

// => ES6 .can looping object5-specific iterator value (for of loop)=> element တစ်ကြောင်းလုံးထွက်
// for (const empty of empties){
//      console.log(empty);
// empty.addEventListener('dragover',dragover);
// empty.addEventListener('dragenter',dragenter);
// empty.addEventListener('dragleave',dragleave);
// empty.addEventListener('drop',dragdrop);
// }


// => numerable property name of an object (for in loop)
// for (const empty in empties){
//      console.log(empty);
// }


// Drag End
function dragend(){
    // console.log('drag end is working');

    this.className = "fill";

}


function dragover(e){
    // console.log('drag over');
    e.preventDefault();

}

function dragenter(e){
    // console.log('drag enter');
    e.preventDefault(); // ပြောင်းလဲမှုကို ဖော်ပြပေးချင်လို့

    this.className += " hovered";

}

function dragleave(e){
    // console.log('drag leave');
    e.preventDefault();

    this.className = "empty";

}

function dragdrop(e){
    // console.log('drag drop');

    this.className = "empty";
    this.append(picdiv);

}

// 25DND