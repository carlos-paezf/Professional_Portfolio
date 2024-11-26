import { FC } from "react";
import { LanguageToggle, ThemeToggle } from "../components";


/**
 * The FloatingMenuLayout component renders a floating menu with ThemeToggle and LanguageToggle
 * components.
 * @returns A `FloatingMenuLayout` functional component is being returned. It renders a `div` element
 * with the class name "floating-menu" containing `ThemeToggle` and `LanguageToggle` components.
 */
export const FloatingMenuLayout: FC = () => {
    return (
        <div className="floating-menu">
            <ThemeToggle />
            <LanguageToggle />
        </div>
    );
};