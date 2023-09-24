//Taking and recording the car speed
const carSpeed = parseInt(prompt('Enter speed'))

//calculating demerit points
function speedDetector(speed){
    const demeritPoints = (speed - 70) / 5
    if((speed - 70) % 5 === 0){
        return demeritPoints
    }else{
        return null
    }
}

//Value returns
function speedPoints(points){
    if(points !== null && points > 0 && points <= 12){
        alert(`Demerit Points: ${points}`)
    }else if(points > 12){
        alert('Your License is suspended!')
    }else{
        alert('Speed is OK!')
    }
}

//Calling the function
speedPoints(speedDetector(carSpeed))