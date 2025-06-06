import React, { useState } from 'react';
import { useTheme } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import { Box, CssBaseline, Drawer, List, ListItem, ListItemButton, ListItemIcon,ListItemText, Toolbar, useMediaQuery } from '@mui/material';
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InboxIcon from "@mui/icons-material/Inbox";
import EmailIcon from "@mui/icons-material/Email";
import CreateProductForm from "./Component/CreateProductForm.jsx";
import ProductTable from "./Component/ProductTable.jsx";
import OrdersTable from "./Component/OrdersTable.jsx";
import AdminDashboard from "./Component/AdminDashboard.jsx";
import CustomerTable from "./Component/CustomersTable.jsx";
import {Routes,Route} from 'react-router-dom';

const menu = [
  { name: "Dashboard", path: "/Admin", icon: <DashboardIcon /> },
  { name: "Products", path: "/admin/products", icon: <InboxIcon /> },
  { name: "Customers", path: "/admin/customers", icon: <EmailIcon /> },
  { name: "Orders", path: "/admin/orders", icon: <InboxIcon /> },
  { name: "Add Product", path: "/admin/product/create", icon: <DashboardIcon /> },
];

const Admin = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const navigate = useNavigate();

  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        // border:"1px solid blue",
        height:"100%"
      }}
    >
      {/* {isLargeScreen && <Toolbar />} */}
      <List>
        {menu.map((item, index) => (
          <ListItem key={item.name} disablePadding onClick={() => item.path && navigate(item.path)}>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.name}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText>Accout</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
    <div className='flex h-[100vh]'>
      <CssBaseline />

      <div className='w-[15%] border border-r-gray-300 h-full' >
        {drawer}
      </div>

      <div className='w-[85%]'>

        <Routes>
            <Route path="/" element={<AdminDashboard />} ></Route>
            <Route path="/product/create" element={<CreateProductForm />} ></Route>
            <Route path="/products" element={<ProductTable />} ></Route>
            <Route path="/orders" element={<OrdersTable />} > </Route>
            <Route path="/customers" element={<CustomerTable />} ></Route>
        </Routes>
      </div>
    </div>
    </div>
  );
};

export default Admin;
