import React from 'react'
import styled from 'styled-components'

const Container = styled.form`
  background-color: #fcefd3;
  box-shadow: 0px 6px 6px 2px rgba(0, 0, 0, 0.05);
  padding: 1em;
  border-radius: 4px;
  margin: 1em 0 2em;
`

const Hidden = styled.p`
  display: none;
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  label {
    text-align: right;
    margin-bottom: 0.5em;
  }

  input,
  textarea {
    color: #0a0f12;
    background-color: #f9fbf7;
    font-family: 'Eczar', serif;
    font-size: 1em;
    line-height: 1.3em;
    border-radius: 4px;
    border: none;
    padding: 0.5em 0.5em 0.25em;
    margin-bottom: 1em;
  }
`

const ButtonContainer = styled.div`
  text-align: right;
`

const Button = styled.button`
  color: #f7f9f4;
  background-color: #e4572e;
  padding: 0.5em 0.5em 0.4em;
  border-radius: 4px;
  font-family: 'Eczar', serif;
  font-size: 1em;
  line-height: 1.3em;
  cursor: pointer;
  box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.1);
`

export const Form = () => (
  <Container
    name="contact"
    method="POST"
    netlify-honeypot="bot-field"
    data-netlify="true"
  >
    <Hidden>
      <label>
        Don’t fill this out if you're human: <input name="bot-field" />
      </label>
    </Hidden>
    <InputContainer>
      <label htmlFor="email">Your email</label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="maily@mcmailface.com"
        required
      />
    </InputContainer>
    <InputContainer>
      <label htmlFor="message">Your message</label>
      <textarea
        id="message"
        name="message"
        placeholder="Hey, I love your blog but..."
        rows="5"
        required
      />
    </InputContainer>
    <ButtonContainer>
      <Button type="submit">Submit</Button>
    </ButtonContainer>
  </Container>
)

export default Form
