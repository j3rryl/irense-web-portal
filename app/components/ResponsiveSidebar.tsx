"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { usePathname, useRouter } from 'next/navigation';
import { AutoGraphOutlined, PrecisionManufacturingOutlined, VaccinesOutlined } from '@mui/icons-material';
import { APP_NAME } from '../utils/constants';
import { pageType } from '../interfaces';
import BreadCrumbsComponent from './BreadCrumbsComponent';

const drawerWidth = 240;
const minDrawerWidth = 230;
const pages: pageType[] = [
  {
    name: "Dashboard",
    url:"/dashboard",
    icon: <AutoGraphOutlined />,
  },
  {
    name: "Patients",
    url:"/dashboard/patients",
    icon: <VaccinesOutlined />
  },
  {
    name: "Tests",
    url:"/dashboard/tests",
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
  const pathname = usePathname();  
  const [activeTab, setActiveTab] = React.useState(pages?.find((page)=>`${page?.url}`==`${(pathname?.split('/').slice(0, 3))?.join('/')}`));
  
  const router = useRouter()
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(()=>{

  },[activeTab, pathname])

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

      <List>
        {pages.map((page, index) => (
          <ListItem key={index} disablePadding onClick={()=>{
            setActiveTab(page);
            router.push(`${page?.url}`);
          }} sx={{
            // backgroundColor: "#fefefe",
            width:"98%",
            margin:"0 auto",
            borderRadius:2,
            backgroundColor: `${page?.name === activeTab?.name?"selected.primary":"background.default"}`,
            backgroundImage: `${page?.name === activeTab?.name?"linear-gradient(0deg, selected.primary 0%, selected.secondary 100%)":""}`,
            // backgroundImage: `${page?.name === activeTab?.name?"linear-gradient(0deg, selected.secondary 0%, selected.primary 100%)":""}`,
          }}>
            <ListItemButton>
              <ListItemIcon sx={{
                color: `${page?.name === activeTab?.name?"icon.secondary":"icon.primary"}`
              }}>
                {page?.icon}
              </ListItemIcon>
              <ListItemText primary={page?.name} sx={{
                color: `${page?.name === activeTab?.name?"text.tertiary":"text.primary"}`
              }}/>
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
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 },
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
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: minDrawerWidth, boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)" },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      
      <Box
        component="main"
        sx={{ flexGrow: 1,  width: { sm: `calc(100% - ${drawerWidth}px)` },
        marginTop:"5%",
        marginRight:".4%", }}
      >
      <BreadCrumbsComponent />

        <Box 
        sx={{
        p: 3,
        background:"card.primary",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)" }}>
        {props.content}
        </Box>
      </Box>
    </Box>
  );
}