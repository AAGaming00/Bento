import { h } from 'preact';
import Icon from '../icon'
import config from '../../config';
const { buttons } = config;

export default function Buttons(props) {
    return (
    <div className="qlink">
        {buttons.map((b, i) => (
            <a
                href={b.url}
                target="blank"
                className={`qlink__link qlink__link-${i+1}`}
            >
                <Icon className="qlink__icon" icon={b.icon} />
            </a>
        ))}

    </div>
    )
}
