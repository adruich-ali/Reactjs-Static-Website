import React from 'react';
import Icon1 from '../../images/icon1.svg';
import Icon2 from '../../images/icon2.svg';
import Icon3 from '../../images/icon3.svg';
import {ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP  } from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2> Web Develpments </ServicesH2>
                    <ServicesP>We gonna create you amazing dream website</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2> Digital Ads </ServicesH2>
                    <ServicesP>We gonna create you amazing digital advertising </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2> Logo Design</ServicesH2>
                    <ServicesP>We gonna create you amazing Brand Logo</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
