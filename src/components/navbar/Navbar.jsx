import Link from "next/link";
import styles from "./navbar.module.css"
import Image from "next/image";
import Input from "../input/Input";

export default function Navbar() {
    return (
        <nav>
            <div className={styles.navbar}>
                <Link href="/"><Image src="/pokeball.png" width="40" height="40" alt="logo"/></Link>
                <h1>PokeDex</h1>
                <div>
                    <Input />
                </div>
            </div>
        </nav>
    )
}