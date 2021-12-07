import React from 'react';
import Ape4 from '../../images/medium.png';
import './style.css';
import { Container, Button } from 'react-bootstrap';
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
} from './InfoSection.elements';

function InfoSection({
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
    return (
        <>
            <InfoSec lightBg={false}>
                <Container>
                    <InfoRow imgStart={true}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={false}>{''}</TopLine>
                                <Heading lightText={true}>
                                    {'Want to Know More !!'}
                                </Heading>
                                <Subtitle lightTextDesc={true}>
                                    {
                                        'Please check out our Medium blog for more detailed breakdowns of Community Fund, Ape traits, rarity, distribution, and any other questions you may have.'
                                    }
                                </Subtitle>
                                <Button
                                    href="https://kraznikunderverse.medium.com/"
                                    target="_blank"
                                    classname="tests"
                                >
                                    Medium
                                </Button>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={''}>
                                <Img src={Ape4} alt={'Credit'} />
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    );
}

export default InfoSection;
