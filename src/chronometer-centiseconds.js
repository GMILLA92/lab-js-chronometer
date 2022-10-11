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
    },10)
  }

  getMinutes() {
    console.log(this.currentTime)
    return Math.floor((this.currentTime/100)/ 60)
  }

  getSeconds() {
    return Math.floor((this.currentTime/100) % 60)
  }

  getCentiseconds() {
    return this.currentTime  % 100;
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
    let twoCentrisSeconds= this.computeTwoDigitNumber(this.getCentiseconds()) 
    return (twoMinutes+':'+twoSeconds+'.'+twoCentrisSeconds)
  }
}

// let clock = new Chronometer


// // console.log()
// clock.start()


// let timeOut1 = setTimeout(()=>{

// console.log(clock.getSeconds())

// clock.stop()

// }, 1000)


