import {
  Box,
  Button,
  Card,
  Container,
  Stack,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import AddBusinessTwoToneIcon from '@mui/icons-material/AddBusinessTwoTone';
import React, { useEffect, useState } from 'react';
import ModalPost from '../componentes/company/ModalPost';
import TableCompany from '../componentes/company/TableCompany';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { createCompany } from '../services/createCompany';
import { axiosInstance } from '../api/axiosInstance';
import { getAllCompany } from '../services/getAllCompany';
import ModalPut from '../componentes/company/ModalPut';
import { Scrollbar } from '../componentes/common/ScrollBar';
import { Edit } from '@mui/icons-material';

const Empresas = () => {
  const [postModal, setPostModal] = useState(false);
  const [putModal, setPutModal] = useState(false);
  const [dataPut, setDataPut] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const company = await getAllCompany();
      setData(company);
    };
    loadData();
  }, []);

  const closeModal = () => {
    setPostModal(!postModal);
  };

  const closeModalUpdate = () => {
    setPutModal(!putModal);
  };

  const updateId = async (id) => {
    try {
      const res = await axiosInstance.get(`empresaSingle/${id}`);
      setDataPut(res.data.data);
      closeModalUpdate();
      console.log(dataPut);
    } catch (error) {
      console.error(error);
    }
  };

  const updateCompany = async (value) => {
    await axiosInstance.put('empresa/update', value).then((response) => {
      let newData = data;
      newData.map((company) => {
        if (value.EmpresaId === company.EmpresaId) {
          company.Nombre = value.Nombre;
          company.Descripcion = value.Descripcion;
          company.Direccion = value.Direccion;
          company.Telefono = value.Telefono;
          company.Ruc = value.Ruc;
          company.Responsable = value.Responsable;
        }
      });
    });
  };

  const formik = useFormik({
    initialValues: {
      Nombre: '',
      Descripcion: '',
      Direccion: '',
      Telefono: '',
      Ruc: '',
      Responsable: '',
    },
    validationSchema: Yup.object({
      Nombre: Yup.string().max(200).required('Nombre es requerido'),
      Descripcion: Yup.string().max(200).required('Descripcion es requerido'),
      Direccion: Yup.string().max(200).required('Direccion es requerido'),
      Telefono: Yup.number().required('Telefono es requerido'),
      Ruc: Yup.number().required('RUC es requerido'),
      Responsable: Yup.string().max(200).required('Responsable es requerido'),
    }),
    onSubmit: async (values, helpers) => {
      try {
        await createCompany(values);

        closeModal();
      } catch (err) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    },
  });

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
            <Typography variant="h5">Empresas</Typography>
            <Button
              startIcon={
                <SvgIcon fontSize="small">
                  <AddBusinessTwoToneIcon />
                </SvgIcon>
              }
              variant="contained"
              onClick={() => closeModal()}
            >
              Agregar empresa
            </Button>
            <ModalPost openModal={postModal} closeModal={closeModal} formik={formik} />
          </Stack>
          <Card>
            <Scrollbar>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontSize: '20px' }}>Nombre</TableCell>
                    <TableCell>Descripcion</TableCell>
                    <TableCell>Direccion</TableCell>
                    <TableCell>RUC</TableCell>
                    <TableCell>Telefono</TableCell>
                    <TableCell>Encargado</TableCell>
                    <TableCell>Acciones</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((company) => (
                    <TableRow key={company.ruc} hover>
                      <TableCell>{company.nombre}</TableCell>
                      <TableCell>{company.descripcion}</TableCell>
                      <TableCell>{company.direccion}</TableCell>
                      <TableCell>{company.ruc}</TableCell>
                      <TableCell>{company.telefono}</TableCell>
                      <TableCell>{company.responsable}</TableCell>
                      <TableCell padding="checkbox">
                        <SvgIcon
                          fontSize="small"
                          sx={{ cursor: 'pointer', color: '#1976d2' }}
                          onClick={() => updateId(company.empresaId)}
                        >
                          <Edit />
                        </SvgIcon>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Scrollbar>
          </Card>
          <ModalPut
            dataUpdate={dataPut}
            openModalUpdate={putModal}
            closeModalUpdate={closeModalUpdate}
          />
        </Container>
      </Box>
    </>
  );
};

export default Empresas;
