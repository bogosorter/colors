import { CSSProperties } from 'react';
import { useColorTheme } from './utils/m7kraColorTheme';
import { Theme, lightTheme, darkTheme } from './theme';
import Header from './components/Header';
import ColorContainer from './components/ColorContainer';
import Color from './components/Color';
import ThemeToggle from './components/ThemeToggle';

export default function App() {
    const [theme, setTheme] = useColorTheme();
    const colors = theme === 'light' ? lightTheme : darkTheme;

    return <div className='app' style={createStyle(colors)}>
        <Header />
        <ColorContainer>
            {
                Object.entries(colors).map(([name, hex]) => (
                    <Color key={name} name={name} hex={hex} />
                ))
            }
        </ColorContainer>
        <ThemeToggle theme={theme} setTheme={setTheme} />
    </div>;
}

function createStyle(colors: Theme): CSSProperties {
    return {
        '--accent': colors.accent,
        '--surface': colors.surface,
        '--surface-variant': colors.surfaceVariant,
        '--text': colors.text,
        '--text-strong': colors.textStrong,
        '--text-weak': colors.textWeak,

        backgroundColor: colors.surface,
        color: colors.text,
        width: '100vw',
        minHeight: '100vh',
        fontFamily: 'Droid Sans Mono, "monospace", monospace',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    } as CSSProperties;
}