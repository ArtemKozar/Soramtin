import Categories from '../../components/Categories/Categories'
import Description from '../../components/Description/Description'
import style from './Home.module.scss'

const Home = () => {
  return (
    <div className={style.wrapper}>
      <Description />
      <Categories />
    </div>
  )
}

export default Home
