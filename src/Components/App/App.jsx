import React, {useState } from 'react';
import './App.css';
import Appbar from '../Appbar/Appbar';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import Dialog from '../DialogGeneric/DialogGeneric';

function App() {
  const [dialogOpen, setdialogOpen] = useState(false);
  const [tipoUsuario, setTipoUsuario] = useState(0);

  const handledialogButtonClickRastreo = () => {
    setTipoUsuario(0);
    setdialogOpen(true);
  };
  
  const handledialogButtonClickTransportador = () => {
    setTipoUsuario(1);
    setdialogOpen(true);
  };

  const handledialogDialogClose = () => {
    setdialogOpen(false);
  };

  return (
    <div>
      <Appbar />
      <div className='divCenter'>
        <PrimaryButton icon={LocationSearchingIcon} text="Rastrear pedido" onClick={handledialogButtonClickRastreo}/>
        <PrimaryButton icon={LocalShippingIcon} text="Soy transportador"  onClick={handledialogButtonClickTransportador}/>
      </div>
      <Dialog open={dialogOpen} onClose={handledialogDialogClose} tipoUsuario={tipoUsuario} />
    </div>
  );
}

export default App;
