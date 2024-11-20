import { useTranslation } from "react-i18next";
import { useTheme } from "../hooks/use-theme";


export const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    const { t } = useTranslation();

    return (
        <div>
            <p>{ t( 'theme.description' ) }: { theme }</p>
            <button onClick={ () => setTheme( 'light' ) } disabled={ theme === "light" }>
                { t( 'theme.light' ) }
            </button>
            <button onClick={ () => setTheme( 'dark' ) } disabled={ theme === "dark" }>
                { t( 'theme.dark' ) }
            </button>
            <button onClick={ () => setTheme( 'system' ) } disabled={ theme === "system" }>
                { t( 'theme.system' ) }
            </button>
        </div>
    );
};