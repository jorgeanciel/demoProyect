import {
  Card,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Scrollbar } from '../common/ScrollBar';
import { getCategory } from '../../services/getCategory';
import { Edit } from '@mui/icons-material';

const TableCategory = (props) => {
  const { open } = props;
  const [dataCategory, setDataCategory] = useState([]);

  useEffect(() => {
    const loadCategory = async () => {
      const category = await getCategory(1);
      setDataCategory(category);
    };
    loadCategory();
  }, []);

  return (
    <>
      <Card>
        <Scrollbar>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell size="checkbox">N°</TableCell>
                <TableCell>Categoria</TableCell>
                <TableCell>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataCategory.map((item) => (
                <TableRow key={item.categoriaId} hover>
                  <TableCell size="checkbox">{item.codigo}</TableCell>
                  <TableCell>{item.nombre}</TableCell>
                  <TableCell sx={{ display: 'flex' }}>
                    <SvgIcon
                      fontSize="small"
                      sx={{ cursor: 'pointer', color: '#1976d2' }}
                      onClick={() => open()}
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
    </>
  );
};

export default TableCategory;
