//increament timer every second when loading page 
document.addEventListener('DOMContentLoaded', () =>{
const counter = document.getElementById('counter');
let count = 0;
let timer = setInterval(() => {
  counter.innerText = ++count;
}, 1000);

//increment and Dcrement Buttons 
const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');

plusButton.addEventListener('click', () => {
  counter.innerText = ++count;
});

minusButton.addEventListener('click', () => {
  counter.innerText = --count;
});
//like 
const likesUl = document.querySelector('.likes');
const heartButton = document.getElementById('heart');
let likes = {};

heartButton.addEventListener('click', () => {
  let num = counter.innerText;
  likes[num] = (likes[num] || 0) + 1;
  let li = document.querySelector(`li[data-num="${num}"]`);
  if (li) {
    li.innerText = `${num} has been liked ${likes[num]} times`;
  } else {
    li = document.createElement('li');
    li.setAttribute('data-num', num);
    li.innerText = `${num} has been liked 1 time`;
    likesUl.appendChild(li);
  }
});
//pause and resume 
const pauseButton = document.getElementById('pause');

pauseButton.addEventListener('click', () => {
  if (pauseButton.innerText === 'pause') {
    clearInterval(timer);
    plusButton.disabled = true;
    minusButton.disabled = true;
    heartButton.disabled = true;
    pauseButton.innerText = 'resume';
  } else {
    timer = setInterval(() => {
      counter.innerText = ++count;
    }, 1000);
    plusButton.disabled = false;
    minusButton.disabled = false;
    heartButton.disabled = false;
    pauseButton.innerText = 'pause';
  }
});
//comment
const commentForm = document.getElementById('comment-form');
const commentInput = document.getElementById('comment-input');
const commentsDiv = document.getElementById('list');

commentForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const newComment = document.createElement('div');
  newComment.textContent = commentInput.value;
  commentsDiv.appendChild(newComment);
  commentInput.value = '';
});

})
