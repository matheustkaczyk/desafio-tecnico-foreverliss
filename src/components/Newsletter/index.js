import React from 'react';

const Newsletter = () => {
  return(
    <div className="newsletter">
      <h2>NEWSLETTER FOREVER BABY</h2>
      <h3>Cadastre-se agora para não perder nenhuma promoção</h3>
      <form>
        <input type="text" placeholder="Digite aqui o seu melhor e-mail"></input>
        <button type="submit">CADASTRAR</button>
      </form>
    </div>
  )
};

export default Newsletter;
