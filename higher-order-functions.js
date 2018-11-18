/**
 * A higher order function is a function that takes a function 
 * as an argument, or returns a function.
 * 
 * The main purpose of higher order functions is to abstract away
 * the commonalities within functions. Higher-order functions allow 
 * us to abstract over actions, not just values.
 * 
 * https://eloquentjavascript.net/05_higher_order.html
 * 
 * Built in examples:
 * .map()
 * .filter()
 * .reduce()
 */

/************************************************ 
 * 
 * Function factories,
 * More readable code, and
 * Single point for change
 * 
************************************************/

function greaterThan(n) {
    return m => m > n
}

/**
 * A great benefit as you can see here is that code is much more readable.
 * 
 * Darren (Sim) talks about how great code is when non-devs can look at the
 * code and understand flow. Having the function called greaterThan10 is
 * much easier to read in the context of the call-site than the function
 * greaterThan(10) because you would have to dive into the parameters.
 * 
 * The other thing is... now that you have the function greaterThan10, you can
 * reuse that instead of calling greaterThan(10) every single time. It also
 * gives you a single point for change should you need it.
 */
const greaterThan10 = greaterThan(10)
const greaterThan100 = greaterThan(100)

// Example 2
function multiplyBy(n) {
    return m => m * n
}

const tripple = multiplyBy(3)
const quadruple = multiplyBy(4)

/************************************************ 
 * 
 * Moving logical checks into small
 * reusable components
 * 
************************************************/

const isDog = function(animal) {
    return animal.species === 'dog'
}
const dogs = animals.filter(isDog)
const otherAnimals = animals.reject(isDog)

/************************************************ 
 * 
 * Control Flow Manipulation
 * 
************************************************/

function doWhen(conditional, fn) {
    if (conditional) fn()
}

doWhen(greaterThan10(11), () => console.log('hey'))
doWhen(greaterThan10(9), () => console.log("I won't be run"))
