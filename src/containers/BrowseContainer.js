import React, { useContext, useEffect, useState } from 'react'
import SelectProfileContainer from './SelectProfileContainer'
import { FirebaseContext } from '../context/firebaseContext'
import { Loading } from '../components'

export default function BrowseContainer({ slides }) {
    const [profile, setProfile] = useState({})
    const [loading, setLoading] = useState(true)
    const { firebase } = useContext(FirebaseContext)
    const user = firebase.auth().currentUser || {};

    useEffect(() => {
        console.log('profile', profile)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [profile.displayName])

    return profile.displayName ?
        (
            loading ? <Loading src={user.photoURL} /> : null
        ) :
        (
            < SelectProfileContainer user={user} setProfile={setProfile} />
        )
}
