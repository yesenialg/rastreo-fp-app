import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import "./Appbar.css"
import logo from "../../images/logo_firplak.png"

const Appbar = () => {
  return (
    <AppBar position="static">
      <Toolbar className='estiloAppbar'>
        <img src={logo} alt="Logo" />
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;