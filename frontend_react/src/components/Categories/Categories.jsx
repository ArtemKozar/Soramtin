import Category from '../Category/Category'
import style from './Categories.module.scss'
import useChannelsFirebase from "../../services/useChannelsFirebase";


const Categories = ({query, setQuery}) => {


  const {channelsCollection, error} = useChannelsFirebase({query})

  if (error) {
    return <h1>Error: {error}</h1>
  }

  return (
    <div className={style.categories_wrapper}>
      <h2>Categories</h2>
      <div className={style.cards}>

        {(channelsCollection || []).map((category, index) => {

          return <Category key={index} category={category} setQuery={setQuery} query={query}/>
        })}

      </div>
    </div>
  )
}

export default Categories
