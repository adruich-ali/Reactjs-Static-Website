import React from 'react'
import {Container,FormContent,FormWrap,Icon,Form, FormH1, FormLabel, FormInput, FormButton,Text } from './contactElements'

const contactus = () => {
    return (
        <Container>
            <FormWrap>
                <Icon to="/" >Adruich</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Contact Us Now</FormH1>
                        <FormLabel htmlFor="for">Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor="for">FullName</FormLabel>
                        <FormInput type='text' required />
                        <FormButton type='submit' >Send </FormButton>
                        <Text>We Gonna Contact you after sending the infos</Text>

                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    )
}

export default contactus
