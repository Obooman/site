import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import light from "./light.svg"
import dark from "./dark.svg"
import styles from "./index.module.css"

export default () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <a
          href=""
          onClick={ev => {
            ev.preventDefault()
            toggleTheme(theme === "dark" ? "light" : "dark")
          }}
          className={styles.switchButton}
        >
          {theme === "dark" ? (
            <img src={dark} alt="" />
          ) : (
            theme === "light" && <img src={light} alt="" />
          )}
        </a>
      )}
    </ThemeToggler>
  )
}
