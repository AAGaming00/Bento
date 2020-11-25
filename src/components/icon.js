import { h } from 'preact';
import * as Icons from 'preact-feather';
function toPascalCase(string) {
    return `${string}`
      .replace(new RegExp(/[-_]+/, 'g'), ' ')
      .replace(new RegExp(/[^\w\s]/, 'g'), '')
      .replace(
        new RegExp(/\s+(.)(\w+)/, 'g'),
        ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`
      )
      .replace(new RegExp(/\s/, 'g'), '')
      .replace(new RegExp(/\w/), s => s.toUpperCase());
  }

export default function Icon ({icon, className}) {
    const IconSVG = Icons[toPascalCase(icon)] || Icons.StopCircle
    return (
        <i>
            <IconSVG className = {className} />
        </i>
    )
}