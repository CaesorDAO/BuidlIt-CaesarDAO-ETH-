import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
    background-color: black;
    /* display: grid;
    justify-content: center;
    align-items: center; */
`;

export const FooterWrap = styled.div`
    padding: 0px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1300px;
    margin: 0 auto;
`;

export const SocialMedia = styled.section`
    max-width: 1300px;
    width: 100%;
`;

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: right;
    max-width: 1200px;

    @media screen and (max-width: 820px) {
        /* flex-direction: column; */
        padding: 0px 65px;
    }
`;

export const SocialLogo = styled.div`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 0px;
    font-weight: bold;

    @media screen and (max-width: 820px) {
        zoom: 80%;
    }
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
    @media screen and (max-width: 820px) {
        width: 200px;
    }
`;

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 50px;
    &:hover {
        transform: scale(1.02);
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        color: white;
        font-size: 60px;
    }
`;
