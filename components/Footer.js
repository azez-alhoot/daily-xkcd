import Link from 'next/link'


export default function Footer(props){
    let comicsNums = [];
    let num = props.comics.num; 
    for(let i = 0; i<10; i++){
        comicsNums.push(num-i)
    }
    console.log(comicsNums)
    return (
        <>
            <p>Previous 10</p>
            <ul>
                {comicsNums.map( (comic) =>
                    <Link key={comic} href="/comics/[id].js" as={`/comics/${comic}` }>
                        <a>#{comic}</a>
                    </Link>
                )}
            </ul>
            <style jsx>{`
                a{
                    margin-right: 5px;
                    color: red;
                }
            `}
            </style>
            <p><small>@copyright COMICS</small></p>
        </>
    );
}