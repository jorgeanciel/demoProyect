import {
  Card,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Scrollbar } from '../common/ScrollBar';
import { getAllCompany } from '../../services/business/getAllCompany.services';
import { Edit } from '@mui/icons-material';
import ModalPut from './ModalPut';

const TableCompany = (props) => {
  const { openModalPut } = props;
  const [dataCompany, setDataCompany] = useState([]);
  const [openModalUpdate, setOpenModalUpdate] = useState(false);

 

  useEffect(() => {
    const loadAllCompany = async () => {
      const company = await getAllCompany();
      setDataCompany(company);
    };
    loadAllCompany();
  }, []);
  return (
    <>
      <Card>
        <Scrollbar>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Descripcion</TableCell>
                <TableCell>Direccion</TableCell>
                <TableCell>RUC</TableCell>
                <TableCell>Telefono</TableCell>
                <TableCell>Encargado</TableCell>
                <TableCell>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataCompany.map((company) => (
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
                    ></SvgIcon>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Scrollbar>
      </Card>
    </>
  );
};

export default TableCompany;
