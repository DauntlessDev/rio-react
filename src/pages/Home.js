import React from 'react';
import { Feature, OptForm } from '../components';
import AccordionContainer from '../containers/AccordionContainer';
import FooterContainer from '../containers/FooterContainer';
import HeaderContainer from '../containers/HeaderContainer';
import JumbotronContainer from '../containers/JumbotronContainer';

export default function Home() {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>
                        Unlimited films, TV shows, and more.
                    </Feature.Title>
                    <Feature.SubTitle>
                        Watch anywhere. Cancel at any time.
                    </Feature.SubTitle>
                    <OptForm>
                        <OptForm.Text>Ready to watch? Enter your email to create or restart your membership</OptForm.Text>
                        <OptForm.Input placeholder="Email address" />
                        <OptForm.Button>Get started</OptForm.Button>
                    </OptForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <AccordionContainer />
            <FooterContainer />
        </>
    )
}
