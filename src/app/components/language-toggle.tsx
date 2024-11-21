import { MouseEvent, useState } from "react";
import { useTranslation } from "react-i18next";

import { LanguageType } from '../interfaces';
import { ToggleButton, ToggleButtonGroup } from "../shared/material-ui.ts";


export const LanguageToggle = () => {
    const { i18n } = useTranslation();
    const [ language, setLanguage ] = useState<LanguageType>( 'es' );

    /**
     * The function `handleLanguageSelection` sets a new language and changes the language in an i18n
     * library when a language is selected.
     * @param _ - The underscore (_) in the function parameters is typically used as a placeholder for
     * a parameter that is not going to be used within the function body. In this case, it is used as a
     * placeholder for the MouseEvent<HTMLElement> parameter, indicating that the function does not
     * need to use the event object in its
     * @param {LanguageType | null} newLanguage - The `newLanguage` parameter in the
     * `handleLanguageSelection` function is of type `LanguageType | null`. This means it can either be
     * a `LanguageType` value or `null`.
     */
    const handleLanguageSelection = ( _: MouseEvent<HTMLElement>, newLanguage: LanguageType | null ) => {
        if ( newLanguage !== null ) {
            setLanguage( newLanguage );
            i18n.changeLanguage( newLanguage );
        }
    };

    return (
        <ToggleButtonGroup value={ language } exclusive onChange={ handleLanguageSelection }>
            <ToggleButton value='en' aria-label="en">
                <span className="toggle-button">English</span>
            </ToggleButton>
            <ToggleButton value='es' aria-label="es">
                <span className="toggle-button">Español</span>
            </ToggleButton>
        </ToggleButtonGroup>
    );
};