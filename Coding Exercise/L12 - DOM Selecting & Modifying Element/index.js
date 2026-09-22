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

//2.getElementByClass

const listItems = document.getElementsByClassName('list-item');
console.log(listItems);
console.log(listItems.item(0));
console.log(listItems.item(1).innerHTML);
console.log('--------')
for (let i=0; i<listItems.length; i++){
    console.log(listItems.item(i).innerHTML);
}
console.log('--------')
for (let i=0; i<listItems.length; i++){
    console.log(listItems.item(i).textContent);
}
console.log('--------')
for (let i=0; i<listItems.length; i++){
    listItems.item(i).innerHTML = `Modified Item ${i+1}`;
}
const arrItem = Array.from(listItems);
arrItem.forEach((item) => {
    console.log(item.textContent)
});

console.log('--------')

//3.getElementsByTagName

const contents = document.getElementById('content').getElementsByTagName('p');
console.log(contents);

function contentItemStyle(){
    contents.item(0).style.color = 'red';
    contents.item(1).style.fontSize = '14px';
    contents.item(2).style.fontWeight = '700';
    contents.item(3).style.backgroundColor = 'pink';
    contents.item(3).style.color = 'white';
}
contentItemStyle();

function contentItemsStyle(){
    for(let i=0; i<contents.length; i++){
        contents.item(i).style.padding = '10px';
    }
}
contentItemsStyle();

// Removing elements to DOM

const message = document.getElementById('message');
setTimeout(() =>{
    message.remove();
}, 3000);

// Adding elements to DOM

const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is new parapgraph added dynamically.';
newParagraph.style.color = 'green';
newParagraph.classList.add('new-paragraph');
const container = document.getElementById('main');

/* 
appendChild(): Adds a new element as the last child of the parent element
insertBefore(): Inserts a new element before an existing child element.
insertAdjacentHTML(): Inserts HTML content at a specified position relative to an element
*/

//container.appendChild(newParagraph);
//container.insertBefore(newParagraph, heading);

container.insertAdjacentHTML('afterbegin','<p>See me after main begin</p>');
container.insertAdjacentHTML('afterend','<p>See me after main end</p>');
container.insertAdjacentHTML('beforebegin','<p>See me Before main begin</p>');
container.insertAdjacentHTML('beforeend','<p style=" padding-top: 10px;">See me Before main end</p>');

//4.querySelector
// Selecting Element using querSelector works both class or ID more flexibility

const subTitle =  document.querySelector('#subtitle')
console.log(subTitle.textContent);

setTimeout(() => {
    subTitle.textContent = 'New Subtitle from JS';
}, 3000);

//5.querySelectorAll
// Selecting Multiple Element using querySelectorAll

const listItemsQuery =  document.querySelectorAll('.list-item');
console.log(subTitle.textContent);

listItemsQuery.forEach((item, index) =>{
    item.textContent = `Modified Data ${index+2}`;
});