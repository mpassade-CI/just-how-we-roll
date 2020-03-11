
/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];


/*******************************************************************
 * METHOD-Y HELPER FUNCTIONS YOUR BACK-END DEV HAS WRITTEN FOR YOU *
 ******************************************************************/


const getRandomNumber = function(max) {
  const rand = Math.random();
  const range = rand * max;
  const result = Math.ceil(range);

  return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}


/******************
 * BUTTON QUERIES *
 ******************/
const die = document.getElementById('d6-roll')
const diceLeft = document.getElementById('double-d6-roll-1')
const diceRight = document.getElementById('double-d6-roll-2')
const die12 = document.getElementById('d12-roll')
const die20 = document.getElementById('d20-roll')
const reset = document.getElementById('reset-button')

/******************
 * CLICK HANDLERS *
 ******************/
const dieClick = function(){
  sixes.push(getRandomNumber(6))
  let x = sixes[sixes.length-1]
  die.src = 'images/d6/'+x.toString()+'.png'
  meanDie.innerText = mean(sixes)
  medDie.innerText = median(sixes)
}

const diceClick = function(){
  const x = []
  x.push(getRandomNumber(6))
  x.push(getRandomNumber(6))
  let left = x[x.length-2]
  let right = x[x.length-1]
  doubleSixes.push(left+right)
  diceLeft.src = 'images/d6/'+left.toString()+'.png'
  diceRight.src = 'images/d6/'+right.toString()+'.png'
  meanDice.innerText = mean(doubleSixes)
  medDice.innerText = median(doubleSixes)
}

const die12Click = function(){
  twelves.push(getRandomNumber(12))
  let x = twelves[twelves.length-1]
  die12.src = 'images/numbers/'+x.toString()+'.png'
  meanDie12.innerText = mean(twelves)
  medDie12.innerText = median(twelves)
}

const die20Click = function(){
  twenties.push(getRandomNumber(20))
  let x = twenties[twenties.length-1]
  die20.src = 'images/numbers/'+x.toString()+'.png'
  meanDie20.innerText = mean(twenties)
  medDie20.innerText = median(twenties)
}

const resetClick = function(){
  sixes.length = 0
  doubleSixes.length = 0
  twelves.length = 0
  twenties.length = 0
  die.src = 'images/start/d6.png'
  diceLeft.src = "images/start/d6.png"
  diceRight.src = "images/start/d6.png"
  die12.src = "images/start/d12.jpeg"
  die20.src = "images/start/d20.jpg"
  meanDie.innerText = ''
  medDie.innerText = ''
  meanDice.innerText = ''
  medDice.innerText = ''
  meanDie12.innerText = ''
  medDie12.innerText = ''
  meanDie20.innerText = ''
  medDie20.innerText = ''
}

/*******************
 * EVENT LISTENERS *
 *******************/
die.addEventListener('click', dieClick)
diceLeft.addEventListener('click', diceClick)
diceRight.addEventListener('click', diceClick)
die12.addEventListener('click', die12Click)
die20.addEventListener('click', die20Click)
reset.addEventListener('click', resetClick)
/****************
 * MATH SECTION *
 ****************/
const mean = function(arr){
  let y = 0
  for (const x of arr){
    y += x
  }
  let avg = y / arr.length
  return avg.toFixed(2)
}

const median = function(arr){
  const x = sortByNumber(arr)
  let med = 0
  if (x.length===1){
    med = x[x.length-1]
  }
   else if (x.length%2===0){
    let y = x[(x.length/2)-1]
    let z = x[x.length/2]
    med = (y+z)/2
  }
  else {
    med = x[Math.floor(x.length/2)]
  }
  return med.toFixed(2)
}




/********************
* MATH-AREA QUERIES *
********************/
const meanDie = document.getElementById('d6-rolls-mean')
const medDie = document.getElementById('d6-rolls-median')
const meanDice = document.getElementById('double-d6-rolls-mean')
const medDice = document.getElementById('double-d6-rolls-median')
const meanDie12 = document.getElementById('d12-rolls-mean')
const medDie12 = document.getElementById('d12-rolls-median')
const meanDie20 = document.getElementById('d20-rolls-mean')
const medDie20 = document.getElementById('d20-rolls-median')

