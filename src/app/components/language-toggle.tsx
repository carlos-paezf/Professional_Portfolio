import { useTranslation } from "react-i18next";


export const LanguageToggle = () => {
    const { i18n } = useTranslation();

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

    return (
        <>
            <button onClick={ () => handleChangeLanguage( 'en' ) }>English</button>
            <button onClick={ () => handleChangeLanguage( 'es' ) }>Español</button>
        </>
    );
};