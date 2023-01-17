import React from 'react';

import hp from '../../assets/hp.png'
import kr from '../../assets/kr.png'


// import { Container } from './styles';

export const PlayerActions: React.FC = () => {
  return <div style={{display: 'inline-flex', marginTop: 24, maxHeight: 16, alignItems: 'center', justifyContent: 'center'}}>
          <img
          src={hp}
          alt="hp"
        />
        <div style={{width: 140, backgroundColor: 'yellow', height: 30, marginLeft: 16, marginRight: 16, maxHeight: 24}} />

        <img
          src={kr}
          alt="kr"
          style={{marginRight: 16}}
        />
        <img src="https://fontmeme.com/permalink/230117/3770d6d70b426b521c9546aca7c35a2e.png"
        style={{ maxHeight: 48}} alt="undertale-logo-font" />
  </div>;
}

