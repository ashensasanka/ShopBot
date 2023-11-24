import { Button } from 'antd';
import React from 'react';
import {HiOutlineSun, HiOutlineMoon} from 'react-icons/hi';


const ToggleThemeButton = ({darkTheme,
toggleTheme}) => {
  return (
  <div className="toggle-theme-btn">
    <Button onClick={toggleTheme}>
        {darkTheme ? <HiOutlineSun style={{ color: 'white' }}/> : 
        <HiOutlineMoon/>}
    </Button>
</div>
  );
};

export default ToggleThemeButton;