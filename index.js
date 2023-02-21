const inputEl = document.getElementById("inputEl")
const lengthResultEl = document.getElementById("lengthResult")
const volumeResultEl = document.getElementById("volumeResult")
const massResultEl = document.getElementById("massResult")

const convertBtn = document.getElementById("convertBtn")
convertBtn.addEventListener("click", () => {
    renderConversions()
})

function renderConversions(){
    const inputVal = inputEl.value ? inputEl.value : 0
    const conversions = convertAll(inputVal)

    lengthResultEl.innerText = `${inputVal} meters = ${conversions.length.imperial} feet | ${inputVal} feet = ${conversions.length.metric} meters` 
    volumeResultEl.innerText = `${inputVal} liters = ${conversions.volume.imperial} gallons | ${inputVal} gallons = ${conversions.volume.metric} liters`
    massResultEl.innerText = `${inputVal} kilos = ${conversions.mass.imperial} pounds | ${inputVal} pounds = ${conversions.mass.metric} kilos`
}

function convertAll(input) {
    const lengthFactor = 3.281
    const volumeFactor = 0.264
    const massFactor = 2.204

    const length = calculate(input, lengthFactor)
    const volume = calculate(input, volumeFactor)
    const mass = calculate(input, massFactor)

    return ({length, volume, mass})
}

function calculate(num, factor) {
    const imperial = (num * factor).toFixed(3)
    const metric = (num / factor).toFixed(3)
    return ({imperial, metric})
}