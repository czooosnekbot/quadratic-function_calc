const calculateButton = document.querySelector('#calc')
const backButton = document.querySelector('#back')
const argsInputs = document.querySelectorAll('.args-inputs')
const resultsInputs = document.querySelectorAll('.results-inputs')
const argsScreen = document.querySelector('#arguments')
const resultsScreen = document.querySelector('#results')
let quadraticFunctionValues = []

const quadraticFunction = {
    calculateDelta: function () {
        return Math.pow(quadraticFunctionValues[1], 2) - 4*quadraticFunctionValues[0]*quadraticFunctionValues[2]
    },
    calculateResult1: function () {
        let delta = this.calculateDelta()
        return ((-1*(quadraticFunctionValues[1])) - Math.sqrt(delta)) / 2 * quadraticFunctionValues[0]
    },
    calculateResult2: function () {
        let delta = this.calculateDelta()
        return ((-1*(quadraticFunctionValues[1])) + Math.sqrt(delta)) / 2 * quadraticFunctionValues[0]
    },
}

calculateButton.addEventListener('click', (e) => {
    quadraticFunctionValues.push(Number(argsInputs[0].value), Number(argsInputs[1].value), Number(argsInputs[2].value))
    console.log('Zapisane dane: ' + quadraticFunctionValues)
    resultsInputs[0].value = quadraticFunction.calculateDelta()
    resultsInputs[1].value = quadraticFunction.calculateResult1()
    resultsInputs[2].value = quadraticFunction.calculateResult2()
    argsScreen.style.display = 'none'
    resultsScreen.style.display = 'flex'
    for (i=1; i<=2; i++) {
        if (resultsInputs[i].value === 'NaN') {
            resultsInputs[i].value = 'Brak'
        }
    }
})

backButton.addEventListener('click', (e) => {
    argsScreen.style.display = 'flex'
    resultsScreen.style.display = 'none'
    quadraticFunctionValues.length = 0
})