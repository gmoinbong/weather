import { Theme } from "../context/ThemeContext";

export function ChangeRootVariable (theme:Theme){
    const root = document.querySelector(':root') as HTMLElement;
    const components =
        [
            'components-background',
            'body-background',
            'card-background',
            'card-shadow',
            'text-color'    
        ]
    components.forEach(component => {
        root.style.setProperty(
            `--${component}-default`,
            `var(--${component}-${theme})`)
    }
    )
}