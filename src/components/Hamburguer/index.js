import React from 'react';

const Hamburguer = ({ setHamburguer }) => {

  const closeHamburguer = () => {
    setHamburguer(false);
  };

  return (
    <div className="hamburguer-div">
      <div className="hamburguer-navigation">
        <div onClick={() => closeHamburguer()} className="hamburguer-X">X</div>
        <ul>
          <li>item1</li>
          <li>item2</li>
          <li>item3</li>
        </ul>
      </div>
    </div>
  )
};

export default Hamburguer;
