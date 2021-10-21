import React, { useState } from 'react'
import styled from 'styled-components'
import { Images } from './Images'
import { Icons } from './Icons'
import github from '../images/github.svg'

export const Main = () => {
  const [name, setName] = useState('Jhonatan Gabriel Alves')
  const [user, setUser] = useState('JhonatanGAlves')

  return (
    <ContainerMain>
      <Images />
      <div className="infosGitHub">
        <h3>{name}</h3>
        <div className="userAndIcon">
          <img src={github} alt="Icone GitHub" />
          <a href="https://github.com/JhonatanGAlves" target="_blank">
            {user}
          </a>
        </div>
        <p>
          Jhonatan Gabriel Alves | Studying Full-Stack | 25 years old | Analysis
          and systems development 5/6 | GAMER
        </p>
      </div>
      <Icons />
    </ContainerMain>
  )
}

const ContainerMain = styled.div`
  width: 375px;
  height: 812px;
  background-color: #111;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .infosGitHub {
    display: grid;
    place-items: center;
    margin: 0 45px;
    z-index: 9;

    .userAndIcon {
      diplay: flex;
      margin-top: -17px;
      margin-bottom: 40px;

      a {
        margin-left: 20px;
        color: #ccc;
        text-decoration: none;
      }
    }

    h3 {
      margin-top: 160px;
      color: #ccc;
      font-size: 24px;
      z-index: 9;
    }

    p {
      font-size: 14px;
      text-align: center;
      line-height: 19px;
      color: #ccc;
    }
  }
`
