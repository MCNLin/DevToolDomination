window.addEventListener('load', function() {
const dogs = [{ name: 'Snickers', age: 2 }, { name: 'Hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('hello')

// Interpolated
console.log('hello I am a %s string!','💩️' )

// Styled
console.log('%cI am some great text', 'font-size 50px; background: purple; text-shadow: 10px 10px 0 pink')

// warning!
console.warn('OH NOOO!')

// Error :|
console.error('💩️💩️!')

// Info
console.info('Crocodiles eat 3-4 people per year!')

// Testing
console.assert(1 === 2, "Does not work")
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), "That is wrong")

// clearing
console.clear();

// Viewing DOM Elements
console.log(p)
console.dir(p)

console.clear();

// Grouping together
dogs.forEach(dog => {
  console.group(`${dog.name}`)
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`)
})
// counting
console.count('Wes');
console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Steve');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });
});
