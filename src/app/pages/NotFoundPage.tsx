import Spline from '@splinetool/react-spline';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router';


/**
 * The NotFoundPage is a component thats allows the user to be informed that the resource they
 * were looking for was not found
 * @returns The page with the respective navigation
 */
export const NotFoundPage: FC = () => {
    const { t } = useTranslation();

    return (
        <div className='not-found'>
            <section className="not-found__content">
                <h1 className="not-found__title">{ t( 'not-found.title' ) }</h1>
                <p className="not-found__message"><i>{ t( 'not-found.content' ) }</i></p>
                <p className='not-found__help'>{ t( 'not-found.help' ) }</p>

                <div className="not-found__actions">
                    <NavLink to="/about">{ t( 'about-me.title' ) }</NavLink>
                    <NavLink to="/resume">{ t( 'resume.title' ) }</NavLink>
                    <NavLink to="/portfolio">{ t( 'portfolio.title' ) }</NavLink>
                    <NavLink to="/blog">{ t( 'blog.title' ) }</NavLink>
                    <NavLink to="/contact">{ t( 'contact.title' ) }</NavLink>
                </div>
            </section>

            <section className="not-found__animation">
                <Spline scene="https://prod.spline.design/g7cnfNav6-07N0pk/scene.splinecode" />
            </section>
        </div>
    );
};

