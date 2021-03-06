import React, { useState } from 'react';
import axios from 'axios';

const Newsletter = () => {
  const [input, setInput] = useState('');
  const handleInput = ({ target }) => {
    setInput(target.value);
  };

  const handleSubmit = () => {
      const URL = 'https://foreverliss1.websiteseguro.com/teste-dev/newsletter.php';
      const data = JSON.stringify({ "email": `${input}` });
      axios.post(URL, data, {
        "Content-Type": "application/json",
        "Accept": "application/json",
      })
        .then((response) => {
          alert(response.data.Erro)
        })
        .catch((err) => {
          alert(err.message);
        });
    }

  return(
    <div className="newsletter">
      <h2>NEWSLETTER FOREVER BABY</h2>
      <h3>Cadastre-se agora para não perder nenhuma promoção</h3>
      <form>
        <input type="email" onChange={ (e) => handleInput(e) } placeholder="Digite aqui o seu melhor e-mail"></input>
        <button type="button" onClick={ () => handleSubmit() }>CADASTRAR</button>
      </form>
    </div>
  )
};

export default Newsletter;
