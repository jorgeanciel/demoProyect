import {
  Box,
  Button,
  Card,
  CardHeader,
  Dialog,
  Divider,
  Grid,
  TextField,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../../api/axiosInstance';

const ModalPut = (props) => {
  const { openModalUpdate, closeModalUpdate, dataUpdate } = props;
  const [dataToUpdate, setDataToUpdate] = useState({
    nombre: '',
    descripcion: '',
    telefono: '',
    ruc: '',
    direccion: '',
    responsable: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataToUpdate((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const updateCompany = async () => {
    try {
      await axiosInstance.put('empresa/update', dataToUpdate);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(()=>{
    setDataToUpdate(dataUpdate)
  },[dataUpdate])

  return (
    <>
      <Dialog open={openModalUpdate} onClose={closeModalUpdate}>
        <Card>
          <CardHeader title="Actualiza los datos" />
          <Divider />
          <form noValidate autoComplete="off" onSubmit={updateCompany}>
            <Grid container sx={{ px: 4, py: 2 }} rowGap={2}>
              <Grid item xs={6}> 
                <TextField
                  label="Nombre de Empresa"
                  value={dataToUpdate.nombre}
                  name="nombre"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6}> 
                <TextField
                  label="RUC de empresa"
                  value={dataToUpdate.ruc}
                  name="ruc"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}> 
                <TextField
                  label="Descripcion de Empresa"
                  fullWidth
                  value={dataToUpdate.descripcion}
                  name="descripcion"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Direccion de Empresa"
                  fullWidth
                  value={dataToUpdate.direccion}
                  name="direccion"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6}> 
                <TextField
                  type="number"
                  label="Telefono de Empresa"
                  value={dataToUpdate.telefono}
                  name="telefono"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Encargado"
                  value={dataToUpdate.responsable}
                  name="responsable"
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Divider />
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
              <Button type="submit" variant="contained">
                Actualizar
              </Button>
              <Button onClick={closeModalUpdate}>Cancelar</Button>
            </Box>
          </form>
        </Card>
      </Dialog>
    </>
  );
};

export default ModalPut;
