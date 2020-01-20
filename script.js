const calculateButton = document.querySelector('#calc')
const backButton = document.querySelector('#back')
const argsInputs = document.querySelectorAll('.args-inputs')
const resultsInputs = document.querySelectorAll('.results-inputs')
const argsScreen = document.querySelector('#arguments')
const resultsScreen = document.querySelector('#results')

const quadraticFunction = {
    values: [],
    calculateDelta: function () {
        return Math.pow(this.values[1], 2) - 4*this.values[0]*this.values[2]
    },
    calculateResult1: function () {
        let delta = this.calculateDelta()
        return (-1*(this.values[1]) - Math.sqrt(delta)) / 2 * this.values[0]
    },
    calculateResult2: function () {
        let delta = this.calculateDelta()
        return (-1*(this.values[1]) + Math.sqrt(delta)) / 2 * this.values[0]
    },
}

calculateButton.addEventListener('click', (e) => {
    argsInputs.forEach(function (input, value) {
        quadraticFunction.values.push(input.value)
    })

    console.log('Zapisane dane: ' + quadraticFunction.values)
    resultsInputs[0].value = quadraticFunction.calculateDelta()
    resultsInputs[1].value = quadraticFunction.calculateResult1()
    resultsInputs[2].value = quadraticFunction.calculateResult2()
    argsScreen.style.display = 'none'
    resultsScreen.style.display = 'flex'
    for (i=1; i<=2; i++) {
        if (isNaN(resultsInputs[i].value)) {
            resultsInputs[i].value = 'Brak'
        }
    }
})

backButton.addEventListener('click', (e) => {
    argsScreen.style.display = 'flex'
    resultsScreen.style.display = 'none'
    quadraticFunction.values.length = 0
})