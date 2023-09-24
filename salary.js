//Declaring my global variables
const basicSalary = parseFloat(prompt('Enter your basic salary per month'))
const totalBenefits = parseFloat(prompt('Enter Your total benefits per month'))
const grossSalary = basicSalary + totalBenefits

//Calculate PAYE
function calcPaye(){
    if(grossSalary <= 24000){
        return grossSalary * 0.1
    }else if(grossSalary <= 32333 && grossSalary > 24000){
        return grossSalary * 0.25
    }else if(grossSalary > 32333 && grossSalary <= 500000){
        return grossSalary * 0.3
    }else if(grossSalary > 500000 && grossSalary <= 800000){
        return grossSalary * 0.325
    }else{
        return grossSalary * 0.35
    }
}

//Calculate NHIF Deduction
function calcNHIF(){
    if(grossSalary < 6000){
        return 150
    }else if(grossSalary < 8000 && grossSalary >= 6000){
        return 300
    }else if(grossSalary < 12000 && grossSalary >= 8000){
        return 400
    }else if(grossSalary < 15000 && grossSalary >= 12000){
        return 500
    }else if(grossSalary < 20000 && grossSalary >= 15000){
        return 600
    }else if(grossSalary < 25000 && grossSalary >= 20000){
        return 750
    }else if(grossSalary < 30000 && grossSalary >= 25000){
        return 850
    }else if(grossSalary < 35000 && grossSalary >= 30000){
        return 900
    }else if(grossSalary < 40000 && grossSalary >= 35000){
        return 950
    }else if(grossSalary < 45000 && grossSalary >= 40000){
        return 1000
    }else if(grossSalary < 50000 && grossSalary >= 45000){
        return 1100
    }else if(grossSalary < 60000 && grossSalary >= 50000){
        return 1200
    }else if(grossSalary < 70000 && grossSalary >= 60000){
        return 1300
    }else if(grossSalary < 80000 && grossSalary >= 70000){
        return 1400
    }else if(grossSalary < 90000 && grossSalary >= 80000){
        return 1500
    }else if(grossSalary < 100000 && grossSalary >= 90000){
        return 1600
    }else{
        return 1700
    }
}

//Calculate NSSF Deduction
function calcNSSF(){
    if(grossSalary <= 18000){
        return grossSalary * 0.06
    }else if(grossSalary > 18000){
        return 18000 * 0.06
    }
}

//Calculate netSalary
const netSalary = grossSalary - calcPaye() - calcNHIF() - calcNSSF()

alert('Your PAYE is: ' + calcPaye())
alert('Your NHIF Deduction is: ' + calcNHIF())
alert('Your NSSF Deduction is: ' + calcNSSF())
alert('Your Net Salary is: ' + netSalary)