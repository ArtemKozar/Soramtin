import React, {useEffect, useState} from 'react';
import {collection, onSnapshot} from "firebase/firestore";
import db from "./firebase";

const UseChannelsFirebase = ({query=""}) => {

  const [channels, setChannels] = useState([])
  const [error, setError] = useState('')

  const channelsCollection = ["Історія", "Авто", "Розважальне", "Кіно", "Космос", "Економіка", "Тех"]

  useEffect(() => {
    try {
      query==="All" ?
        channelsCollection.map(channel =>
        onSnapshot(collection(db, "chanels_1", "Ca8XGZ5ik3wY1b7mdEe8", channel),
          (snapshot) =>
            setChannels(prevState => ([...prevState, ...snapshot.docs.map((doc) => {

              return {
              ...doc.data(),
              id: doc.id
            }})]))
        )
      )
        :
        onSnapshot(collection(db, "chanels_1", "Ca8XGZ5ik3wY1b7mdEe8", query),
          (snapshot) =>
            setChannels(() => ([ ...snapshot.docs.map((doc) => {
              return {
                ...doc.data(),
                id: doc.id
              }})]))
        )


    } catch (error) {
      setError(error.message)
    }
  }, [query])


  return {channels, error, channelsCollection};


};


export default UseChannelsFirebase;


