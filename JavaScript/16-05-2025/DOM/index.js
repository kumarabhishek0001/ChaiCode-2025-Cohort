// ************* Task **********************
//todo1 : click a button to change to dark theme

// ************* Task **********************

//* Task1
// function changeBackgroundBlack(){
//     window.document.body.style.backgroundColor = 'black'
// }

// changeBackgroundBlack()

// function changeBackgroundWhite(){
//     document.body.style.backgroundColor = "White"
// }

//better version
function changeBackgroundColor(color){
    window.document.body.style.backgroundColor = color
}

//*Event Listenr
const theme_change = document.getElementById('theme-button')

theme_change.addEventListener('click', () => {
    const current_theme = document.body.style.backgroundColor
    
    if(!current_theme || current_theme == 'white'){
        changeBackgroundColor('black')
        theme_change.innerText = 'Light Mode'
        document.body.style.color = 'white'
    }
    else{
        changeBackgroundColor('white')
        theme_change.innerText = 'Dark Mode'
        document.body.style.color = 'black'
    }
    console.log(current_theme)


})