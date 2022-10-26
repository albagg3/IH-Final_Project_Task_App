
//------------TIEMPO RELATIVO--------------------
const getTimesFormat = (time) => {
    const seconds = Math.floor(time / 1000); // -1937124.765
    const minutes = Math.floor(seconds / 60); // -5158.739066666666
    const hours = Math.floor(minutes / 60); // -85.97898444444444
    const days = Math.floor(hours / 24)
    return {
        seconds,
        minutes,
        hours,
        days
    }
}



export const formatRelativeTime = (date) => {
    let diff = Math.floor(new Date(date) - new Date());
    if (diff > 0) diff = 0
    const { seconds, minutes, hours, days } = getTimesFormat(diff);
    const formatter = new Intl.RelativeTimeFormat('en-EN', {
        numeric: 'auto',
    })
    if (seconds > -60) return formatter.format(seconds, 'seconds')
    if (minutes > -60) return formatter.format(minutes, 'minutes')
    if (hours > -24) return formatter.format(hours, 'hours')
    return formatter.format(days, 'days')
}


export const percentageDone = (nTask, nTaskdone) =>{
    let percentage = 0;
    percentage = nTaskdone * 100 / nTask
    return percentage
}


