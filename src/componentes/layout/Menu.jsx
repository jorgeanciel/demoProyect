import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  ButtonBase,
  Divider,
  Drawer,
  Stack,
  SvgIcon,
  Typography,
  useMediaQuery,
} from '@mui/material';
import React from 'react';
import { Scrollbar } from '../common/ScrollBar';
import logo from '../../assets/logo.jpg';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import BusinessTwoToneIcon from '@mui/icons-material/BusinessTwoTone';
import CategoryTwoToneIcon from '@mui/icons-material/CategoryTwoTone';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';

const menuList = [
  {
    page: 'Mantenimiento',

    icon: (
      <SvgIcon fontSize="small">
        <BookOnlineIcon />
      </SvgIcon>
    ),
    children: {
      empresa: 'Empresa',
      empresaPath: '/business',
      empresaIcon: (
        <SvgIcon fontSize="string">
          <BusinessTwoToneIcon />
        </SvgIcon>
      ),
      categoria: 'Categoria',
      categoriaPath: '/category',
      categoriaIcon: (
        <SvgIcon fontSize="string">
          <CategoryTwoToneIcon />
        </SvgIcon>
      ),
      subcategoria: 'SubCategoria',
      subcategoriaPath: '/subcategoria',
      subcategoriaIcon: (
        <SvgIcon fontSize="string">
          <GridViewRoundedIcon />
        </SvgIcon>
      ),
    },
  },
];

const MenuList = (props) => {
  const { open, onClose } = props;
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  const content = (
    <Scrollbar
      sx={{
        height: '100%',
        '& .simplebar-content': {
          height: '100%',
        },
        '& .simplebar-scrollbar:before': {
          background: 'neutral.400',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <Box sx={{ p: 3 }}>
          <Box
            href="/"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <img src={logo} className="w-14 rounded rounded-[50%] h-10 m-22" />
            <Typography variant="h5" className="italic">
              <span className="text-slate-200">Sis</span>
              <span className="text-red-500">Factu</span>
            </Typography>
          </Box>
          <Box
            component="a"
            //href="/dashboard"
            sx={{
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              borderRadius: 1,
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              mt: 2,
              p: '12px',
            }}
          >
            <div>
              <Typography color="inherit" variant="subtitle1">
                Proyecto
              </Typography>
              <Typography color="neutral.400" variant="body2">
                Facturacion
              </Typography>
            </div>
          </Box>
        </Box>
        <Divider sx={{ borderColor: 'neutral.700' }} />
        <Box
          component="nav"
          sx={{
            flexGrow: 1,
            px: 2,
            py: 3,
          }}
        >
          <Stack
            component="ul"
            spacing={0.5}
            sx={{
              listStyle: 'none',
              p: 0,
              m: 0,
            }}
          >
            {menuList.map((list,index) => (
              <Accordion
                key={`menu-list-${index}`}
                sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}
                disableGutters={true}
                defaultExpanded={true}
              >
                <AccordionSummary>
                  <ButtonBase
                    sx={{
                      borderRadius: 1,
                      display: 'flex',
                    }}
                  >
                    <Box
                      sx={{
                        px: 1,
                        color: 'neutral.400',
                      }}
                    >
                      {list.icon}
                    </Box>
                    <Typography
                      textAlign="center"
                      sx={{
                        color: 'neutral.400',
                        fontFamily: (theme) => theme.typography.fontFamily,
                        fontWeight: 600,
                        lineHeight: '24px',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {list.page}
                    </Typography>
                  </ButtonBase>
                </AccordionSummary>
                <AccordionDetails>
                  <Box
                    sx={{
                      px: 1,
                      color: 'neutral.400',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'start',
                      gap: 1.5,
                    }}
                  >
                    <ButtonBase
                      component="a"
                      href={list.children.empresaPath}
                      sx={{ display: 'flex' }}
                    >
                      <Box
                        sx={{
                          px: 1,
                          color: 'neutral.400',
                        }}
                      >
                        {list.children.empresaIcon}
                      </Box>
                      <Typography
                        textAlign="center"
                        sx={{
                          color: 'neutral.400',
                          fontFamily: (theme) => theme.typography.fontFamily,
                          fontWeight: 600,
                          lineHeight: '24px',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {list.children.empresa}
                      </Typography>
                    </ButtonBase>
                    <ButtonBase
                      component="a"
                      href={list.children.categoriaPath}
                      sx={{ display: 'flex', margin: 0 }}
                    >
                      <Box
                        sx={{
                          px: 0.5,
                          color: 'neutral.400',
                        }}
                      >
                        {list.children.categoriaIcon}
                      </Box>
                      <Typography
                        textAlign="center"
                        sx={{
                          color: 'neutral.400',
                          fontFamily: (theme) => theme.typography.fontFamily,
                          fontWeight: 600,
                          lineHeight: '24px',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {list.children.categoria}
                      </Typography>
                    </ButtonBase>
                    <ButtonBase
                      component="a"
                      href={list.children.subcategoriaPath}
                      sx={{ display: 'flex', margin: 0 }}
                    >
                      <Box
                        sx={{
                          px: 0.5,
                          color: 'neutral.400',
                        }}
                      >
                        {list.children.subcategoriaIcon}
                      </Box>
                      <Typography
                        textAlign="center"
                        sx={{
                          color: 'neutral.400',
                          fontFamily: (theme) => theme.typography.fontFamily,
                          fontWeight: 600,
                          lineHeight: '24px',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {list.children.subcategoria}
                      </Typography>
                    </ButtonBase>
                  </Box>
                </AccordionDetails>
              </Accordion>
            ))}
          </Stack>
        </Box>
        <Divider sx={{ borderColor: 'neutral.700' }} />
        <Box
          sx={{
            px: 2,
            py: 3,
          }}
        >
          <Typography color="neutral.100" variant="subtitle2">
            Necesitas alguna consulta?
          </Typography>
          <Typography color="neutral.500" variant="body2">
            Llama al 948305784
          </Typography>

          <Box
            sx={{
              display: 'flex',
              mt: 5,
              mx: 'auto',
              width: '160px',
              '& img': {
                width: '100%',
              },
            }}
          >
            <Typography color="neutral.100" variant="subtitle1">
              " Siempre hay una oportunidad para marcar la diferencia "
            </Typography>
          </Box>
          <Button
            component="a"
            fullWidth
            href=""
            sx={{ mt: 6 }}
            target="_blank"
            variant="contained"
          >
            Pro Live Preview
          </Button>
        </Box>
      </Box>
    </Scrollbar>
  );
  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.800',
            color: 'common.white',
            width: 280,
          },
        }}
        variant="permanent"
        sx={{ display: 'block', displayPrint: 'none' }}
      >
        {content}
      </Drawer>
    );
  }
  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.800',
          color: 'common.white',
          width: 280,
        },
      }}
      sx={{
        zIndex: (theme) => theme.zIndex.appBar + 100,
        display: 'block',
        displayPrint: 'none',
      }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

export default MenuList;
