document.querySelector('html').addEventListener('click', event => {
  let container = document.querySelector('#container');

  console.log(event.target);
  console.log(event.currentTarget);

  if (!container.contains(event.target)) {
    container.style = 'display: none';
  }
});

