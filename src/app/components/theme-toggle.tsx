import { useTheme } from "../hooks/use-theme";


export const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();

    return (
        <div>
            <p>Tema actual: { theme }</p>
            <button onClick={ () => setTheme( 'light' ) }>Modo Claro</button>
            <button onClick={ () => setTheme( 'dark' ) }>Modo Oscuro</button>
            <button onClick={ () => setTheme( 'system' ) }>Automático</button>
        </div>
    );
};