import React from 'react';
import Logo from '../../images/image.png';

import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook';

import { FaMedium } from '@react-icons/all-files/fa/FaMedium';
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';
import { FaYoutube } from '@react-icons/all-files/fa/FaYoutube';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { FaDiscord } from '@react-icons/all-files/fa/FaDiscord';

import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink,
} from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="home">
                            {' '}
                            <img
                                src={Logo}
                                alt={'Credit'}
                                height="169px"
                                // width="max-width"
                            />{' '}
                        </SocialLogo>

                        <SocialIcons>
                            <SocialIconLink
                                href="https://discord.gg/nPYzvQFXYE"
                                target="_blank"
                                aria-label="Youtube"
                            >
                                <FaDiscord />
                            </SocialIconLink>
                            <SocialIconLink
                                href="https://twitter.com/KraznikDAO"
                                target="_blank"
                                aria-label="Twitter"
                                rel="noopener noreferrer"
                            >
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink
                                href="https://kraznikunderverse.medium.com"
                                target="_blank"
                                aria-label="Linkedin"
                            >
                                <FaMedium />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;
