function greet(a) {
    console.log(`Greetings! ${a}`);
}

greet('Riftwalker');

const add = function (x, y) {
    return x * y;
}

function callTwice(func) {
    func(); func();
}


// Returnin a Function
function makeMysteryFunc() {
    const rand = Math.random();
    if(rand > 0.5) {
        return function () {
            console.log("Good");
            console.log("Func");
        }
    }
    else {
        return function() {
            console.log("BAd NUm");
        }
    }
}

// Factory Function:
function makeBetween(min, max) {
    return function(num) {
        return num >= min && num <= max;
    }
}

// Methods
const myMath = {
    PI: 3.14,
    square(num) {
        return num * num;
    },
    cube(num) {
        return num ** 3;
    }
}

const cat = {
    name: "aight",
    color: "pink",
    breed: "scottish fold",
    meow() {
        console.log("This is: ", this);
        console.log(`${this.name} meows for you!`);
    }
}

const meow2 = cat.meow;


//Error Handling:
try {
    Hello.toUpperCase();
} catch {
    console.log("Err");
}
console.log("Err Handling");

function yell(msg) {
    try {
    console.log(msg.toUpperCase().repeat(3));
    } catch(e) {
        console.log(e);
        console.log("Pass a String");
    }
}


//forEach:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function print(element) {
    console.log(element);
}

numbers.forEach(function(el) {
    if(el % 2 === 0) {
        console.log(el);
    }
});

// for(let el of numbers) {
//     console.log(el);
// }

const episode = [
    {
        num: 1,
        score: 95,
    },
    {
        num: 2,
        score: 96,
    },
    {
        num: 3,
        score: 96,
    },
    {
        num: 4,
        score: 94,
    },
    {
        num: 5,
        score: 97,
    },
]

episode.forEach(function(ep) {
    console.log(`${ep.num} - ${ep.score}`);
});


//Maps:
const twiceNumbers = numbers.map(function(num) {
    return 2 * num;
});

const epNum = episode.map(function(ep) {
    return ep.num;
});


// Arrow Functions!!:

// const sum = (x, y) => {
//     return x + y;
// }

// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1
// }

//implicit return[for one & only one statement in function]
const sum = (x, y) => x + y; //one liner implicit return

const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
);

const ratings = episode.map(ep => 
    `${ep.num} - ${ep.score / 10}`
);


//Pausing :
console.log("Hello, ")
setTimeout(() => {
    console.log("World!!");
}, 3000);
console.log("HMM...");

const id = setInterval(() => {
    console.log(Math.random());
}, 3000);
clearInterval(id)
// clearInterval(id) in console to stop the setInterval;


// Filter:
const filterArr = numbers.filter(n => n < 5);
const highRatedEp = episode
.filter(ep =>ep.score > 95)
.map(ep => ep.num);


// Some & Every: [boolean only]
const exams = [80, 84, 83, 90, 93,94, 91, 93, 99, 78, 79, 71];
exams.every(score => score >=75);
exams.some(score => score >=75);


// Reduce:
const prices = [25, 3, 66, 565, 90, 101];

// for(let price of prices) {
//     total += price;
// }
// console.log(total);

const total = prices.reduce((total, price) => {
    return total + price;
});

const max = prices.reduce((max, price) => {
    if(price > max)
        return price;
    return max;
});

const min = prices.reduce((min, price) => {
    if(price < min)
        return price;
    return min;
});

const bestEp = episode.reduce((bestEp, currEp) => {
    if(bestEp.score < currEp.score)
        return currEp;
    return bestEp;
});


// this behaves differently in an arrow function and normal function!!