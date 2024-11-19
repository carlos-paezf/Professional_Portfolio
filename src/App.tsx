import './App.scss';

import { useTranslation } from "react-i18next";
import { ThemeToggle } from './app/components/theme-toggle';


export const App = () => {
    const { t, i18n } = useTranslation();

    const handleChangeLanguage = ( language: string ) => {
        i18n.changeLanguage( language );
    };

    return (
        <div>
            <ThemeToggle />
            <p>{ t( 'user-info.name' ) }</p>

            <button onClick={ () => handleChangeLanguage( 'en' ) }>English</button>
            <button onClick={ () => handleChangeLanguage( 'es' ) }>Español</button>
        </div>
    );
};

