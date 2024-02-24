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

import React from 'react';

const ModalPost = (props) => {
  const { openModal, closeModal, formik } = props;

  return (
    <>
      <Dialog open={openModal} onClose={closeModal}>
        <Card sx={{ p: 4 }}>
          <CardHeader title="Agrega datos de empresa" />
          <Divider />
          <form noValidate onSubmit={formik.handleSubmit}>
            <Grid container sx={{ px: 4, py: 2 }} rowGap={2}>
              <Grid xs={6}>
                <TextField
                  label="Nombre de Empresa"
                  error={!!(formik.touched.Nombre && formik.errors.Nombre)}
                  name="Nombre"
                  value={formik.values.Nombre}
                  helperText={formik.touched.Nombre && formik.errors.Nombre}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </Grid>
              <Grid xs={6}>
                <TextField
                  label="RUC de empresa"
                  error={!!(formik.touched.Ruc && formik.errors.Ruc)}
                  name="Ruc"
                  value={formik.values.Ruc}
                  helperText={formik.touched.Ruc && formik.errors.Ruc}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="number"
                />
              </Grid>
              <Grid xs={12}>
                <TextField
                  label="Descripcion de Empresa"
                  fullWidth
                  error={!!(formik.touched.Descripcion && formik.errors.Descripcion)}
                  name="Descripcion"
                  value={formik.values.Descripcion}
                  helperText={formik.touched.Descripcion && formik.errors.Descripcion}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </Grid>
              <Grid xs={12}>
                <TextField
                  label="Direccion de Empresa"
                  fullWidth
                  error={!!(formik.touched.Direccion && formik.errors.Direccion)}
                  name="Direccion"
                  value={formik.values.Direccion}
                  helperText={formik.touched.Direccion && formik.errors.Direccion}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </Grid>
              <Grid xs={6}>
                <TextField
                  type="number"
                  label="Telefono de Empresa"
                  error={!!(formik.touched.Telefono && formik.errors.Telefono)}
                  name="Telefono"
                  value={formik.values.Telefono}
                  helperText={formik.touched.Telefono && formik.errors.Telefono}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </Grid>
              <Grid>
                <TextField
                  label="Encargado"
                  error={!!(formik.touched.Responsable && formik.errors.Responsable)}
                  name="Responsable"
                  value={formik.values.Responsable}
                  helperText={formik.touched.Responsable && formik.errors.Responsable}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </Grid>
            </Grid>
            <Divider />
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
              <Button type="submit" variant="contained">
                Agregar
              </Button>
              <Button onClick={closeModal}>Cancelar</Button>
            </Box>
          </form>
        </Card>
      </Dialog>
    </>
  );
};

export default ModalPost;
