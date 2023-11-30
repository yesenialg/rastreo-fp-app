import React, {useState} from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import { getGuia } from '../../Services/axios';
import "./DialogGeneric.css"

const DialogGeneric = ({ open, onClose, tipoUsuario }) => {

  const [numeroGuia, setNumeroGuia] = useState("");
  const [guiaData, setGuiaData] = useState(null);

  const handleInputChange = (event) => {
    setNumeroGuia(event.target.value);
  };

  const onClickBuscar = async () => {
    try {
      const data = await getGuia(numeroGuia);
      setGuiaData(data);
      console.log(data)
    } catch (error) {
      console.log("Error al obtener la guía:", error);
    } finally {
      handleOnClose();
    }
  };

  const handleOnClose = () => {
    setNumeroGuia("")
    onClose()
  }

  return (
    <div>
      <Dialog open={open} onClose={handleOnClose} maxWidth="sm" fullWidth>
        <DialogTitle className='estiloDialogTitle'>Buscar pedido</DialogTitle>
        <DialogContent className="estiloDialogContent">
          {tipoUsuario === 0 ? 
          <p className='estiloDialogContentText'>Ingrese el número de guía que desea rastrear</p> :
          <p className='estiloDialogContentText'>Ingrese el número de guía que desea actualizar</p>}
          <input
            className='estiloInput'
            value={numeroGuia}
            onChange={handleInputChange}
          />
          <Button onClick={onClickBuscar}>Buscar</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DialogGeneric;