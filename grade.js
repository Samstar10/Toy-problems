//Take user input to record the students' marks
const userInput = parseInt(prompt('Please enter marks scored by student'))

//Returning the grades according to the marks
function grade(marks){
    
    if(marks > 100){
        alert('Please enter a number between 0-100')
    }


    if(marks > 79 && marks <= 100){
        alert('You have an A!')
    }else if(marks >= 60 && marks <= 79){
        alert('You have a B!')
    }else if(marks >= 49 && marks <= 59){
        alert('You have a C!')
    }else if(marks >= 40 && marks < 49){
        alert('you have a D!')
    }else if(marks < 40){
        alert('You have an E!')
    }
}

//Calling the function with the user input as the argument
grade(userInput)