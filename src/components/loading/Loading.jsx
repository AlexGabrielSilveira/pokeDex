import Image from "next/image"
import styles from "./loading.module.css"

export default function Loading() {
    return <Image className={styles.img} src="https://media.tenor.com/images/98f97eb748d73e0bd147b5e0037fe9a9/tenor.gif" alt="loading" width="100" height="100" />
}