import React, { Component, Fragment } from "react";
import styles from '../../styles/Home.module.css'

class Footer extends Component {
    render() {
        return (
            <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
        )
    }
}

export default Footer;