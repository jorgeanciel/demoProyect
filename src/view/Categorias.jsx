import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react';
import ModalPostCategory from '../componentes/category/ModalPostCategory';
import TableCategory from '../componentes/category/TableCategory';
import { createCategory } from '../services/createCategory';
import { axiosInstance } from '../api/axiosInstance';
import ModalPutCategory from '../componentes/category/ModalPutCategory';

const Categorias = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openModalUpdate, setOpenModalUpdate] = useState(false);

  const [category, setCategory] = useState({
    EmpresaId: '',
    Nombre: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategory((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const postCategory = async (e) => {
    e.preventDefault();
    await createCategory(category);
    closeModal();
  };

  const closeModal = () => {
    setOpenModal(!openModal);
  };

  const closeModalUpdate = () => {
    setOpenModalUpdate(!openModalUpdate);
  };

  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 4,
        }}
      >
        <Container>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ px: 10, py: 6 }}
          >
            <Typography variant="h5">Categorias</Typography>
            <Button
              startIcon={
                <SvgIcon fontSize="small">
                  <AddIcon />
                </SvgIcon>
              }
              variant="contained"
              onClick={() => closeModal()}
            >
              Agregar Categoria
            </Button>
          </Stack>
          <ModalPostCategory
            open={openModal}
            close={closeModal}
            handleChange={handleChange}
            postCategory={postCategory}
          />
          <TableCategory open={closeModalUpdate} />
          <ModalPutCategory
            handleChange={handleChange}
            category={category}
            open={openModalUpdate}
            close={closeModalUpdate}
          />
        </Container>
      </Box>
    </>
  );
};

export default Categorias;
