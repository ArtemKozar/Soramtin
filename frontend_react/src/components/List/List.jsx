import useListAPI from '../../services/useListAPI'
import ListItem from '../ListItem/ListItem'

// import style from './List.module.scss'

const List = () => {
  const { list, error } = useListAPI()

  if (error) {
    return <h1>Error: {error}</h1>
  }

  return (
    <div>
      <h1>List</h1>
      {(list || []).map((listItem) => {
        return <ListItem key={listItem.id} {...listItem} />
      })}
    </div>
  )
}

export default List
