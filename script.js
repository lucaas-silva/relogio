const clockContainer = document.querySelector('.clock-container')

const updateClock = () =>{
    const present = new Date()
    const hours = present.getHours()
    const minutes = present.getMinutes()
    const seconds = present.getSeconds()
    //console.log(hours, minutes, seconds)

    const clockHTML = `
        <div class="spanContainer">
        <span>${hours}:</span>
        <span>${minutes}:</span>
        <span>${seconds}</span></div>
    `

    clockContainer.innerHTML = clockHTML
}

setInterval(updateClock, 1000)