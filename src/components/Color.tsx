import { CSSProperties } from "react";
import './Color.css';

export default function Color({ name, hex }: { name: string, hex: string }) {
    return <div className='color'>
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