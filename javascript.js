const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const p = document.createElement('p');
p.classList.add('p');
p.textContent = "Hey I'm red!";
p.style.color = "red"
container.appendChild(p);

const h3 = document.createElement('h3')
h3.textContent = "I'm a blue h3"
h3.style.color = "blue"
container.appendChild(h3);

const blackPink = document.createElement('div')
blackPink.style.cssText = "background-color: pink; border: 2px solid black;"

const h1 = document.createElement('h1')
h1.textContent = "I'm in a div"
blackPink.appendChild(h1)

const p2 = document.createElement('p')
p2.textContent = "ME TOO!"
blackPink.appendChild(p2)


container.appendChild(blackPink)

const btn = document.querySelector('#btn');
btn.addEventListener('click', function (e) {
  e.target.style.background = 'blue';
});
