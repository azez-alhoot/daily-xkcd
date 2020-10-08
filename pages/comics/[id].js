import Link from 'next/link'

export default function ComicDetails(props){
    return (
        <>
            <nav>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>
            </nav>
            <h1>{props.comic.title}</h1>
            <img src={props.comic.img}></img>
        </>
    )
}

export async function getServerSideProps(context){
    const id = context.query.id
    console.log(id)
    const res = await fetch(`https://xkcd.com/${id}/info.0.json`);
    const dataObj = await res.json();
    return { props: {comic: dataObj} };
}