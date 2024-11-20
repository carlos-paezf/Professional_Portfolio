import { useEffect, useState } from "react";


/**
 * The function `usePrefersColorScheme` returns a boolean value indicating whether the user prefers
 * dark mode based on their system settings.
 * @returns The `usePrefersColorScheme` custom hook returns a boolean value indicating whether the user
 * prefers dark mode based on their system settings.
 */
export const usePrefersColorScheme = () => {
    const [ isDarkMode, setIsDarkMode ] = useState(
        window.matchMedia( '(prefers-color-scheme: dark)' ).matches
    );

    useEffect( () => {
        const mediaQuery = window.matchMedia( '(prefers-color-scheme: dark)' );

        const handleChange = ( event: MediaQueryListEvent ) => {
            setIsDarkMode( event.matches );
        };

        mediaQuery.addEventListener( 'change', handleChange );

        return () => {
            mediaQuery.removeEventListener( 'change', handleChange );
        };
    }, [] );

    return isDarkMode;
};