import style from './Description.module.scss'
import { images } from '../../constans'

const Description = () => {
  return (
    <div className={style.description}>
      <img className={style.desc_img} src={images.description_pic} />
      <h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        neque.
      </h1>
    </div>
  )
}

export default Description
