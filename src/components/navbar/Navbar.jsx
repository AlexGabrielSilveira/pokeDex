import Link from "next/link";
import styles from "./navbar.module.css"

export default function Navbar() {
    return (
        <nav>
            <div className={styles.navbar}>
                <Link href="/"><img src="pokeball.png" alt="Logo" /></Link>
                <h1>PokeDex</h1>
            </div>
        </nav>
    )
}