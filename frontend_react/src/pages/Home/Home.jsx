import Categories from '../../components/Categories/Categories'
import Description from '../../components/Description/Description'
import List from '../../components/List/List'
import style from './Home.module.scss'

const Home = () => {

  return (

      <div className={style.wrapper}>
        <Description/>
        <Categories />
        <List/>
      </div>

  )
}

export default Home
