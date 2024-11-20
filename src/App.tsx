import { useEffect } from 'react';
import { useTranslation } from "react-i18next";

import { ThemeToggle } from './app/components/theme-toggle';
import { usePrefersColorScheme } from './app/hooks/use-prefers-color-scheme';

import './App.scss';


export const App = () => {
    const { t, i18n } = useTranslation();
    const isDarkMode = usePrefersColorScheme();

    /**
     * The function `handleChangeLanguage` changes the language using the i18n library in a TypeScript
     * React application.
     * @param {string} language - The `language` parameter in the `handleChangeLanguage` function is a
     * string that represents the language to which the i18n (internationalization) library will
     * change.
     */
    const handleChangeLanguage = ( language: string ) => {
        i18n.changeLanguage( language );
    };

    /* The `useEffect` hook in the provided code snippet is responsible for updating the theme of the
    application based on the user's preferred color scheme (dark mode or light mode). */
    useEffect( () => {
        const root = document.documentElement;

        if ( isDarkMode ) {
            root.setAttribute( 'data-theme', 'dark' );
        }
        else {
            root.setAttribute( 'data-theme', 'light' );
        }
    }, [ isDarkMode ] );

    return (
        <div>
            <ThemeToggle />
            <p>{ t( 'user-info.name' ) }</p>

            <button onClick={ () => handleChangeLanguage( 'en' ) }>English</button>
            <button onClick={ () => handleChangeLanguage( 'es' ) }>Español</button>
        </div>
    );
};

