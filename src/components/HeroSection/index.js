import React, {useState} from 'react';

import Video from '../../videos/video.mp4';
import {Button} from '../ButtonElements';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements';

const HeroSection = () => {
    const [hover, setHover ]= useState(false );
    const onHover = ()=> {
        setHover(!hover)
    }
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Adruich Digital Agency 
                </HeroH1>
                <HeroP>
                    Sign up for a new account today and receive $100 credit towards your next payment.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to ="signin" 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}>
                     Get Started { hover ? <ArrowForward/> : <ArrowRight/> }
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
