import { h } from 'preact';


const InnerClock = ({ hour, minute, period }) => {
    return (
    <div class="clock">
        <div id="hour" class="" >{hour}</div>
        <div id="separator" class="" > : </div>
        <div id="minutes" class="" >{minute}</div>
        {period && <div id="period" class="" >&nbsp;{period}</div>}
    </div>
    )
}

export default InnerClock;