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
import { getCategory } from '../../services/getCategory';

const ModalPostSubcategory = (props) => {
  const { open, close, handleChange, postSubcategory, id } = props;

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadCategory = async () => {
      const category = await getCategory(id);
      setCategories(category);
    };
    loadCategory();
  }, []);

  return (
    <>
      <Dialog open={open} onClose={close}>
        <Card sx={{ px: 8, py: 2 }}>
          <CardHeader title="Agrega Subcategoria" />
          <Divider />
          <form onSubmit={postSubcategory}>
            <Grid container gap={3} sx={{ p: 5 }}>
              <Grid xs={12}>
                <TextField
                  select
                  fullWidth
                  label="Elija Categoria"
                  SelectProps={{ native: true }}
                  size="small"
                  name="CategoriaId"
                  onChange={handleChange}
                >
                  <option></option>
                  {categories.map((category) => (
                    <option>{category.categoriaId}</option>
                  ))}
                </TextField>
              </Grid>
              <Grid xs={12}>
                <TextField
                  label="Nombre de la Subcategoria"
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

export default ModalPostSubcategory;
