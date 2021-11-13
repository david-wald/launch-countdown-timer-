function timer() {
    const setDate = new Date('01 Jan 2022 00:00:00');
    const currentDate = new Date();
    const diff = setDate - currentDate;
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor(diff / 3600000);
    const minutes = Math.floor(diff / 60000);
    const seconds = Math.floor(diff / 1000);
    const d = days;
    let h = hours - days * 24;
    let m = minutes - hours * 60;
    let s = seconds - minutes * 60;
    h < 10 && (h = '0' + h);
    m < 10 && (m = '0' + m);
    s < 10 && (s = '0' + s);
    document.getElementById('days').innerHTML = d;
    document.getElementById('hours').innerHTML = h;
    document.getElementById('minutes').innerHTML = m;
    document.getElementById('seconds').innerHTML = s;
    if (seconds < 1) clearInterval(interval);
}
const interval = setInterval(timer, 1000);

//# sourceMappingURL=index.643c084b.js.map
