import React, {useEffect, useState} from 'react';
import {collection, onSnapshot} from "firebase/firestore";
import db from "./firebase";




const UseChannelsFirebase = () => {

  const [channels, setChannels] = useState([])
  const [error, setError] = useState('')

  let channelsCollection = ["Історія", "Авто", "Розважальне", "Кіно", "Космос", "Економіка"]


  useEffect(() => {
    try {
      channelsCollection.map(channel =>
        onSnapshot(collection(db, "chanels_1", "Ca8XGZ5ik3wY1b7mdEe8", channel),
          (snapshot) =>
            setChannels(prevState => ([...prevState, ...snapshot.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id
            }))]))
        )
      )

    } catch (error) {
      setError(error.message)
    }
  }, [])



  return {channels, error,channelsCollection};


};


export default UseChannelsFirebase;


