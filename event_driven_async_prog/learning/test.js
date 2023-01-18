let counterId;

function startCounting() {
  let num = 1;
  counterId = setInterval(() => {
    console.log(num);
    num += 1;
  }, 1000);
}

function stopCounting() {
  clearInterval(counterId);
}
