import Link from 'next/link'
// import Style from 'next/style'

export default function Header(){
    return(
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
    )
}