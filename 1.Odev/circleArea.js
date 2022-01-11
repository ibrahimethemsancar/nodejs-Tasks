let argv=process.argv.slice(2)
let radius = Number(argv[0])
calculateCircleArea=(radius)=>{
let area=Math.PI*radius*radius
console.log(`Yarıçapı ${radius} olan dairenin alanı : ${area}`) 
}

calculateCircleArea(radius)