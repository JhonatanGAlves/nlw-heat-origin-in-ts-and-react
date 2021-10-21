import React from 'react'
import styled from 'styled-components'
import { Main } from './Main'
import background from '../images/background.png'

export const Body = () => (
  <ContainerBody>
    <img src={background} alt="Imagem de fundo" />
    <Main />
  </ContainerBody>
)

const ContainerBody = styled.div`
  margin: auto;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 375px;
  height: 812px;
  background-color: #202024;

  img {
    position: absolute;
  }
`
