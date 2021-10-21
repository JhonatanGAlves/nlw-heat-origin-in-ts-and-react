import React from 'react'
import youtube from '../images/youtube.svg'
import instagram from '../images/instagram.svg'
import facebook from '../images/facebook.svg'
import twitter from '../images/twitter.svg'
import styled from 'styled-components'

export const Icons = () => (
  <ContainerIcon>
    <ul>
      <li>
        <a href="https://www.youtube.com/c/JGAGameR/" target="_blank">
          <img src={youtube} alt="Icone Youtube" />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/jhonatangalves/" target="_blank">
          <img src={instagram} alt="Icone Instagram" />
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/jhonatangalves96/" target="_blank">
          <img src={facebook} alt="Icone Facebook" />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/jhowR6" target="_blank">
          <img src={twitter} alt="Icone Twitter" />
        </a>
      </li>
    </ul>
  </ContainerIcon>
)

const ContainerIcon = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;

  ul {
    display: flex;
    list-style: none;
    margin-right: 26px;

    a {
      margin-right: 60px;
    }
  }
`
