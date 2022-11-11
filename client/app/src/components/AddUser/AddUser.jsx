import React from 'react';
// import dayjs from 'dayjs';
import { Box, Drawer, Typography, Container, Grid, Stack, Button, TextField } from '@mui/material/';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { useNavigate } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

import useStyles from './styles';
import { styled, alpha } from '@mui/material/styles';
import { withStyles } from 'tss-react/mui';
import NavSection from '../nav-section';
import logo from '../../assets/LogoConceptCROP.png';

const NAV_WIDTH = 280;

const navConfig = [
  {
    title: 'dashboard',
    icon: <DashboardIcon />,
    path: '/admin'
  },
  {
    title: 'add users',
    icon: <GroupAddIcon />,
    path: '/add-user'
  }
];

const account = {
  displayName: 'Jaydon Frankie',
  role: 'Admin'
};

const StyledRoot = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden',
  backgroundColor: '#f9fafb'
});

const Main = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '95vh',
  backgroundColor: '#f9fafb',
  paddingTop: 50,
  //   paddingBottom: theme.spacing(10),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2)
}));

const StyledAccount = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: alpha(theme.palette.grey[500], 0.12)
}));

const CssSelect = withStyles(Select, () => ({
  root: {
    '& .MuiSelect-select': {
      color: '#181818'
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#6e6e6e',
      '&:hover': {
        borderColor: '#CF6BFF'
      }
    }
  }
}));

const CssTextField = withStyles(TextField, () => ({
  root: {
    '& .MuiInputLabel-root': {
      color: '#6e6e6e'
    },
    '& .MuiTextField-root': {
      color: '#181818'
    },
    '& .MuiFormHelperText-root': {
      color: '#6e6e6e'
    },
    '& label.Mui-focused': {
      color: '#6e6e6e'
    },
    '& .MuiInputBase-input': {
      color: '#181818'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#6e6e6e'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#6e6e6e'
      },
      '&:hover fieldset': {
        borderColor: '#CF6BFF'
      },
      '&.Mui-focused fieldset': {
        borderColor: '#CF6BFF'
      }
    }
  },
  input: {
    color: '#181818'
  }
}));

export const AddUser = () => {
  const { classes } = useStyles();
  let navigate = useNavigate();
  // const [value, setValue] = React.useState(dayjs('2022-04-07'));
  const [role, setRole] = React.useState('');

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  const renderContent = (
    <>
      <Box sx={{ px: 2.5, py: 3, display: 'inline-flex' }}>
        <img src={logo} className={classes.logo} />
      </Box>

      <Box sx={{ mb: 3, mx: 2 }}>
        <StyledAccount>
          <Box>
            <Typography variant="subtitle2" sx={{ color: '#FFFFFF', fontWeight: '600' }}>
              {account.displayName}
            </Typography>

            <Typography variant="caption" sx={{ color: '#cd6afd', fontWeight: '600' }}>
              {account.role}
            </Typography>
          </Box>
        </StyledAccount>
      </Box>

      <NavSection data={navConfig} />

      <Box sx={{ flexGrow: 1 }} />

      <Box sx={{ px: 2.5, pb: 3, mt: 10, textAlign: 'center' }}>
        <Typography
          align="center"
          variant="caption"
          marginTop={5}
          className={classes.copyrightText}>
          © Jikoo.com. All rights reserved.
        </Typography>
      </Box>
    </>
  );

  const onLogout = () => {
    console.log('test');
    navigate('/');
  };

  return (
    <StyledRoot>
      <Box
        component="nav"
        sx={{
          flexShrink: { lg: 0 },
          width: { lg: NAV_WIDTH }
        }}>
        <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              width: NAV_WIDTH,
              bgcolor: '#181818',
              borderRightStyle: 'dashed',
              borderColor: '#CCCCCC'
            }
          }}>
          {renderContent}
        </Drawer>
      </Box>
      <Main>
        <Container maxWidth="xl">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            marginBottom={4}>
            <Typography
              variant="h4"
              sx={{ fontSize: '2rem', fontWeight: '700', color: 'rgb(33, 43, 54)' }}>
              Add New User
            </Typography>
            <Button variant="contained" color="error" sx={{ fontWeight: '600' }} onClick={onLogout}>
              Logout
            </Button>
          </Stack>
          <Grid
            container
            xs={12}
            spacing={2}
            sx={{
              bgcolor: '#FFFFFF',
              padding: '30px',
              mt: 3,
              borderRadius: '5px',
              boxShadow: '1px 1px 5px #a8a8a8'
            }}>
            <Grid item xs={6}>
              <CssTextField
                fullWidth
                id="user-name"
                label="Full Name"
                variant="outlined"
                margin="normal"
              />
            </Grid>
            <Grid item xs={6}>
              <CssTextField
                fullWidth
                id="user-email"
                label="Email"
                variant="outlined"
                margin="normal"
              />
            </Grid>
            <Grid item xs={6}>
              <CssTextField
                fullWidth
                id="user-pass"
                label="Password"
                variant="outlined"
                margin="normal"
              />
            </Grid>
            <Grid item xs={6}>
              <CssTextField
                fullWidth
                id="user-con-pass"
                label="Confirm Password"
                variant="outlined"
                margin="normal"
              />
            </Grid>
            <Grid item xs={6}>
              <CssTextField
                fullWidth
                id="user-phone"
                label="Mobile Number"
                variant="outlined"
                margin="normal"
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth sx={{ marginTop: '15px' }}>
                <InputLabel id="demo-simple-select-label">Select Role</InputLabel>
                <CssSelect
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={role}
                  label="Select Role"
                  onChange={handleChange}>
                  <MenuItem value={'manager'}>Manager</MenuItem>
                  <MenuItem value={'employee'}>Employee</MenuItem>
                </CssSelect>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: '#6e6e6e',
                  padding: '10px',
                  fontWeight: '600',
                  '&:hover': { backgroundColor: '#181818' }
                }}>
                Reset
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: '#371A45',
                  padding: '10px',
                  fontWeight: '600',
                  '&:hover': { backgroundColor: '#CF6BFF' }
                }}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Main>
    </StyledRoot>
  );
};
