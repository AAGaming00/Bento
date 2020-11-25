import { h } from 'preact';

const Day = ({ day, month }) => (
    <div className="sblock__date">
        <div id="month">{month}</div>
        <div id="day">{day}</div>
    </div>
)

export default Day;