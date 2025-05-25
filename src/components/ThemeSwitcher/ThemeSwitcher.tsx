import { useEffect, useState } from 'react'
import Light from "../../img/icons8-r2-d2.svg"
import Dark from "../../img/icons8-star-wars.svg"
import css from './ThemeSwitcher.module.css'
import clsx from 'clsx'
export default function ThemeSwitcher () {
    const [theme, setTheme] = useState(localStorage.getItem('themeColor') || 'dark')

    const switchTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
        const themeColor = e.target.checked ? 'dark' : 'light'
        localStorage.setItem('themeColor', themeColor)
        setTheme(themeColor)       
    }

    useEffect(() => {
        document.querySelector<HTMLElement>('body')?.setAttribute('data-theme', theme)
    }, [theme])

    return <div className={css.themeBox}>
        <label className={css.switch}>
            <input type='checkbox' onChange={switchTheme} checked={theme === 'dark'}/>
            <span className={clsx(css.slider, css.round) }>
               { theme === "dark" ? <Dark/> : <Light/> }
            </span>
        </label>
        <p>you are currently in a {theme === "dark" ? "dark" : "light"} mode</p>
    </div>
}