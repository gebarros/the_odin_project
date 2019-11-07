const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const p = document.createElement('p');
p.style.color = 'red';
p.textContent = 'I\'m red';

container.appendChild(p);

const h3 = document.createElement('h3');
h3.style.color = 'blue';
h3.textContent = "I'm blue!";

container.appendChild(h3);

const div = document.createElement('div');

const h1 = document.createElement('h1');
h1.textContent = "I'm a div!";

const p2 = document.createElement('p');
p2.textContent = "ME TOO!";

div.appendChild(h1);
div.appendChild(p2);

div.setAttribute('style', 'border: black; background: pink');

container.appendChild(div);

var btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    alert("Hello World");
});

