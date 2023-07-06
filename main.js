const seconds = 1000
const minutes = seconds * 60
const hours = minutes * 60
const days = hours * 24

let initialTime = days * 9

const countdown = () => {
    initialTime -= 1000

    let timeDays = Math.floor(initialTime / days)
    let timeHours = Math.floor(initialTime % days / hours)
    let timeMinutes = Math.floor(initialTime % hours / minutes)
    let timeSeconds =  Math.floor(initialTime % minutes / seconds)

    document.getElementById("days").innerHTML = timeDays < 10 ? "0" + timeDays : timeDays
    document.getElementById("hours").innerHTML = timeHours < 10 ? "0" + timeHours : timeHours
    document.getElementById("minutes").innerHTML = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes
    document.getElementById("seconds").innerHTML = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds
}

setTimeout(() => setInterval(countdown, 1000), 1000)