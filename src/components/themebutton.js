import { h } from 'preact';
import Icon from './icon'
export default function ThemeButton ({ value, setValue }) {
    return <button onClick = {() => setValue(!value)} id="themeButton">
        <Icon icon = {value ? 'moon' : 'sun'} />
    </button>
}