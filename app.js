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
  const loadProm = new Promise ((resolve,reject) => {
    setTimeout(()=>{
      load.style.display = 'none'
      resolve()
    },6000)
  }).then(() =>{ 
    console.log('dsds')
})
}

btn.addEventListener('click',loading)

