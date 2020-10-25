import React, { useContext, useEffect, useState } from 'react'
import Fuse from 'fuse.js'
import SelectProfileContainer from './SelectProfileContainer'
import FooterContainer from './FooterContainer'
import { FirebaseContext } from '../context/firebaseContext'
import { Card, Header, Loading, Player, } from '../components'
import * as ROUTES from '../constants/routes'
import logo from '../logo.png'

export default function BrowseContainer({ slides }) {
    const [category, setCategory] = useState('series')
    const [searchTerm, setSearchTerm] = useState('')
    const [profile, setProfile] = useState({})
    const [loading, setLoading] = useState(true)
    const { firebase } = useContext(FirebaseContext)
    const user = firebase.auth().currentUser || {};
    const [slideRows, setSlideRows] = useState([])

    useEffect(() => {
        console.log('profile', profile)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [profile])

    useEffect(() => {
        setSlideRows(slides[category])
    }, [slides, category])

    useEffect(() => {
        const fuse = new Fuse(slideRows, { keys: ['data.description', 'data.title', 'data.genre'] })

        const results = fuse.search(searchTerm).map(({ item }) => item)

        if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
            setSlideRows(results)
        } else {
            setSlideRows(slides[category])
        }
    }, [searchTerm])

    return profile.displayName ?
        (
            loading ?
                <Loading src={user.photoURL} />
                :
                <>
                    <Loading.ReleaseBody />
                    <Header src="stranger2" dontShowOnSmallViewPort>
                        <Header.Frame>
                            <Header.Group>
                                <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
                                <Header.TextLink active={category === 'series' ? 'true' : 'false'} onClick={() => setCategory('series')}>SERIES</Header.TextLink>
                                <Header.TextLink active={category === 'films' ? 'true' : 'false'} onClick={() => setCategory('films')}>FILMS</Header.TextLink>
                            </Header.Group>
                            <Header.Group>
                                <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                                <Header.Profile>
                                    <Header.Picture src={user.photoURL} />
                                    <Header.Dropdown>
                                        <Header.Group>
                                            <Header.Picture src={user.photoURL} />
                                            <Header.TextLink>{user.displayName}</Header.TextLink>
                                        </Header.Group>
                                        <Header.Group>
                                            <Header.TextLink onClick={() => firebase.auth().signOut()}>Sign out</Header.TextLink>
                                        </Header.Group>

                                    </Header.Dropdown>
                                </Header.Profile>
                            </Header.Group>
                        </Header.Frame>
                        <Header.Feature>
                            <Header.SubText>Season 3 now available</Header.SubText>
                            <Header.FeatureCallOut>STRANGER</Header.FeatureCallOut>
                            <Header.FeatureCallOutBottom>THINGS</Header.FeatureCallOutBottom>
                            <Header.Text>Set in the 1980s in the fictional town of Hawkins, Indiana, the first season focuses on the investigation into the disappearance of a young boy amid supernatural events occurring around the town, including the appearance of a girl with psychokinetic abilities.
                            </Header.Text>
                            <Header.PlayButton>Start Watching</Header.PlayButton>
                        </Header.Feature>
                    </Header>
                    <Card.Group>
                        {slideRows.map((slideItem) => (
                            <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
                                <Card.Title>{slideItem.title}</Card.Title>
                                <Card.Entities>
                                    {slideItem.data.map((item) => (
                                        <Card.Item key={item.docId} item={item}>
                                            <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                                            <Card.Meta>
                                                <Card.SubTitle>{item.title}</Card.SubTitle>
                                                <Card.Text>{item.description}</Card.Text>
                                            </Card.Meta>
                                        </Card.Item>
                                    ))}
                                </Card.Entities>
                                <Card.Feature category={category}>
                                    <Player>
                                        <Player.Button />
                                        <Player.Video src="/videos/bunny.mp4" />
                                    </Player>
                                </Card.Feature>
                            </Card>
                        ))}
                    </Card.Group>
                    <FooterContainer />
                </>
        ) :
        (
            < SelectProfileContainer user={user} setProfile={setProfile} />
        )
}
