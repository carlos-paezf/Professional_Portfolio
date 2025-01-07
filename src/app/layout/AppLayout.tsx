import { FC } from "react";

import { DynamicContentLayout } from "./DynamicContentLayout";
import { SidenavLayout } from "./SidenavLayout";


/**
 * The `AppLayout` function component renders the main layout of the application with a side navigation
 * and dynamic content.
 * @returns The `AppLayout` component is being returned, which consists of a `<main>` element
 * containing the `SidenavLayout` and `DynamicContentLayout` components.
 */
export const AppLayout: FC = () => {
    return (
        <main>
            <SidenavLayout />
            <DynamicContentLayout />
        </main>
    );
};