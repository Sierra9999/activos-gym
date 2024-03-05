export function calculateBMI(height : number|string, weight : number|string ):number {
    
    height = Number(height)/100
    const bmi = Number(weight) /(height * height)
    return parseInt(bmi.toFixed(2))
}

export function rateBMI(bmi: number): {rate: string , message:string}{
    if (bmi < 18.5){
        return {
            rate : 'underweight',
            message : 'Fuel up! If your BMI is below 18.5, focus on healthy eating for a balanced weight. Consider a nutritionist for guidance.'
        }
    }else if (bmi > 18.5 && bmi < 25 ){
        return {
            rate : 'normal',
            message : 'Well done! Your BMI is normal. Keep it up with regular exercise and a balanced diet.'
        }
    }
    return {
        rate : 'overweight',
        message : 'Time for change. BMI over 25? Start with small, healthy habits. Consult a pro for personalized advice.',
    }
}

// export function caloricDemand(height : number , weight : number, age: number, isMan : boolean){
// }