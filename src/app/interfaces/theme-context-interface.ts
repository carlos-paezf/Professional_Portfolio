export type ThemeType = 'light' | 'dark' | 'system';


export interface IThemeContextProps {
    theme: ThemeType,
    setTheme: ( theme: ThemeType ) => void;
}