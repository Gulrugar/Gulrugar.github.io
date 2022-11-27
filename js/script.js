const btnButton = document.querySelector('.btn')
const body = document.querySelector('body')
console.log(body.style)

btnButton.addEventListener('click', () => {
    let backgroundColor = body.style.backgroundColor
    console.log('backgroundColor: ', backgroundColor)
    switch (backgroundColor) {
        case 'white':
            body.style.backgroundColor = 'rgb(40, 40, 40)'
            break
        case 'rgb(40, 40, 40)':
            body.style.backgroundColor = 'white'
            break
        default:
            body.style.backgroundColor = 'white'
    }
})