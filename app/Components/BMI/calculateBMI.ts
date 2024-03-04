export function calculateBMI(height : number, weight : number ) {
    height = height/100
    const bmi = weight /(height * height)
    return bmi.toFixed(2)
}

// export function caloricDemand(height : number , weight : number, age: number, isMan : boolean){
// }