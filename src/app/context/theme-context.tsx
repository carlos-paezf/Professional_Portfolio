import { createContext, ReactNode, useState } from 'react';
import { IThemeContext } from '../interfaces';


const ThemeContext = createContext<IThemeContext | undefined>( undefined );


const ThemeProvider = ( { children }: { children: ReactNode; } ) => {
    const [ darkMode, setDarkMode ] = useState( false );

    const toggleTheme = () => {
        setDarkMode( !darkMode );
    };

    return (
        <ThemeContext.Provider value={ { darkMode, toggleTheme } }>
            <div className={ darkMode ? 'dark' : 'light' }>{ children }</div>
        </ThemeContext.Provider>
    );
};


export { ThemeContext, ThemeProvider };
