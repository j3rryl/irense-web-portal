"use client";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/navigation';
import { AutoGraphOutlined, PrecisionManufacturingOutlined, VaccinesOutlined } from '@mui/icons-material';
import { APP_NAME } from '../utils/constants';

const drawerWidth = 240;
const pages = [
  {
    name: "Dashboard",
    url:"/dashboard",
    icon: <AutoGraphOutlined/>,
  },
  {
    name: "Patients",
    url:"/patients",
    icon: <VaccinesOutlined />
  },
  {
    name: "Tests",
    url:"/tests",
    icon: <PrecisionManufacturingOutlined/>
  }
]
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  appBar: React.ReactNode;
  content: React.ReactNode;
}

export default function ResponsiveSidebar(props: Props) {
  const router = useRouter()
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          fontWeight: 700,
          fontSize:25,
          letterSpacing: '.1rem',
          color: 'inherit',
          textDecoration: 'none',
          margin:".8rem 0"
        }}
      >
        {APP_NAME}
      </Typography> 
      <Divider />

      <List>
        {pages.map((page, index) => (
          <ListItem key={index} disablePadding onClick={()=>{
            router.push(`${page?.url}`)
          }}>
            <ListItemButton>
              <ListItemIcon>
                {page?.icon}
              </ListItemIcon>
              <ListItemText primary={page?.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {props.appBar}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }
      }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {props.content}
      </Box>
    </Box>
  );
}