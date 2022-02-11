import React from 'react';

import PaymentInfo from '../../images/paymentInfo.png';
import socialMediaInsta from '../../images/socialMediaInst.png';
import socialMediaFace from '../../images/socialMediaFace.png';
import socialMediaYt from '../../images/socialMediaYt.png';
import socialMediaTik from '../../images/socialMediaTik.png';

const Footer = () => {
  return(
    <footer>
      <div className="social">
        <h3>VISITE NOSSAS REDES SOCIAIS</h3>
        <a href="https://www.instagram.com/foreverliss/">
          <img src={ socialMediaInsta } alt="informações redes sociais" />
        </a>
        <a href="https://www.facebook.com/foreverliss">
          <img src={ socialMediaFace } alt="informações redes sociais" />
        </a>
        <a href="https://www.youtube.com/c/ForeverLissOficial">
          <img src={ socialMediaYt } alt="informações redes sociais" />
        </a>
        <a href="https://www.tiktok.com/@foreverlissprofessional">
          <img src={ socialMediaTik } alt="informações redes sociais" />
        </a>
      </div>

      <nav className="footer-nav">
        <a href="/">PERFUME INFANTIL</a>
        <a href="/">SABONETES</a>
        <a href="/">PÓS-BANHO</a>
        <a href="/">ASSADURAS</a>
        <a href="/">HIDRATANTES</a>
        <a href="/">LENÇOS UMEDECIDOS</a>
      </nav>

      <div className="payment">
        <h3>FORMA DE PAGAMENTO</h3>
        <img src={ PaymentInfo } alt="image payment infos" />
      </div>

    </footer>
  )
};

export default Footer;
