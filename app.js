//The purpose of this lab is to practice Asynchronous JavaScript concepts discussed in the video lectures. You'll want to feel comfortable writing your own functions that return new Promise objects, write setTimeout functions, and using .then()/.catch().

// Timing Out - Objective 1
// function getMessage() {
//     let message = ('Hello...');
//     // Timing Out - Objective 2
//     console.log(message);
//     // Timing Out - Objective 3
//     setTimeout(() => {
//         console.log("Hello, can you hear me?... ");
//     }, 2000);
// }
// getMessage();

// Timing Out - Objective 4
// function getWords(){
//     console.log('Hello from the getWords fucntion!');
//     setTimeout(() => {
//         console.log("I waited 3 seconds... ");
//     }, 3000);
//     setTimeout(() => {
//         console.log("I waited 2 seconds... ");
//     }, 2000);
//     setTimeout(() => {
//         console.log("I waited 1 second. ");
//     }, 1000);
// }
// getWords();


// Callbacks and Recursion - Objective 1
function done() {
    console.log("Job's done!")
}
done();

const countdown = ((num, callback) => {
    if (num > 0) {
        // console.log(num);
        setTimeout(() => {
            countdown(num - 1, callback);
        }, 1000);
        console.log(num);
    } else {
        callback();
    }
});
countdown(3, done);

let isItLunchTime = true;
const orderMeSomeFood = (lunchTime) => {
    return new Promise((resolve, reject) => {
        if (lunchTime) {
            let lunchObj = {
                lunch: "Hard Liquor",
                drink: "Harder Liquor",
            }
            resolve(lunchObj);
        } else {
            let err = new Error('Its not lunchtime');
        }
    });
};

orderMeSomeFood(isItLunchTime)
    .then(res => console.log(res))
    .catch(err => console.log(err));
