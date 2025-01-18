import { CSSProperties } from "react";

export default function Header() {
    return <div className='header' style={createStyle()}>
        <h1>bogosorter's colors</h1>
    </div>;
}

function createStyle(): CSSProperties {
    return {
        fontSize: '30px',
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center',
        padding: '40px 0',
    };
}