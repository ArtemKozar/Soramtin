import style from './Category.module.scss'

const Category = ({ category }) => {
  console.log("category "+category)
  return (
    <div className={style.card}>
      <h3>{category}</h3>
    </div>
  )
}

export default Category

Category.defaultProps = {
  id: '',
  title: '',
}
