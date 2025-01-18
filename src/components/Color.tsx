import { CSSProperties } from "react";

export default function Color({ name, hex }: { name: string, hex: string }) {
    return <div className='color' style={createColorStyle()}>
        <div className='showcase' style={createShowcaseStyle(hex)}></div>
        <div className='name'>{name}</div>
        <div className='hex'>{hex}</div>
    </div>;
}

function createColorStyle(): CSSProperties {
    return {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '20px',
    };
}

function createShowcaseStyle(hex: string): CSSProperties {
    return {
        backgroundColor: hex,
        height: '200px',
        width: '200px',
        margin: '10px',
        borderRadius: '20px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
        marginBottom: '20px'
    };
}