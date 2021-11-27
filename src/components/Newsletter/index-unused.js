import React, { useState } from 'react';
import Ape8 from '../../images/ape8.png';
import { Container } from 'react-bootstrap';
import "./style.css";

import MailchimpSubscribe from 'react-mailchimp-subscribe';

import {
    InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrapper,
    Img,
} from '../Hero/InfoSection.elements';

const url =
    'https://gmail.us5.list-manage.com/subscribe/post?u=ab99fad9caa1b3f47e1644c43&amp;id=f6a5cd94c5';

function Newsletter({
    primary,
    lightBg,
    topLine,
    lightTopLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    buttonLabel,
    img,
    alt,
    imgStart,
    start,
}) {
    const [email, setEmail] = useState('');

    return (
        <>
            <InfoSec lightBg={false}>
                <Container>
                    <InfoRow imgStart={true}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={false}>{''}</TopLine>
                                <Heading lightText={true}>
                                    {'Never Miss a Beat'}
                                </Heading>
                                <Subtitle lightTextDesc={true}>
                                    {
                                        'Subscribe to our weekly newsletter and be the first to know about upcoming Kraznik drops, news, and exclusive surprises.'
                                    }
                                </Subtitle>
                                <div id="mc_embed_signup">
                                    <form
                                        className="w-full lg:w-auto"
                                        action="https://gmail.us5.list-manage.com/subscribe/post?u=ab99fad9caa1b3f47e1644c43&amp;id=f6a5cd94c5"
                                        method="post"
                                        id="mc-embedded-subscribe-form"
                                        name="mc-embedded-subscribe-form"
                                        class="validate"
                                        target="_blank"
                                        novalidate
                                    >
                                        <div
                                            id="mc_embed_signup_scroll"
                                            className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0"
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '10px',
                                            }}
                                        >
                                            <label for="mce-EMAIL" className="button">
                                                Subscribe
                                            </label>
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) =>
                                                    setEmail(e.target.value)
                                                }
                                                // className="w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500"
                                                style={{
                                                    width: '220px',
                                                    padding: '15px',
                                                }}
                                                name="EMAIL"
                                                class="email"
                                                id="mce-EMAIL"
                                                placeholder="Your Email..."
                                                required
                                            />
                                            {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
                                            <div
                                                style={{
                                                    position: 'absolute',
                                                    left: '-5000px',
                                                }}
                                                aria-hidden="true"
                                            >
                                                <input
                                                    type="text"
                                                    name="b_afb9ef9432a50444898d020b8_159d05aa07"
                                                    tabindex="-1"
                                                    value=""
                                                />
                                            </div>
                                            <div class="clear">
                                                <input
                                                    type="submit"
                                                    // className="btn text-white bg-blue-600 hover:bg-blue-700 shadow"
                                                    style={{
                                                        color: 'white',
                                                        background: 'black',
                                                        border: 'none',
                                                    }}
                                                    value="Subscribe"
                                                    name="subscribe"
                                                    id="mc-embedded-subscribe"
                                                    class="button"
                                                />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={''}>
                                <Img src={Ape8} alt={'Credit'} />
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    );
}

export default Newsletter;
