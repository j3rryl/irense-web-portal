"use client";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { handleSignOut } from '../api/authentication/auth';

const profile = ['Log Out', 'Account'];
const drawerWidth = 240;

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [activeTab, setActiveTab] = React.useState<string>("home");


  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const changePage = (tab: string) =>{
    setActiveTab(tab);
  }

  const handleCloseUserMenu = () => {
    handleSignOut();
  };

  return (
    <AppBar position="fixed" sx={{
      // backgroundColor:"white",
      // color:"black",
      backgroundImage: "linear-gradient(0deg, selected.primary 0%, selected.secondary 100%)",
      borderRadius:1,
      width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
    }}>
      <Container>
        <Toolbar disableGutters>         
          <Box sx={{ flexGrow: 1, justifyContent:"end", display: { xs: 'none', md: 'flex' }, gap:3, alignItems:"center" }}>
            <Tooltip title="Profile">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="" />
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
              {profile.map((item) => (
                <MenuItem key={item} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" sx={{
                    color:"black",
                    fontSize:12
                  }}>{item}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;