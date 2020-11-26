import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import ClockInner from './innerclock';
import Greetings from './greeting';
import Day from './date';
import Weather from './weather';
import config from '../../config'

function displayClock({month, day, hour, minute, period}, {setMonth, setDay, setHour, setMinute, setPeriod}) {
    const monthNames = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];

    let d = new Date();
    let mm = monthNames[d.getMonth()];
    let dd = d.getDate();
    let min = (`0${  d.getMinutes()}`).slice(-2);
    let hh = d.getHours();
    let p;
    if (config['12hr']) {
        p = hh >= 12 ? 'pm' : 'am';
        hh = hh % 12;
        hh = hh ? hh : 12; //show mod 0 as 12
    }
  
    // document.getElementById('hour').innerText = hh;
    // //document.getElementById('separator').innerHTML = ' : ';
    // document.getElementById('minutes').innerText = min + ampm;

    // document.getElementById('month').innerText = mm;
    // document.getElementById('day').innerText = dd;
    if (min !== minute) setMinute(min)
    if (p !== hour) setPeriod(p)
    if (hh !== hour) setHour(hh)
    if (mm !== month) setMonth(mm)
    if (dd !== day) setDay(dd)
}

const Info = () => {
    const [month, setMonth] = useState(''),
    [day, setDay] = useState(''),
    [hour, setHour] = useState(''),
    [minute, setMinute] = useState(''),
    [period, setPeriod] = useState('')
    useEffect(() => {
        displayClock(
            { month, day, hour, minute, period },
            { setMonth, setDay, setHour, setMinute, setPeriod }
        )
        const interval = setInterval(displayClock, 1000,
            { month, day, hour, minute, period },
            { setMonth, setDay, setHour, setMinute, setPeriod }
        )

        return () => clearInterval(interval)
    }, [])
    return (
        <>
            <div className="fblock">
                <ClockInner hour = {hour} minute = {minute} period = {period} />
                <Greetings />
            </div>
            <div className="sblock">
                <Day month = {month} day = {day} />
                {config.weather?.key && <Weather />}
            </div>
        </>
    )
}

export default Info;
