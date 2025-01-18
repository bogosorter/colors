import { CSSProperties } from "react";

export default function ColorContainer({ children }: { children: React.ReactNode }) {
    return <div className='color-container' style={createStyle()}>
        {children}
    </div>;
}

function createStyle(): CSSProperties {
    return {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        padding: '100px',
    };
}