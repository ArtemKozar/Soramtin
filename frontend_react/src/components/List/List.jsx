import {useState} from 'react'

import useListAPI from '../../services/useListAPI'
import ListItem from '../ListItem/ListItem'

import style from './List.module.scss'

import {Pagination} from "@mui/material";

const List = () => {
    const {list, error} = useListAPI()
    const [userItems, setUserItem] = useState([])


    const [pageObject, setPage] = useState({
        page: 1,
        perPage: 3
    })

    const {page, perPage} = pageObject

    const handlerChange = (ev, page) => {
        setPage(prevState => ({
            ...prevState, page
        }))
    }

    const filteredData = list.slice((page - 1) * perPage, page * perPage);

    if (error) {
        return <h1>Error: {error}</h1>
    }

    return (
        <div className={style.list_wrapper}>
            <h1>List</h1>

            {(filteredData || []).map((listItem) => {
                return (
                    <ListItem

                        setUserItem={setUserItem}
                        userItems={userItems}
                        key={listItem.id}
                        {...listItem}
                    />

                )
            })}
            <Pagination
                className={style.pagination}
                count={Math.ceil(list.length / perPage)}
                page={page}
                onChange={handlerChange}
            />
        </div>

    )
}

export default List
