import { h } from 'preact';

export default function PanelItem({item}) {
    return (
        <a
        target="blank"
        href={item.url}
        className="qlist__link"
        >{item.name}</a>
    )
}
