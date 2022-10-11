class Chronometer {
constructor() {
    this.currentTime = 0,
    this.intervalId = null
  }

start(printTimeCallback) {
    this.intervalId = setInterval(() => {
    this.currentTime++
    if (printTimeCallback){
      return printTimeCallback()
    }
  },1000)
}

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    let formatedNumber= "0" + value
    return formatedNumber.slice(-2)
  }

  stop() {
  clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    let twoMinutes = this.computeTwoDigitNumber(this.getMinutes())
    let twoSeconds = this.computeTwoDigitNumber(this.getSeconds())
    
    return (twoMinutes+':'+twoSeconds)
    
  }
}




console.log(Chronometer)
let clock = new Chronometer


console.log(clock)
clock.start()


let timeOut1 = setTimeout(()=>{

clock.stop()}, 10000)

let timeOut2 = setTimeout(()=>{

  clock.split()}, 3000)


console.log(timeOut1)
