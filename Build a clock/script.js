setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour]')
const minuteHand = document.querySelector('[data-minute]')
const secondHand = document.querySelector('[data-second]')

function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const mintuesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (mintuesRatio + currentDate.getHours()) / 12

    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, mintuesRatio)
    setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}
setClock()