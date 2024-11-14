import { useContext } from "react";

import { ThemeContext } from "../context/theme-context";


/**
 * The useTheme function is a custom hook in TypeScript React that retrieves the current theme context
 * using useContext.
 * @returns The `useTheme` custom hook is being returned. This hook is used to access the current theme
 * context within a component.
 */
export const useTheme = () => {
    const context = useContext( ThemeContext );

    if ( !context ) throw new Error( 'useTheme debe usarse dentro de ThemeProvider' );

    return context;
};