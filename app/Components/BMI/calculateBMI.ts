export function calculateBMI(height : number|string, weight : number|string ) {
    
    height = Number(height)/100
    const bmi = Number(weight) /(height * height)
    return bmi.toFixed(2)
}

// export function caloricDemand(height : number , weight : number, age: number, isMan : boolean){
// }