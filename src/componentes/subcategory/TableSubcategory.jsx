import { Card, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Scrollbar } from '../common/ScrollBar';
import { getSubcategory } from '../../services/getSubcategory';

const TableSubcategory = (props) => {
  const { empresaId } = props;
  const [subcategorias, setSubcategorias] = useState([]);

  useEffect(() => {
    const loadSubcategory = async () => {
      const subcategoria = await getSubcategory(empresaId);
      setSubcategorias(subcategoria);
    };
    loadSubcategory();
  }, []);

  return (
    <>
      <Card>
        <Scrollbar>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell size="checkbox">N°</TableCell>
                <TableCell>SubCategoria</TableCell>
                <TableCell>Categoria</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {subcategorias.map((subcategoria) => (
                <TableRow key={subcategoria.subCategoriaId} hover>
                  <TableCell>{subcategoria.codigo}</TableCell>
                  <TableCell>{subcategoria.nombre}</TableCell>
                  <TableCell>{subcategoria.categoria}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Scrollbar>
      </Card>
    </>
  );
};

export default TableSubcategory;
