import style from './Category.module.scss'

const Category = ({ category, setQuery, query }) => {


  const handleClick = () => {
    setQuery(category)
  };

const isActive = category===query

  return (
    <div
      data-isActive={isActive}
      className={style.card}

      onClick={handleClick}>
      <h3>{category}</h3>
    </div>
  )
}

export default Category

Category.defaultProps = {
  id: '',
  title: '',
}
