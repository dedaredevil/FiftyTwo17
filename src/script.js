
const maxWorkTime = 3120
const maxBreakTime = 1020
const endTime = 52
let timerElement = document.getElementById('timer')
let h1Element = document.getElementById('h1')
let timer = 0
let seconds = 0
let interval
let minutes = 0

interval = setInterval(timeLoop, 1000)

document.addEventListener('keydown', (event) => {
  const key = event.key.toLocaleLowerCase()
  if (key === ' ' && !interval) {
    interval = setInterval(timeLoop, 1000)
    h1Element.style.color = '#f6eceb'
    console.log('resumed')
  } else {
    clearInterval(interval)
    interval = false
    h1Element.style.color = '#b8c4b0'
    console.log('paused')
  }
})

function timeLoop() {
  if (seconds < maxWorkTime) {
    seconds++
    minutes = Math.floor(seconds / 60)
    document.title = `${(maxWorkTime/60)-minutes}` + ' Minutes Left'
    timerElement.textContent = `${(maxWorkTime/60)-minutes}`
  } 
  // For testing purposes
  console.log('seconds ' + seconds);
  console.log('minutes ' + Math.floor(seconds / 60))
}