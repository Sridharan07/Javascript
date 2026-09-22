/*
Document Object Model (DOM) manipulation
The following the way to Selecting & Modifying Element in DOM
1.getElementById
2.getElementsByClassName
3.getElementsByTagName
4.querySelector
5.querySelectorAll
*/

//1.getElementById

const heading = document.getElementById('main-heading');
console.log(heading);

console.log(heading.innerHTML); // Outputs the HTML content inside the element
console.log(heading.textContent); // Outputs the Content inside the element.

//Chaning the value
heading.innerHTML = 'See, Im from the planet Earth';

function changeHeading(){
    setTimeout(() =>{
        heading.textContent = 'See, Im from the planet Mars';
    }, 4000);
}
changeHeading();

