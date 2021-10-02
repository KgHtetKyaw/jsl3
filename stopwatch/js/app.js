// UI
const display = document.querySelector(".display");
const startbtn = document.querySelector('.start');
const pausebtn = document.querySelector('.pause');
const resetbtn = document.querySelector('.reset');

// use variable(Method 1)
// let milliseconds = 0,
//     seconds = 0,
//     minutes = 0,
//     hours = 0;

// use array(Method 2)
let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
// console.log(seconds);


// Event Listener
startbtn.addEventListener('click',starttimer);
pausebtn.addEventListener('click',pausetimer);
resetbtn.addEventListener('click',resettimer);

// Global Scope ကြေညာပေး / အောက်မှာ ပြန်ခေါ်သုံးဖို့
let time;

// Start Timer
function starttimer(){
    // console.log('starttimer');

    // 10ms တိုင်းမှာ reload ဖြစ်နေတဲ့ အတွက် click ခေါက်တိုင်းမှာ 10msစာ မြန်နေတာကို ဖြေရှင်းဖို့ condition စစ်ထုတ်
    // time က အလုပ်လုပ်နေတယ်ဆိုရင် clearInterval() လုပ်ပစ်
    if(time !== null){
        clearInterval(time);
    }

    time = setInterval(displaytimer,10);
    // click ခေါက်တဲ့ 10 millisecons တိုင်းမှာ reload လုပ်စေချင်လို့ setInterval function နဲ့သုံး
    // console.log(time);
}

function pausetimer(){
    // console.log('pausetimer');

    clearInterval(time);
}

function resettimer(){
    // console.log('resettimer');

    clearInterval(time);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    display.textContent = "00 : 00 : 00 : 000"
}


// Display Timer
function displaytimer(){
    // console.log('hay i am working');

    milliseconds += 10;
    // console.log(milliseconds);

    if(milliseconds === 1000){
        milliseconds = 0;
        // console.log(milliseconds);

        // seconds += 1;
        seconds++;
        // console.log(seconds);

        if(seconds === 60){
            seconds = 0;
            // console.log(seconds);

            minutes++;
            // console.log(minutes);

            if(minutes === 60){
                minutes = 0;
                // conole.log(minutes);

                hours++;
                // console.log(hours);
            }
        }
    }

    let h = hours < 10 ? "0"+hours :hours;
    let m = minutes < 10 ? "0"+minutes :minutes;
    let s = seconds < 10 ? "0"+seconds :seconds;
    let ms = milliseconds < 10 ? "00"+milliseconds : milliseconds < 100 ? "0"+milliseconds :milliseconds;

    display.textContent = `${h} : ${m} : ${s} : ${ms}`;
}