import Link from "next/link";

export function Button({ pag, id }) {
    return (
        <button>
            <Link href={`/pokemon/${id}`}>{pag}</Link>
        </button>
    )
}