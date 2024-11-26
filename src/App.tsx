import { AppLayout, FloatingMenuLayout } from './app/layout';


/**
 * The `App` component renders the `AppLayout` and `FloatingMenuLayout` components in a React
 * application.
 * @returns The `App` component is being returned, which consists of the `AppLayout` component and the
 * `FloatingMenuLayout` component wrapped in a fragment (`<>...</>`).
 */
export const App = () => {
    return (
        <>
            <AppLayout />
            <FloatingMenuLayout />
        </>
    );
};