import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SelectProfileContainer from '../../containers/SelectProfileContainer'

jest.mock('react-router-dom');

describe('<Profiles />', () => {
    it('renders the <Profiles />', () => {
        const user = { displayName: 'Brave', photoURL: 'profile.png' };
        const setProfile = jest.fn();
        const { getByTestId } = render(<SelectProfileContainer user={user} setProfile={setProfile} />);

        fireEvent.click(getByTestId('user-profile'));
        expect(setProfile).toHaveBeenCalled();
    });
});