import React, { useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import {
    Background, Container, Feature, Text, Link as TextLink, ButtonLink, Logo, Darken, Inner, Group, FeatureCallOut, FeatureCallOutBottom, Dropdown,
    SearchIcon,
    SearchInput, Search, SubText,
    Picture, Profile, PlayButton,
} from './styles/header';

export default function Header({ bg = true, children, ...restProps }) {
    return bg ? (
        <Background {...restProps} data-testid="header-bg">
            <Darken>
                {children}
            </Darken>
        </Background>
    ) : <>{children}</>
}


Header.Profile = function HeaderProfile({ children, ...restProps }) {
    return <Profile {...restProps}>{children}</Profile>;
};

Header.Picture = function HeaderPicture({ src, ...restProps }) {
    return <Picture {...restProps} src={`/images/users/${src}.png`} />;
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
    return <Dropdown {...restProps}>{children}</Dropdown>;
};


Header.Feature = function HeaderFeature({ children, ...restProps }) {
    return <Feature {...restProps}>{children}</Feature>
}

Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...restProps }) {
    return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
}
Header.FeatureCallOutBottom = function HeaderFeatureCallOut({ children, ...restProps }) {
    return <FeatureCallOutBottom {...restProps}>{children}</FeatureCallOutBottom>
}

Header.Text = function HeaderText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

Header.SubText = function HeaderText({ children, ...restProps }) {
    return <SubText {...restProps}>{children}</SubText>
}


Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Header.Group = function HeaderGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>
}


Header.Inner = function HeaderInner({ children, ...restProps }) {
    return <Inner {...restProps}>{children}</Inner>
}



Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>
}



Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
    return <TextLink {...restProps}>{children}</TextLink>
}



Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
        <ReactRouterLink to={to}><Logo {...restProps}></Logo></ReactRouterLink>
    )
}

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps }) {
    const [searchActive, setSearchActive] = useState(false);

    return (
        <Search {...restProps}>
            <SearchIcon onClick={() => setSearchActive((searchActive) => !searchActive)} data-testid="search-click">
                <img src="/images/icons/search.png" alt="Search" />
            </SearchIcon>
            <SearchInput
                value={searchTerm}
                onChange={({ target }) => setSearchTerm(target.value)}
                placeholder="Search films and series"
                active={searchActive}
                data-testid="search-input"
            />
        </Search>
    );
};


Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
    return <PlayButton {...restProps}>{children}</PlayButton>;
};

