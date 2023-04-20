import { useState } from 'react'
import useListAPI from '../../services/useListAPI'
import ListItem from '../ListItem/ListItem'

import style from './List.module.scss'

const List = () => {
  const { list, error } = useListAPI()
  const [userItems, setUserItem] = useState([])

  if (error) {
    return <h1>Error: {error}</h1>
  }

  console.log(userItems)

  return (
    <div className={style.list_wrapper}>
      <h1>List</h1>

      {(list || []).map((listItem) => {
        return (
          <ListItem
            setUserItem={setUserItem}
            userItems={userItems}
            key={listItem.id}
            {...listItem}
          />
        )
      })}
    </div>
  )
}

export default List
