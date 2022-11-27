const btnButton = document.querySelector('.btn')
const body = document.querySelector('body')
console.log(body.style)

btnButton.addEventListener('click', () => {
    let backgroundColor = body.style.backgroundColor
    console.log('backgroundColor: ', backgroundColor)
    switch (backgroundColor) {
        case 'white':
            body.style.backgroundColor = 'rgb(40, 40, 40)'
            body.style.color = 'white'
            break
        case 'rgb(40, 40, 40)':
            body.style.backgroundColor = 'white'
            body.style.color = 'rgb(40, 40, 40)'
            break
        default:
            body.style.backgroundColor = 'white'
            body.style.color = 'rgb(40, 40, 40)'
    }
})