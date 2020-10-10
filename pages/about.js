import Link from 'next/link'

export default function About() {
    return (
        <>
            <nav>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/about">
                    <a>About</a>
                </Link>

                <style jsx>{`
                    a{
                        margin-right: 5px;
                        color: green;
                    }
                    `}
                </style>

            </nav>
            <h1>About Page</h1>
        </>
    )
}