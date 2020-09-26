import React from "react"
import styles from "./main.module.css"
import { withPrefix } from "gatsby"

export default () => (
  <a className={styles.logo} href={withPrefix("/")}>
    <span className={styles.logoRow}>OBOO</span>
    <span className={styles.logoRow}>CHENG</span>
  </a>
)
