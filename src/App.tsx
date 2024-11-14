import './App.css';

import { useTranslation } from "react-i18next";


export const App = () => {
    const { t, i18n } = useTranslation();

    const handleChangeLanguage = ( language: string ) => {
        i18n.changeLanguage( language );
    };

    return (
        <div>
            <p>{ t( 'user-info.name' ) }</p>

            <button onClick={ () => i18n.changeLanguage( 'en' ) }>English</button>
            <button onClick={ () => handleChangeLanguage( 'es' ) }>Español</button>
        </div>
    );
};

