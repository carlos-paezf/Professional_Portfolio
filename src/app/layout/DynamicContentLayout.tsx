import { FC } from "react";
import { Outlet } from "react-router";

import { NavigationTabComponent } from "../components/content/NavigationTab";


/**
 * The `DynamicContentLayout` component in TypeScript React renders a dynamic content layout with a
 * navigation tab component and an outlet.
 * @returns The `DynamicContentLayout` component is being returned. It consists of a `div` element with
 * the class name "dynamic-content" containing the `NavigationTabComponent` and the `Outlet` component.
 */
export const DynamicContentLayout: FC = () => {
    return (
        <div className="dynamic-content">
            <NavigationTabComponent />
            <Outlet />
        </div>
    );
};