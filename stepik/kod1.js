const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (n) => {
  const stars = []
  for (let i = 1; i <= n ; i++){
    let temp = `${'*'.repeat(i)}`
    stars.push(temp)
  }
  for (let i = n; i > 0 ; i--){
    let temp = `${'*'.repeat(i)}`
    stars.push(temp)
  }
  for (let i = n; i > 0 ; i--){
    let temp = `${' '.repeat(n-i) + '*'.repeat(i)}`
    stars.push(temp)
  }
  for (let i = 1; i <= n ; i++){
    let temp = `${' '.repeat(n-i) + '*'.repeat(i)}`
    stars.push(temp)
  }
  stars.forEach(line => console.log(line))
});




