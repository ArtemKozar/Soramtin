import React, {useEffect, useState} from 'react';
import {collection, onSnapshot} from "firebase/firestore";
import db from "./firebase";

const UseChannelsFirebase = () => {

    const [channels, setChannels] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        try {
            onSnapshot(collection(db, "channels"), (snapshot) =>
                setChannels(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
            )
        } catch (error) {
            setError(error.message)
        }
    }, [])
    return {channels, error};

};


export default UseChannelsFirebase;


