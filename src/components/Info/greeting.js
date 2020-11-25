import { h } from 'preact';
import conf from '../../config';
const { greetings } = conf;

const Greeting = () => {
    // Get the hour
    const today = new Date();
    const hour = today.getHours();

    // Here you can change your name
    const name = greetings.name;

    // Here you can change your greetings
    const gree1 = greetings.night + ' ';
    const gree2 = greetings.morning + ' ';
    const gree3 = greetings.afternoon + ' ';
    const gree4 = greetings.evening + ' ';
    let greeting;
    // Define the hours of the greetings
    if (hour >= 23 && hour < 5) {
        greeting = gree1 + name;
    } else if (hour >= 6 && hour < 12) {
        greeting = gree2 + name;
    } else if (hour >= 12 && hour < 17) {
        greeting = gree3 + name;
    } else  {
        greeting = gree4 + name;
    }

    return (
        <span id = "greetings">{greeting}</span>
    )
}

export default Greeting;