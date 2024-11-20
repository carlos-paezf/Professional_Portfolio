import { createContext, ReactNode, useEffect, useState } from 'react';
import { IThemeContextProps, ThemeType } from '../interfaces';


const ThemeContext = createContext<IThemeContextProps | undefined>( undefined );


const ThemeProvider = ( { children }: { children: ReactNode; } ) => {
    const [ theme, setTheme ] = useState<ThemeType>( 'system' );
    const [ isDarkMode, setIsDarkMode ] = useState( false );

    /* This `useEffect` hook is responsible for setting up the initial dark mode preference based on
    the theme selected by the user. Here's a breakdown of what it does: */
    useEffect( () => {
        const systemPrefersDark = window.matchMedia( '(prefers-color-scheme: dark)' ).matches;

        if ( theme === 'system' ) {
            setIsDarkMode( systemPrefersDark );
        } else {
            setIsDarkMode( theme === 'dark' );
        }

        localStorage.setItem( 'theme', theme );
    }, [ theme ] );


    /* This `useEffect` hook is responsible for setting up event listeners to handle changes in the
    preferred color scheme and updating the theme accordingly. Here's a breakdown of what it does: */
    useEffect( () => {
        const storedTheme = localStorage.getItem( 'theme' ) as ThemeType | null;
        if ( storedTheme ) setTheme( storedTheme );

        const mediaQuery = window.matchMedia( '(prefers-color-scheme: dark)' );
        const handleChange = () => {
            if ( theme === 'system' ) {
                setIsDarkMode( mediaQuery.matches );
            }
        };

        mediaQuery.addEventListener( 'change', handleChange );

        return () => mediaQuery.removeEventListener( 'change', handleChange );
    }, [ theme ] );


    /* The `useEffect` hook you provided is responsible for updating the `data-theme` attribute of the
    root HTML element based on the `isDarkMode` state. */
    useEffect( () => {
        const root = document.documentElement;
        root.setAttribute( 'data-theme', isDarkMode ? 'dark' : 'light' );
    }, [ isDarkMode ] );


    return (
        <ThemeContext.Provider value={ { theme, setTheme } }>
            { children }
        </ThemeContext.Provider>
    );
};


export { ThemeContext, ThemeProvider };
