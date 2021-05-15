import React from 'react'
import { Button } from '../ButtonElements';
import { InfoContainer,
     InfoWrapper, 
     InfoRow, 
     Column1, 
     TextWrapper,
     TopLine,
     Column2  ,
     Heading,
     Subtitle,
     BtnWrap,
     ImgWrap,
     Img
} from './InfoElements'

const index = ({
    lightBg,
    id , 
    imgStart, 
    topLine,
    buttonLabel, 
    lightText,
    headLine, 
    darkText,
    img, 
    alt,
    description,
    primary,

    dark,
    dark2
 }) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                        <TextWrapper>
                            <TopLine>
                                {topLine}
                            </TopLine>
                            <Heading lightText={lightText}>
                                {headLine}
                            </Heading>
                            <Subtitle darkText={darkText}>
                                {description}
                            </Subtitle>
                            <BtnWrap>
                                <Button to="home" 
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact={true}
                                offset={-80}
                                primary={primary ? 1 : 0}
                                dark={dark ? 0 : 1}
                                dark2={ dark2 ? 1 : 0}
                                >{buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt} />
                        </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>

            </InfoContainer>
        </>
    )
}

export default index
