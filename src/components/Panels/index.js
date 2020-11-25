import { h } from 'preact';
import config from '../../config';
import Icon from '../icon';
import PanelItem from './item';
import IFrameCard from './iframe';
const { panels } = config;

export default function Panels() {
    return (
        <>
            {panels.map((p, i) => (
                <div className={`card qlist qlist__${i+1}`}>
                    {p.url ? <IFrameCard panel = {p} />:
                    <>
                        <Icon className="qlist__head" icon={p.icon} />
                        {p.items.map(i => (
                            <PanelItem item = {i} />
                        ))}
                    </>
                    }
                </div>
            ))}
        </>
    )
}
