// variables for user input
const adj1=document.getElementById('adj1')
const noun1=document.getElementById('noun1')
const adj2=document.getElementById('adj2')
const clothing=document.getElementById('clothing')
const bodyPart=document.getElementById('bodyPart')
const verb1=document.getElementById('verb1')
const food=document.getElementById('food')

//variables to display the mad lib
/* arr=[ adj1,adj2,noun1,verb1,bodyPart,clothing,food]
console.table(arr) */

const madLibDisplay = document.querySelector('.mad-lib')

//variable for the form

const form= document.querySelector('form')
// console.log(form)

// variable for the mad lib story
const story = `My friend and I started a secret club! We meet every day by the <b>${adj1}</b> <b>${noun1}</b>. Our club has some very special rules. If you want to join you have to wear <b>${adj2}</b> <b>${clothing}</b> on your <b>${bodyPart}</b>. You are not allowed to <b>${verb1}</b> during meetings, and you can only eat <b>${food}</b> for your meals. If you are interested in joining, let me know!`


form.addEventListener("submit", function (event){
    event.preventDefault()
    madLibDisplay.innerHTML=story
                                .replace(`${adj1}`,adj1.value)
                                .replace(`${noun1}`,noun1.value)
                                .replace(`${adj2}`,adj2.value)
                                .replace(`${clothing}`,clothing.value)
                                .replace(`${bodyPart}`,bodyPart.value)
                                .replace(`${verb1}`,verb1.value) 
                                .replace(`${food}`,food.value)

})