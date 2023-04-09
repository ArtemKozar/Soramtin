import { AiOutlinePlusCircle } from 'react-icons/ai'
import style from './ListItem.module.scss'
import { images } from '../../constans'

const ListItem = ({ title, body }) => {
  return (
    <div className={style.list_item}>
      <div className={style.list_item_img}>
        <img src={images.account_image} alt="account foto" />
      </div>
      <div className={style.list_item_description}>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
      <div className={style.list_item_my_list}>
        <p>MY LIST</p>
        <AiOutlinePlusCircle className={style.list_item_btn} />
      </div>
    </div>
  )
}

export default ListItem
