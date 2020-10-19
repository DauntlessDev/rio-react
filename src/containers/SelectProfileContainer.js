import React from 'react'
import { Header, Profiles } from '../components'
import logo from '../logo.png'
import * as ROUTES from '../constants/routes'

export default function SelectProfileContainer({ user, setProfile }) {
    return (
        <>
            {/* <Header > */}
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
            </Header.Frame>
            {/* </Header> */}

            {console.log('photo', user.photoUrl)}
            {console.log('name', user.displayName)}
            <Profiles>
                <Profiles.Title>Who's watching?</Profiles.Title>
                <Profiles.List>
                    <Profiles.User onClick={() => setProfile({ displayName: user.displayName, photoURL: user.photoURL })}>
                        <Profiles.Picture src={user.photoURL} />
                        <Profiles.Name>{user.displayName}</Profiles.Name>
                    </Profiles.User>
                </Profiles.List>
            </Profiles>
        </>
    )
}
