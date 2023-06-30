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
import { handleSignOut } from '../api-handler/authentication/auth';
import { Brightness4Outlined, Brightness7Outlined } from '@mui/icons-material';
import { ColorModeContext } from '../theme/ThemeContextProvider';

const profile = ['Log Out', 'Account'];
const drawerWidth = 240;

function ResponsiveAppBar() {
  const colorMode = React.useContext(ColorModeContext);  
  const [darkMode, setDarkMode] = React.useState<boolean>(false)
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" sx={{
      backgroundImage: "linear-gradient(0deg, selected.primary 0%, selected.secondary 100%)",
      borderRadius:1,
      width: { sm: `calc(100% - ${drawerWidth}px)` },
        // margin:{sm: ".2% .2%"}
        ml: { sm: `${drawerWidth}px` },
        mr: ".2%",
        mt: ".2%"
    }}>
      <Container>
        <Toolbar disableGutters>         
          <Box sx={{ flexGrow: 1, justifyContent:"end", display: { xs: 'none', md: 'flex' }, gap:3, alignItems:"center" }}>
          <IconButton 
            onClick={()=>{
              setDarkMode(!darkMode)
              colorMode.toggleColorMode()
            }} 
            color="inherit">
                {darkMode ? <Brightness7Outlined /> : <Brightness4Outlined />}
                {/* <Brightness7Outlined /> */}
            </IconButton>
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
                <MenuItem key={item} onClick={handleSignOut}>
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