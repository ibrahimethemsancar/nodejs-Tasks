const circleArea=(r)=> {

    console.log("Area: ", Math.PI*r*r);
}

const circleCircumference=(r)=> {
    console.log("Circumference: ", Math.PI*2*r);
}

module.exports = {
    circleArea,
    circleCircumference
}