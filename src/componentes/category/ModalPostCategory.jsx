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

const ModalPostCategory = (props) => {
  const [company, setCompany] = useState([]);
  const { open, close, handleChange, postCategory } = props;

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
          <form onSubmit={postCategory}>
            <Grid container gap={3} sx={{ p: 5 }}>
              <Grid xs={12}>
                <TextField
                  select
                  fullWidth
                  label="Elija Empresa"
                  SelectProps={{ native: true }}
                  size="small"
                  name="EmpresaId"
                  onChange={handleChange}
                >
                  <option> </option>
                  {company.map((item) => (
                    <option key={item.empresaId}>{item.empresaId}</option>
                  ))}
                </TextField>
              </Grid>
              <Grid xs={12}>
                <TextField
                  label="Nombre de la Categoria"
                  name="Nombre"
                  onChange={handleChange}
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

export default ModalPostCategory;
