function runFiveKilometres(){
    console.log("Go for a five kilometre run");
}

function liftWeights() {
    console.log("Pump iron");
}

function meditateTwentyMinutes() {
    console.log("Meditate for twenty minutes");
}

function Tuesday() {
    runFiveKilometres();
    meditateTwentyMinutes();
}

function receivesAFunction(callback) {
    runFiveKilometres();
    callback();
}

// take no arguments and return a named function
function returnsANamedFunction() {
    function getLeaner() {
        console.log("Burn that fat!");
    }
    return getLeaner
};

function returnsAnAnonymousFunction() {
    return function() {
        console.log("Hey have you seen the Chelsea game?");
    }
}
// function returnsANamedFunction(exercise) {
//     let supper;
//     if (exercise === liftWeights) {
//         supper = "pounded corn and chicken";
//     } else if (exercise === runFiveKilometres) {
//         supper = "pounded sorghum and jute mallow";
//     } else {
//         supper = "rice and lentils";
//     }

//     exerciseRoutinetoFood(exercise);

//     return function () {
//         console.log(`Alaa bro, unapika ${supper} nzito sana!`)
//     };

// }
