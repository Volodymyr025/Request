const load = document.getElementById('load-page')
const btn = document.getElementById('btn')
const userTable = document.getElementById('table')

const url = 'https://jsonplaceholder.typicode.com/users'

const timeOut = ms => {
  return new Promise ((resolve,reject) => {
    setTimeout(()=>{
      load.style.display = 'none'
      resolve()
    },ms)
  })
}

function visible (item) {
  item.style.display = 'flex'
}

function addListUser (userData){
  const post = document.querySelector('.post')
  for(const dataList of userData){
    const elTr = document.createElement('tr')
    const elTd = document.createElement('td')
    let itemEl = ''
    itemEl += `<td>${dataList.name}</td>
    <td>${dataList.username}</td>
    <td>${dataList.email}</td>
    <td>${dataList.phone}</td>`
    elTr.innerHTML = itemEl
    post.append(elTr)
  }
}


async function loading () {
  visible(load)
  try{
    await timeOut(5000)
    const response = await fetch(url)
    const data = await response.json()
    await visible(userTable)
    await addListUser(data)
  }
  catch (e) {
    console.error(e)
  }
}

btn.addEventListener('click',loading)

