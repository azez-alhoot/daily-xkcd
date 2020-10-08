import styles from '../styles.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home(props) {
  return (
    <div className={styles.hello}>
      <Header />
      <h1>XKCD</h1>
      <h1>{props.comics.safe_title}</h1>
      <img src={props.comics.img}></img>
      <h1>{props.comics.num}</h1>
      <Footer comics={props.comics}/>
    </div>
  )
}


export async function getStaticProps(context) {

  const res = await fetch('https://xkcd.com/info.0.json')
  const dataObj = await res.json();
  console.log(dataObj);
  return { props: {comics: dataObj} };
}