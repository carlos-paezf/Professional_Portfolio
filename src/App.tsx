import { RouterProvider } from 'react-router';
import { FloatingMenuLayout } from './app/layout';
import { router } from './app/router/router';



/**
 * The App component renders a RouterProvider component with a specified router prop and a
 * FloatingMenuLayout component.
 * @returns The `App` component is being returned. It consists of a `RouterProvider` component with a
 * `router` prop and a `FloatingMenuLayout` component.
 */
export const App = () => {
    return (
        <>
            <RouterProvider router={ router } />
            <FloatingMenuLayout />
        </>
    );
};