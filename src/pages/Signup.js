import React, { useContext, useState } from 'react'
import { FirebaseContext } from '../context/firebaseContext'
import HeaderContainer from '../containers/HeaderContainer'
import FooterContainer from '../containers/FooterContainer'
import { useHistory } from 'react-router-dom'
import { Form } from '../components'
import * as ROUTES from '../constants/routes'

export default function Signup() {
    const { firebase } = useContext(FirebaseContext);
    const history = useHistory()


    const [name, setName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = name === '' || password === '' || confirmPassword === '' || emailAddress === '';



    const handleSignIn = (event) => {
        event.preventDefault();

        if (password === confirmPassword) {
            firebase.auth().createUserWithEmailAndPassword(emailAddress, password)
                .then((result) =>
                    result.user
                        .updateProfile({
                            displayName: name,
                            photoURL: Math.floor(Math.random() * 5) + 1,
                        }).then(() => history.push(ROUTES.BROWSE))
                )
                .catch((error) => {
                    setName('')
                    setEmailAddress('')
                    setPassword('')
                    setConfirmPassword('')
                    setError(error.message);
                })
        } else {
            setError("Password does not match.");
        }


    }
    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign up</Form.Title>
                    {error && <Form.Error data-testid="error">{error}</Form.Error>}
                    <Form.Base onSubmit={handleSignIn} method="POST">
                        <Form.Input placeholder="Name"
                            value={name}
                            onChange={({ target }) => setName(target.value)}></Form.Input>
                        <Form.Input placeholder="Email address"
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)}></Form.Input>
                        <Form.Input
                            type="Password"
                            autoComplete="off" placeholder="Password"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}></Form.Input>
                        <Form.Input
                            type="Password"
                            autoComplete="off" placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={({ target }) => setConfirmPassword(target.value)}></Form.Input>
                        <Form.Submit data-testid="sign-up" disabled={isInvalid} type="submit">
                            Sign Up
                        </Form.Submit>
                    </Form.Base>
                    <Form.Text>
                        Already a user? <Form.Link to={ROUTES.SIGN_IN}>
                            Sign In now.
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
