import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import {
    Background, Container, ButtonLink, Logo, Darken, Inner
} from './styles/header';

export default function Header({ bg = true, children, ...restProps }) {
    return bg ? (
        <Background {...restProps}>
            <Darken>
                {children}
            </Darken>
        </Background>
    ) : { children }
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}


Header.Inner = function HeaderInner({ children, ...restProps }) {
    return <Inner {...restProps}>{children}</Inner>
}



Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>
}



Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
        <ReactRouterLink to={to}><Logo {...restProps}></Logo></ReactRouterLink>
    )
}

