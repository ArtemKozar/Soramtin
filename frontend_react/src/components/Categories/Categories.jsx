import useCategoriesAPI from '../../services/useCategoriesAPI'
import Category from '../Category/Category'
import style from './Categories.module.scss'

const Categories = () => {
  const { categories, error } = useCategoriesAPI()

  if (error) {
    return <h1>Error: {error}</h1>
  }

  return (
    <div className={style.categories_wrapper}>
      <h2>Categories</h2>
      <div className={style.cards}>
        {(categories || []).map((category) => {
          return <Category key={category.id} {...category} />
        })}
      </div>
    </div>
  )
}

export default Categories
