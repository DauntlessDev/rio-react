import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${({ src }) => (src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg')}) top left / cover
    no-repeat;

  @media (max-width: 1100px) {
    ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && `background: none;`}
  }`
  ;


export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const Darken = styled.div`
  background: rgb(0,0,0,0.35);
`;

export const Inner = styled.div`
  margin: 30px 0px 50px;

  
  @media (max-width: 1000px) {
    margin: 10px;
  }
  
  @media (max-width: 600px) {
    margin: 0px;
  }
`;

export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 64px;
  padding: 18px 10px;
  justify-content: space-between;
  align-items: center;
  a {
    display: flex;
  }
  @media (max-width: 1000px) {
    margin: 0 30px;
  }

  @media (max-width: 1000px) {
    height: 40px;
  }
`;

export const Logo = styled.img`
  height: 45px;
  /* width: 108px; */
  margin-right: 40px;

  @media (min-width: 1449px) {
    height: 50px;
    /* width: 167px; */
  }
`;

export const ButtonLink = styled(ReactRouterLink)`
  display: block;
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;
  
  &:hover {
    background: #f40612;
  }
`;
export const Feature = styled(Container)`
  padding: 100px 0 450px 0;
  margin-left: 75px;
  flex-direction: column;
  align-items: normal;
  width: 50%;
  @media (max-width: 1100px) {
    display: none;
  }
`;

export const Text = styled.p`
  color: lightgray;
  font-size: 15px;
  line-height: 160%;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  max-width: 410px;
  margin-bottom: 40px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

export const SubText = styled.p`
  color: white;
  font-size: 10px;
  letter-spacing:1.5px;

  text-transform: uppercase;
  line-height: 160%;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  max-width: 410px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;


export const Link = styled.p`
  color: #fff;
  text-decoration: none;
  margin-right: 30px;
  font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;

export const FeatureCallOut = styled.h2`
  color: white;
  font-size: 60px;
  letter-spacing:1.3px;
  line-height: normal;
  font-family:  Calibri, 'Trebuchet MS', sans-serif;
  margin: 0;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`;


export const FeatureCallOutBottom = styled.h2`
  color: white;
  font-size: 60px;
  font-family:  Calibri, 'Trebuchet MS', sans-serif;
  font-weight: 400;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin-top: -10px;
  margin-bottom:20px;
`;


export const Picture = styled.button`
  background: url(${({ src }) => src});
  background-size: contain;
  border: 0;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;


export const Dropdown = styled.div`
  display: none;
  position: absolute;
  background-color: black;
  padding: 10px;
  width: 100px;
  top: 32px;
  right: 10px;
  ${Group}:last-of-type ${Link} {
    cursor: pointer;
  }
  ${Group} {
    margin-bottom: 10px;
    &:last-of-type {
      margin-bottom: 0;
    }
    ${Link}, ${Picture} {
      cursor: default;
    }
  }
  button {
    margin-right: 10px;
  }
  p {
    font-size: 12px;
    margin-bottom: 0;
    margin-top: 0;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;
  button {
    cursor: pointer;
  }
  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
  }
`;


export const SearchInput = styled.input`
  background-color: #44444459;
  color: white;
  border: 1px solid white;
  transition: width 0.5s;
  height: 30px;
  font-size: 14px;
  margin-left: ${({ active }) => (active === true ? '10px' : '0')};
  padding: ${({ active }) => (active === true ? '0 10px' : '0')};
  opacity: ${({ active }) => (active === true ? '1' : '0')};
  width: ${({ active }) => (active === true ? '200px' : '0px')};
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  svg {
    color: white;
    cursor: pointer;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

export const SearchIcon = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  img {
    filter: brightness(0) invert(1);
    width: 16px;
  }
`;


export const PlayButton = styled.button`
  background-color: transparent;
  color: white;
  /* border-width: 0; */
  border: 1.5px solid white;
  padding: 10px 20px;
  /* border-radius: 5px; */
  max-width: 150px;
  /* font-weight: bold; */
  font-size: 15px;
  margin-top: 10px;
  cursor: pointer;
  transition: background-color 0.5s ease;
  &:hover {
    background-color: #ff1e1e;
  }
`;