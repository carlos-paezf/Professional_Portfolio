import { LanguageToggle, ThemeToggle } from './app/components';


export const App = () => {
    return (
        <>
            <main>
                <div className="column-1 sidenav">

                </div>
                <div className="column-2">
                    <h1>App</h1>
                </div>
            </main>

            <div className="floating-menu">
                <ThemeToggle />
                <LanguageToggle />
            </div>
        </>
    );
};