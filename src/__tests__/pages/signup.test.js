import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { SignUp } from '../../pages';
import { FirebaseContext } from '../../context/firebaseContext';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({}),
}));

const firebase = {
    auth: jest.fn(() => ({
        createUserWithEmailAndPassword: jest.fn(() =>
            Promise.resolve({ user: { updateProfile: jest.fn(() => Promise.resolve('I am signed up!')) } })
        ),
    })),
};

describe('<SignUp />', () => {
    it('renders the sign up page with a form submission', async () => {
        const { getByTestId, getByPlaceholderText, queryByTestId } = render(
            <Router>
                <FirebaseContext.Provider value={{ firebase }}>
                    <SignUp />
                </FirebaseContext.Provider>
            </Router>
        );


        await act(async () => {
            await fireEvent.change(getByPlaceholderText('Name'), { target: { value: 'Brave' } });
            await fireEvent.change(getByPlaceholderText('Email address'), { target: { value: 'brave@gmail.com' } });
            await fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'password' } });
            await fireEvent.change(getByPlaceholderText('Confirm Password'), { target: { value: 'password' } });
            fireEvent.click(getByTestId('sign-up'));

            expect(getByPlaceholderText('Name').value).toBe('Brave');
            expect(getByPlaceholderText('Email address').value).toBe('brave@gmail.com');
            expect(getByPlaceholderText('Password').value).toBe('password');
            expect(getByPlaceholderText('Confirm Password').value).toBe('password');

            expect(queryByTestId('error')).toBeFalsy();
        });
    });
});


describe('<SignUp />', () => {
    it('renders the sign up page with not the same password error', async () => {
        const { getByTestId, getByPlaceholderText, queryByTestId } = render(
            <Router>
                <FirebaseContext.Provider value={{ firebase }}>
                    <SignUp />
                </FirebaseContext.Provider>
            </Router>
        );


        await act(async () => {
            await fireEvent.change(getByPlaceholderText('Name'), { target: { value: 'Brave' } });
            await fireEvent.change(getByPlaceholderText('Email address'), { target: { value: 'brave@gmail.com' } });
            await fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'password' } });
            await fireEvent.change(getByPlaceholderText('Confirm Password'), { target: { value: 'pass' } });
            fireEvent.click(getByTestId('sign-up'));

            expect(getByPlaceholderText('Name').value).toBe('Brave');
            expect(getByPlaceholderText('Email address').value).toBe('brave@gmail.com');
            expect(getByPlaceholderText('Password').value).toBe('password');
            expect(getByPlaceholderText('Confirm Password').value).toBe('pass');

            expect(queryByTestId('error')).toBeTruthy();
        });
    });
});