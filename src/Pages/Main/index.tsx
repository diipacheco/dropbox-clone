/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import logo from '../../Assets/logo.svg';
import * as S from './styles';
import api from '../../Services/api';


interface Props {
  history: {
      push(url: string): void;
  };
}


const Main : React.SFC<Props> = ({ history }) => {
   const [box, setBox] = useState({
     title: '',
   });

 async function handleSignin(e: React.FormEvent) {
   e.preventDefault();
     const response = await api.post('boxes', {
       title: box.title,
     });
     history.push(`/box/${response.data._id}`);
   }

   function handleInput(e: React.FormEvent<HTMLInputElement>) {
     setBox({
       title: e.currentTarget.value,
     });
   }

  return (
    <S.Container>
      <S.Form onSubmit={handleSignin}>
        <img src={logo} alt="Logo da Aplicação: RocketBox" />
        <input type="text" placeholder="Crie um box" onChange={handleInput} value={box.title} />
        <button type="submit">Criar</button>
      </S.Form>
    </S.Container>
);
};

export default Main;
