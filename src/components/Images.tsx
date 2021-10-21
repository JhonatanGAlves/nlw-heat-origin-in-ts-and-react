import React from 'react'
import styled from 'styled-components'
import build from '../images/build.svg'
import avatar from '../images/avatar.jpg'

export const Images = () => (
  <ContainerImages>
    <img className="imgSelo" src={build} alt="selo" />
    <img className="imgAvatar" src={avatar} alt="avatar" />
  </ContainerImages>
)

const ContainerImages = styled.div`
  display: flex;
  justify-content: center;

  .imgSelo {
    position: relative;
    top: 8px;
    left: -48px;
    z-index: 99;
  }

  .imgAvatar {
    top: 187px;
    width: 180px;
    height: 184px;
    object-fit: cover;
    clip-path: polygon(50% 0%, 100% 20%, 100% 80%, 50% 100%, 0 80%, 0 20%);
    z-index: 9;
  }
`
