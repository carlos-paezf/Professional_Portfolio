import { FC, MouseEvent } from "react";

import { useTheme } from "../../hooks/index.ts";
import { ThemeType } from "../../interfaces/index.ts";

import { BedtimeIcon, Brightness7Icon, SettingsSuggestIcon, ToggleButton, ToggleButtonGroup } from "../../shared/material-ui.ts";


/**
 * The `ThemeToggle` component in TypeScript React allows users to toggle between light, dark, and
 * system themes with corresponding icons.
 * @returns The `ThemeToggle` component is being returned. It consists of a `ToggleButtonGroup`
 * component with three `ToggleButton` components inside. Each `ToggleButton` represents a different
 * theme option - light, dark, and system. The `ToggleButtonGroup` component manages the selection of
 * the theme and triggers the `handleThemeSelection` function when the theme is changed.
 */
export const ThemeToggle: FC = () => {
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