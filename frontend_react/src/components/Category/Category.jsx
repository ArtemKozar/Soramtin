import style from './Category.module.scss'

const Category = ({ id, title }) => {
  return (
    <div className={style.card}>
      <h3>{title}</h3>
    </div>
  )
}

export default Category

Category.defaultProps = {
  id: '',
  title: '',
}
