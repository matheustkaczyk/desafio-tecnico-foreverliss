import React from 'react';

import SocialMedia from '../../images/socialMedia.png';
import PaymentInfo from '../../images/paymentInfo.png';

const Footer = () => {
  return(
    <footer>
      <h3>VISITE NOSSAS REDES SOCIAIS</h3>
      <img src={ SocialMedia } alt="informações redes sociais" />

      <navigator>
        <a>PERFUME INFANTIL</a>
        <a>SABONETES</a>
        <a>PÓS-BANHO</a>
        <a>ASSADURAS</a>
        <a>HIDRATANTES</a>
        <a>LENÇOS UMEDECIDOS</a>
      </navigator>

      <h3>FORMA DE PAGAMENTO</h3>
      <img src={ PaymentInfo } alt="image payment infos" />

    </footer>
  )
};

export default Footer;
