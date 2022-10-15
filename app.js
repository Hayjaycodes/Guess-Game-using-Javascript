// let message = document.querySelector('.message')
// console.log(message.textContent);

// message.textContent = 'the guess is correct'

// let score = document.querySelector('.score')

// score.textContent = 200


// let highscore = document.querySelector('.highscore')

// highscore.textContent = 100


// let number = document.querySelector('.number')

// number.textContent =50

// // handling input fieldss, to get the data from an input field, u need to pass a .value

// let inputField = document.querySelector('.guess');
// inputField.value =20

// handling click event --- an event that happens on a page,keypress, click etc...

// let checkbtn = document.querySelector('.check')

// function doSth(){
//     console.log('geraldine go home');
// }


// let name =document.querySelector('h1')

// function change(){
//     if(name.textContent=='Aj'){
//         name.textContent ='guess my number'
//     }else{
//         name.textContent ='Aj'
//     }
// }

// checkbtn.addEventListener('click', change)



let btn = document.querySelector('.check')
let refresh = document.querySelector('.again')

function game(){
    let guessedNumber =Math.ceil(Math.random()*4)
    let number = document.querySelector('.number')
    number.textContent =guessedNumber

    const guess = Number(document.querySelector('.guess').value)
    let msg = document.querySelector('.message')
    let body = document.body.style
    let score = document.querySelector('.score')

    if(!guess){
        msg.textContent = 'no number'

    }else if(guess === guessedNumber){
          msg.textContent = 'correct number'
          body.backgroundColor = 'green'

    }else if(guess !== guessedNumber){
        msg.textContent = 'wrong guess'
        body.backgroundColor = 'red'
        score.textContent--
    }
}

btn.addEventListener('click', game)

refresh.addEventListener('click', ()=>{
    location.reload()
})
