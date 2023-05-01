import { AiOutlinePlusCircle, AiFillCheckCircle } from 'react-icons/ai'
import style from './ListItem.module.scss'
import { images } from '../../constans'

// const ListItem = ({ id, title, body, setUserItem, userItems })
const ListItem = ({ id, name, description, img, link, category, setUserItem, userItems }) => {
  const isAdded = userItems.filter((item) => item.id === id)
  const addUserItemHandler = () => {
    setUserItem((prevItem) => [...prevItem, { id, body: description, name }])
  }

  const removeUserItemHandler = () => {
    setUserItem((prevItem) => [...prevItem.filter((item) => item.id !== id)])
  }

  return (
    <div>
      <div className={style.list_item}>
        <div className={style.list_item_img}>
          <img src={img} alt="account foto" />
        </div>
        <div className={style.list_item_description}>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            <h3>{name}</h3>
          </a>
          <p>{description}</p>
        </div>
        <div className={style.list_item_my_list}>
          <p>MY LIST</p>
          {isAdded.length ? (
            <AiFillCheckCircle
              className={style.list_item_btn}
              onClick={removeUserItemHandler}
            />
          ) : (
            <AiOutlinePlusCircle
              className={style.list_item_btn}
              onClick={addUserItemHandler}
            />
          )}
        </div>
      </div>
      <hr className={style.list_item_line} />
    </div>
  )
}

export default ListItem
