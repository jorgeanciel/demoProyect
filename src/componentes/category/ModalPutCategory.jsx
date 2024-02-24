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
import { getAllCompany } from '../../services/getAllCompany';

const ModalPutCategory = (props) => {
  const { open, close, updateCategory, handleChange, category } = props;
  const [company, setCompany] = useState([]);

  useEffect(() => {
    const getCompany = async () => {
      const company = await getAllCompany();
      setCompany(company);
    };
    getCompany();
  }, []);

  return (
    <>
      <Dialog open={open} onClose={close}>
        <Card sx={{ px: 8, py: 2 }}>
          <CardHeader title="Agrega Categoria" />
          <Divider />
          <form onSubmit={updateCategory}>
            <Grid container gap={3} sx={{ p: 5 }}>
              <Grid xs={12}>
                <TextField
                  label="Nombre de la Categoria"
                  name="Nombre"
                  onChange={handleChange}
                  value={category && category.Nombre}
                  fullWidth
                />
              </Grid>
            </Grid>
            <Divider />
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
              <Button variant="contained" type="submit">
                Agregar
              </Button>
              <Button onClick={close}>Cancelar</Button>
            </Box>
          </form>
        </Card>
      </Dialog>
    </>
  );
};

export default ModalPutCategory;
