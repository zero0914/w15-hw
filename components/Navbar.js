import styles from './Navbar.module.css';


export default function Navbar() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.logo}>Logo</h1>
                <input type="checkbox" id="nav-toggle" className={styles["nav-toggle"]}/>
                <nav className={styles.nav}>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
                <label for="nav-toggle" className={styles["nav-toggle-label"]}> 
                <span></span>
                </label>
            </header>
            
        </div>
    )
}
