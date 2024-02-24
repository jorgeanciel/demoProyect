import React from 'react';
import { alpha, styled } from '@mui/material/styles';
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  SvgIcon,
  Tooltip,
  Typography,
  useMediaQuery,
} from '@mui/material';
import Bars3Icon from '@heroicons/react/24/solid/Bars3Icon';
import MenuList from '../componentes/layout/Menu';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const [openNav, setOpenNav] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const LayoutRoot = styled('div')(({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 280,
    },
  }));

  const LayoutContainer = styled('div')({
    display: 'flex',
    flex: '1 1 auto',
    flexDirection: 'column',
    width: '100%',
  });
  return (
    <>
      <Box
        component="header"
        sx={{
          position: 'sticky',
          backdropFilter: 'blur(6px)',
          backgroundColor: (theme) => alpha(theme.palette.background.default, 0.8),

          left: {
            lg: `280px`,
          },
          top: 0,
          width: {
            lg: `calc(100% - 280px)`,
          },
          zIndex: (theme) => theme.zIndex.appBar,
          display: 'block',
          displayPrint: 'none',
        }}
      >
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          spacing={2}
          sx={{
            minHeight: 68,
            px: 8,
          }}
        >
          <Stack>
            {!lgUp && (
              <Tooltip title="Menu">
                <IconButton onClick={() => setOpenNav(true)}>
                  <SvgIcon fontSize="small">
                    <Bars3Icon />
                  </SvgIcon>
                </IconButton>
              </Tooltip>
            )}
            <Box>
              <Typography variant="h6">Lima, peru</Typography>
            </Box>
          </Stack>

          <Stack alignItems="center" direction="row" spacing={2}>
            <Typography variant="h6">Jorge Chirinos</Typography>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem>
                <Typography>Log Out</Typography>
              </MenuItem>
            </Menu>
          </Stack>
        </Stack>
      </Box>
      <MenuList open={openNav} onClose={() => setOpenNav(false)} />
      <LayoutRoot>
        <LayoutContainer>
          <Outlet />
        </LayoutContainer>
      </LayoutRoot>
    </>
  );
};

export default Layout;
