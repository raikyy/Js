let element = document.createElement('div');
element.textContent = 'Текст внутри контейнера';
document.body.appendChild(element);

let button = document.createElement('button');
button.textContent = 'Применить';
document.body.appendChild(button); 

let title = document.querySelector('#title');
element.addEventListener('click', function() {
    title.style.textTransform = 'uppercase';
})

let block = document.createElement('div');
block.textContent = 'Блок создан при клике на кнопку';

button.addEventListener('click', function(){
    document.body.appendChild(block);
})

block.addEventListener('click', function(){
    block.style.paddingTop = '20px';
    block.style.color = 'red';
})