import React, { useState } from 'react';
import Ape8 from '../../images/beat.png';
import { Container } from 'react-bootstrap';
import "./style.css";
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import Mailchimp from 'react-mailchimp-form';

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
import { ClassNames } from '@emotion/react';

const url =
    'https://gmail.us5.list-manage.com/subscribe/post?u=ab99fad9caa1b3f47e1644c43&amp;id=f6a5cd94c5';

const SimpleForm = () => <MailchimpSubscribe url={url} />;

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
                                <Mailchimp
                                    action={url}
                                    fields={[
                                        {
                                            name: 'EMAIL',
                                            placeholder: 'Email',
                                            type: 'email',
                                            required: true,
                                        },
                                    ]}
                                />

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
