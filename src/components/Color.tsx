import { CSSProperties } from "react";
import './Color.css';

export default function Color({ name, hex }: { name: string, hex: string }) {

    function copyToClipboard() {
        navigator.clipboard.writeText(hex);
    }

    return <div className='color' onClick={copyToClipboard}>
        <div className='showcase' style={createShowcaseStyle(hex)}></div>
        <div className='name'>{name}</div>
        <div className='hex'>{hex}</div>
    </div>;
}

function createShowcaseStyle(hex: string): CSSProperties {
    return {
        backgroundColor: hex
    };
}