import {useState} from 'react'

import ListItem from '../ListItem/ListItem'
import PaginationWrapper from "../layouts/Pagination/Pagination";

import style from './List.module.scss'
import useChannelsFirebase from "../../services/useChannelsFirebase";

const List = () => {
    const {channels, error} = useChannelsFirebase()
    const [userItems, setUserItem] = useState([])

    if (error) {
        return <h1>Error: {error}</h1>
    }

    return (
        <div className={style.list_wrapper}>
            <h1>List</h1>
            <PaginationWrapper
                data={channels}
                renderWithNewProps={true}
                elementsPerPage={5}
            >
                <ListItem
                    setUserItem={setUserItem}
                    userItems={userItems}
                />
            </PaginationWrapper>
        </div>

    )
}

export default List
