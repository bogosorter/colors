import { Moon, Sun } from 'react-bootstrap-icons';
import { ColorTheme } from '../utils/m7kraColorTheme';
import './ThemeToggle.css';

export default function ThemeToggle({ theme, setTheme }: { theme: string, setTheme: (theme: ColorTheme) => void }) {
  return (
    <div className="theme-toggle" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        {theme === 'light' ? <Moon size={30} /> : <Sun size={30} />}
    </div>
  );
}
