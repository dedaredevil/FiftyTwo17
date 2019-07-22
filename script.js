const workTime = 3120
const breakTime = 17
// 3120 seconds = 52 minutes

function timer() {
  let timerElement = document.getElementById('timer')
  let h1Element = document.getElementById('h1')
  let timer = 0
  let currentTime = 0
  let interval

  interval = setInterval(timeIt, 1000)

  document.addEventListener('keydown', (event) => {
    const key = event.key.toLocaleLowerCase()
    if (key === ' ') {
      doTimer()
    }
  })

  function timeIt() {
    if (timer < 100) {
      currentTime++
      if (Math.trunc((currentTime / workTime) * 100) != timer) {
        timerElement.textContent = `${Math.trunc(
          (currentTime / workTime) * 100
        )}`
        document.title = `${Math.trunc((currentTime / workTime) * 100)}%`
      }
      timer = Math.trunc((currentTime / workTime) * 100)
      displayTime()
    }
  }

  function doTimer() {
    if (!interval) {
      interval = setInterval(timeIt, 1000)
      h1Element.style.color = '#f6eceb'
      console.log('resumed')
    } else {
      clearInterval(interval)
      interval = false
      h1Element.style.color = '#e2bac5'
      console.log('paused')
    }
  }

  function displayTime() {
    let minutes = Math.floor(currentTime / 60)
    let seconds = currentTime - minutes * 60
    console.log(`Minutes: ${minutes}, Seconds: ${seconds}, Percent: ${timer}`)
  }
}
