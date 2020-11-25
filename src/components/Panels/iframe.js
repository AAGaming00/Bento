import { h } from 'preact';

export default function IFrameCard ({panel}) {
    return <iframe
    className = 'qlist__iframe'
    style = {{
        zoom: panel.zoom?.toString()
    }}
    src={panel.url}
    sandbox = 'allow-downloads allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-presentation allow-scripts allow-top-navigation' />
}