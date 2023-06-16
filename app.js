const load = document.getElementById('load-page')
const btn = document.getElementById('btn')
// const btn = document.getElementById('but').addEventListener('click', ()=>{
//   fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.log(error));
//   })

async function loading () {
  load.style.display = 'flex'
await setTimeout(()=>{
  load.style.display = 'none'
},6000)
console.log('dsds')
}

btn.addEventListener('click',loading)

