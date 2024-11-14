import { useTheme } from "../hooks/use-theme";


export const ThemeToggle = () => {
    const { darkMode, toggleTheme } = useTheme();

    return (
        <button onClick={ toggleTheme }>
            { darkMode ? 'Modo Claro' : 'Modo oscuro' }
        </button>
    );
};