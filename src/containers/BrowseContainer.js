import React, { useContext, useState } from 'react'
import SelectProfileContainer from './SelectProfileContainer'
import { FirebaseContext } from '../context/firebaseContext'

export default function BrowseContainer({ slides }) {
    const [profile, setProfile] = useState({})
    const { firebase } = useContext(FirebaseContext)
    const user = firebase.auth().currentUser || {};

    return (
        <SelectProfileContainer user={user} setProfile={setProfile} />
    )
}
