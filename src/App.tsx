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

            <button onClick={ () => handleChangeLanguage( 'en' ) }>English</button>
            <button onClick={ () => handleChangeLanguage( 'es' ) }>Español</button>
        </div>
    );
};

