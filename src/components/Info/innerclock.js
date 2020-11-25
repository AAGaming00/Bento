import { h } from 'preact';


const InnerClock = ({ hour, minute }) => {
    return (
    <div class="clock">
        <div id="hour" class="" >{hour}</div>
        <div id="separator" class="" > : </div>
        <div id="minutes" class="" >{minute}</div>
    </div>
    )
}

export default InnerClock;