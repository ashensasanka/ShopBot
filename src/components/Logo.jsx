import React from 'react'
import {FireFilled} from '@ant-design/icons';
import Image from '../../src/assets/robo.png';
const Logo = () => {
  return (
    <div className="logo">
        <div className="logo-icon">
          <img src={Image} alt='logo' height={401} width={401} />
        </div>
    </div>
  )
}

export default Logo