import React, { useState, FormEvent } from 'react';
import { Input, Form } from '@rocketseat/unform';
import { RouteComponentProps } from 'react-router-dom';
import { login } from '../../Services/auth';
import logo from '../../Assets/logo.svg';
import * as S from './styles';
import api from '../../Services/api';


const Home: React.SFC<RouteComponentProps> = (props) => {
 const [infoToSign, setInfo] = useState({
   email: '',
   password: '',
 });
 async function handleSubmit(data: any) {
    try {
        await api.post('/signup', data);
        const { email, password } = infoToSign;
        const response = await api.post('signin', { email, password });
        login(response.data.token);
        props.history.push('/main');
    } catch (error) {
      console.log(error);
    }
  }

  console.log(infoToSign);


  return (
    <S.Container>
      <S.Content>
        <header>
          <img src={logo} alt="RocketBox" />
          <h1>Para equipes</h1>
          <h1>Para pessoas físicas</h1>
        </header>
        <section>
          <article>
            Descubra o melhor lugar para armazenar seus arquivos com segurança e performance
          </article>
        </section>
      </S.Content>
      <S.FormSection>
        <header>

          <h1>Acessar Conta</h1>

        </header>
        <Form onSubmit={handleSubmit}>

          <section>
            <h1>Registre-se</h1>
          </section>

          <Input name="name" placeholder="Nome" />
          <Input name="email" onChange={(e: React.FormEvent<HTMLInputElement>) => setInfo({ ...infoToSign, email: e.currentTarget.value })} placeholder="Email" />
          <Input name="password" onChange={(e: React.FormEvent<HTMLInputElement>) => setInfo({ ...infoToSign, password: e.currentTarget.value })} type="password" placeholder="Senha" />
          <button type="submit">Registre-se</button>

        </Form>
      </S.FormSection>
    </S.Container>


);
};

export default Home;
