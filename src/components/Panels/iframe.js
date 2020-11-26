import { h } from 'preact';

export default function IFrameCard ({panel}) {
    return <iframe
    className = 'qlist__iframe'
    style = {panel.zoom && {
        transform: `scale(${panel.zoom?.toString()})`,
        width: `${1 / panel.zoom * 100}%`,
        height: `${1 / panel.zoom * 100}%`,
        transformOrigin: 'top'
    }}
    src={panel.url}
    sandbox = 'allow-downloads allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-presentation allow-scripts allow-top-navigation' />
}