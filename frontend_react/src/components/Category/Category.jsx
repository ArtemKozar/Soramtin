import style from './Category.module.scss'
import {useContext} from "react";
import QueryContext from "../../contexts/QueryContext";

const Category = ({ category }) => {

const {query, setQuery} = useContext(QueryContext)

  const handleClick = () => {
    setQuery(category)
  };

const isActive = category===query

  return (
    <div
      data-isactive={isActive}
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
