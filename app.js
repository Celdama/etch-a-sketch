const app = document.querySelector('#app');

const changeColor = () => {
  console.log('h"e');
}

const makeGrid = (size) => {
  app.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  app.style.gridTemplateRows = `repeat(${size}, 1fr)`
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement('div');
    div.addEventListener('mouseover', changeColor)
    div.classList.add('square');
    app.appendChild(div);
  }
};

makeGrid(64)




// const squares = Array.from(document.querySelectorAll('.square'));
// squares.forEach(square => {
//   square.addEventListener('mouseover', (e) => {
//     e.target.style.backgroundColor = 'cadetblue'
//   })
// })

