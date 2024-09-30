// const title = document.querySelector('h1')
// const input = document.querySelector('.write-your-name')

// input.addEventListener('input', onInput)

// function onInput(){
//     const takeName = input.value
//     return  title.textContent = takeName
// }

// const body = document.querySelector('body')
// const formRef =document.querySelector('form')
// const btnRef = document.querySelector('.submit-btn')
// const inputEmail = document.querySelector('.email-input')
// const greating = 'Дякую за підписку!'


// function createMarkUp(){
//     return ` <form action="">
//         <input class="email-input" type="email" name="" id="">
//         <button class="submit-btn" type="submit">Submit</button>
//     </form>`
// }

// const markUp = createMarkUp()
// body.insertAdjacentHTML('beforeend', markUp)


// window.addEventListener('submit', onSubmit)

// function onSubmit(e){
//     e.preventDefault()
//     setTimeout(()=>{
//         alert(greating)
//     }, 1500)
// }

const links = document.querySelector('a[href^="https"]')
const paragraph = document.querySelector('.holder ul + p')

links.style.color = 'red'
paragraph.style.fontSize = '24px'


