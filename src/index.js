import './style.scss'
import printMe from './print.js'



function component(){
  const element = document.createElement('div');
  element.innerHTML = "Hello Webpack!";
  element.classList.add('hello');
  
  const btn = document.createElement('button');
  btn.textContent = 'Click me!';
  btn.addEventListener('click', printMe);
  
  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());