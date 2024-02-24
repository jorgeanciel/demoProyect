import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react';
import { createSubcategory } from '../services/createSubcategory';
import TableSubcategory from '../componentes/subcategory/TableSubcategory';
import ModalPostSubcategory from '../componentes/subcategory/ModalPostSubcategory';

const SubCategorias = () => {
  let id = 1;
  const [openModal, setOpenModal] = useState(false);
  const [subcategorias, setSubcategorias] = useState({
    CategoriaId: '',
    EmpresaId: id,
    Nombre: '',
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setSubcategorias((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const closeModalSub = () => {
    setOpenModal(!openModal);
  };
  const postSubcategory = async (e) => {
    e.preventDefault();
    await createSubcategory(subcategorias);
    closeModalSub();
  };
  return (
    <>
      <Box>
        <Container>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ px: 10, py: 6 }}
          >
            <Typography variant="h5">SubCategorias</Typography>
            <Button
              startIcon={
                <SvgIcon fontSize="small">
                  <AddIcon />
                </SvgIcon>
              }
              variant="contained"
              onClick={closeModalSub}
            >
              Agregar Categoria
            </Button>
          </Stack>
          <ModalPostSubcategory
            open={openModal}
            close={closeModalSub}
            handleChange={handleChange}
            postSubcategory={postSubcategory}
            id={id}
          />
          <TableSubcategory empresaId={id} />
        </Container>
      </Box>
    </>
  );
};

export default SubCategorias;
