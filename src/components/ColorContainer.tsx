import './ColorContainer.css';

export default function ColorContainer({ children }: { children: React.ReactNode }) {
    return <div className='color-container'>
        {children}
    </div>;
}
