const button = document.getElementById('button');
console.log(button);

button.addEventListener('click', () => {
    // console.log('Button is clicked');
    alert('Button is clicked');
});

button.addEventListener('mouseover', () => {
    button.classList.add('buttonHover');
});

button.addEventListener('mouseout', () => {
    button.classList.remove('buttonHover');
});

// document.addEventListener('keydown', (event) => {
//     if(event.key === 'Enter'){
//         alert('Enter is pressed');
//     }
// });

// document.addEventListener('keypress', (event) =>{
//     if(event.key === 'Enter'){
//         alert('Enter is pressed');
//     }
// });

document.addEventListener('keyup', (event) =>{
    if(event.key === 'Enter'){
        alert('Enter is pressed');
    }
});

document.addEventListener('keydown', (event) => {
    if(event.shiftKey){
        alert('Shift is pressed');
    }
});

document.addEventListener('keydown', (event) => {
    if(event.ctrlKey){
        alert('Ctrl is pressed');
    }
});

document.addEventListener('keydown', (event) => {
if (event.key >= 'a' && event.key <='z'){
    alert(`Alphabetical Key '${event.key}' is pressed`);
}
});

document.addEventListener('keydown', (event) => {
    if (event.key >= '0' && event.key <='9'){
        alert(`Alphabetical Key '${event.key}' is pressed`);
    }
    });