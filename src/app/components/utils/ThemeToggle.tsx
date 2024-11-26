import { MouseEvent } from "react";

import { useTheme } from "../../hooks/index.ts";
import { ThemeType } from "../../interfaces/index.ts";

import { BedtimeIcon, Brightness7Icon, SettingsSuggestIcon, ToggleButton, ToggleButtonGroup } from "../../shared/material-ui.ts";


export const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();

    /**
     * The function `handleThemeSelection` sets a new theme if it is not null when triggered by a mouse
     * event.
     * @param _ - The underscore (_) in the function parameters is typically used as a placeholder for
     * a parameter that is not being used or accessed within the function body. In this case, it is
     * used as a placeholder for the MouseEvent<HTMLElement> parameter, indicating that the function
     * does not need to use the event object in its
     * @param {ThemeType | null} newTheme - The `newTheme` parameter in the `handleThemeSelection`
     * function is of type `ThemeType | null`. This means it can either be a value of type `ThemeType`
     * or `null`.
     */
    const handleThemeSelection = ( _: MouseEvent<HTMLElement>, newTheme: ThemeType | null ) => {
        if ( newTheme !== null ) {
            setTheme( newTheme );
        }
    };

    return (
        <ToggleButtonGroup value={ theme } exclusive onChange={ handleThemeSelection } aria-label="theme selection">
            <ToggleButton value="light" aria-label="light">
                <Brightness7Icon className="toggle-button" />
            </ToggleButton>
            <ToggleButton value="dark" aria-label="dark">
                <BedtimeIcon className="toggle-button" />
            </ToggleButton>
            <ToggleButton value="system" aria-label="system">
                <SettingsSuggestIcon className="toggle-button" />
            </ToggleButton>
        </ToggleButtonGroup>
    );
};