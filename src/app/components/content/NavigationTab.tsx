import { FC } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from "react-router";


/**
 * The NavigationTabComponent renders a Navigation Tab with the 
 * available routes and the actual route name
 * @returns The current route name and the available routes
 */
export const NavigationTabComponent: FC = () => {
    const { t } = useTranslation();
    const location = useLocation();

    /* The keys represent different routes ("/about", "/resume", ...) and the values are 
    localization keys ("about-me.description", "resume.description", ...). */
    const routeTitles: { [ key: string ]: string; } = {
        "/about": "about-me.description",
        "/resume": "resume.description",
        "/portfolio": "portfolio.description",
        "/blog": "blog.description",
        "/contact": "contact.description"
    };

    /* This line of code is retrieving the title for the current page based on the route path. */
    const currentTitle = t( routeTitles[ location.pathname ] ) || "";

    return (
        <div className="navbar">
            <h1 className="navbar__title">{ currentTitle }</h1>
            <nav className="navbar__tabs">
                <NavLink to="/about" className={ ( { isActive } ) => `tab${ isActive ? ' active' : '' }` }>{ t( 'about-me.title' ) }</NavLink>
                <NavLink to="/resume" className={ ( { isActive } ) => `tab${ isActive ? ' active' : '' }` }>{ t( 'resume.title' ) }</NavLink>
                <NavLink to="/portfolio" className={ ( { isActive } ) => `tab${ isActive ? ' active' : '' }` }>{ t( 'portfolio.title' ) }</NavLink>
                <NavLink to="/blog" className={ ( { isActive } ) => `tab${ isActive ? ' active' : '' }` }>{ t( 'blog.title' ) }</NavLink>
                <NavLink to="/contact" className={ ( { isActive } ) => `tab${ isActive ? ' active' : '' }` }>{ t( 'contact.title' ) }</NavLink>
            </nav>
        </div>
    );
}; 