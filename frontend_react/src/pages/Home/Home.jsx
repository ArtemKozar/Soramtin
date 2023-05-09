import Categories from '../../components/Categories/Categories'
import Description from '../../components/Description/Description'
import List from '../../components/List/List'
import style from './Home.module.scss'
import {useState} from "react";

const Home = () => {

  const [query, setQuery] = useState("All")

  return (
    <div className={style.wrapper}>
      <Description />
      <Categories query={query} setQuery={setQuery}/>
      <List query={query}/>
    </div>
  )
}

export default Home
