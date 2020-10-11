import React, { useContext, useState } from 'react'
import { FirebaseContext } from '../context/firebaseContext'
import HeaderContainer from '../containers/HeaderContainer'
import FooterContainer from '../containers/FooterContainer'
import { useHistory } from 'react-router-dom'
import { Form } from '../components'
import * as ROUTES from '../constants/routes'

export default function Signin() {
    const { firebase } = useContext(FirebaseContext);
    const history = useHistory()

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = password === '' || emailAddress === '';


    const handleSignIn = (event) => {
        event.preventDefault();

        firebase.auth().signInWithEmailAndPassword(emailAddress, password)
            .then(() => {
                history.push(ROUTES.BROWSE)
            })
            .catch((error) => {
                setEmailAddress('')
                setPassword('')
                setError(error.message);
            })
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign in</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleSignIn} method="POST">
                        <Form.Input placeholder="Email address"
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)}></Form.Input>
                        <Form.Input
                            type="Password"
                            autoComplete="off" placeholder="Password"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}></Form.Input>
                        <Form.Submit disabled={isInvalid} type="submit">
                            Sign In
                        </Form.Submit>
                    </Form.Base>
                    <Form.Text>
                        New to Netflix? <Form.Link to={ROUTES.SIGN_UP}>
                            Sign Up now.
                        </Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This page is protected by Google reCAPTCHA to ensure you'are not a  bot. Learn More.
                    </Form.TextSmall>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}
