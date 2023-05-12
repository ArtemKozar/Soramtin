import Category from '../Category/Category'
import style from './Categories.module.scss'
import useChannelsFirebase from "../../services/useChannelsFirebase";

const Categories = () => {

  const {channelsCollection, error} = useChannelsFirebase()

  if (error) {
    return <h1>Error: {error}</h1>
  }

  return (
    <div className={style.categories_wrapper}>
      <h2>Categories</h2>
      <div className={style.cards}>

        {(channelsCollection || []).map((category, index) => {

          return <Category key={index} category={category}/>
        })}

      </div>
    </div>
  )
}

export default Categories
