

function timer() {

    const setDate = new Date('01 Jan 2022 00:00:00')
    const currentDate = new Date()
    const diff = setDate - currentDate
    

    const days = Math.floor(diff / (1000 * 60 * 60 * 24)) 
    const hours = Math.floor(diff / (1000 * 60 * 60)) 
    const minutes = Math.floor(diff / (1000 * 60)) 
    const seconds = Math.floor(diff / 1000) 


    const d = days
    let h = hours - days * 24
    let m = minutes - hours * 60
    let s = seconds - minutes * 60

    h < 10 ? h = '0' + h : h 
    m < 10 ? m = '0' + m : m 
    s < 10 ? s = '0' + s : s
    


    document.getElementById('days').innerHTML = d
    document.getElementById('hours').innerHTML = h
    document.getElementById('minutes').innerHTML = m
    document.getElementById('seconds').innerHTML = s


    if (seconds < 1) {
      
        clearInterval(interval)
    }

   
}

   const interval =  setInterval(timer, 1000)
