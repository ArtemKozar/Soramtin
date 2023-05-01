import {useState} from 'react'

import db from "../../services/firebase"
import {onSnapshot, collection} from "firebase/firestore"
import useListAPI from '../../services/useListAPI'
import ListItem from '../ListItem/ListItem'

import style from './List.module.scss'

import {Pagination} from "@mui/material";
import {useEffect} from "react";

const List = () => {
    const {list, error} = useListAPI()
    const [userItems, setUserItem] = useState([])
    const [channels, setChannels] = useState([])
    console.log(channels)


    useEffect(() => {
        onSnapshot(collection(db, "channels"), (snapshot) =>
            setChannels(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
        )
    }, [])


    const [pageObject, setPage] = useState({
        page: 1,
        perPage: 5
    })

    const {page, perPage} = pageObject

    const handlerChange = (ev, page) => {
        setPage(prevState => ({
            ...prevState, page
        }))
    }

    // const filteredData = list.slice((page - 1) * perPage, page * perPage);
    const filteredData = channels.slice((page - 1) * perPage, page * perPage);

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
                count={Math.ceil(channels.length / perPage)}
                page={page}
                onChange={handlerChange}
            />
        </div>

    )
}

export default List
