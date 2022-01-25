function distanceFromHqInBlocks(location) {
    const Hq = 42
    if (location >= 42){
      return  location - Hq
    }
    else { return Hq - location}

};
function distanceFromHqInFeet(location){
   return distanceFromHqInBlocks(location) * 264
};

function distanceTravelledInFeet(start, end){
    return Math.abs(end - start) * 264
    }

function calculatesFarePrice(start, destination) {
   let feet = distanceTravelledInFeet(start, destination)
    if (feet <= 400){
      return 0
    }
    else if (feet > 400 && feet<=2000){
      return (feet - 400) * .02
    }
    else if (feet > 2000 && feet <=2500){
      return 25
    }
    else if (feet >2500){
    return('cannot travel that far')
}
}