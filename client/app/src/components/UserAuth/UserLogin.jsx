import React from 'react';
import { TextField, Paper, Button, Grid, Typography } from '@mui/material/';
import { useNavigate } from 'react-router-dom';

import useStyles from './styles';
import { withStyles } from 'tss-react/mui';
import logo from '../../assets/LogoConceptCROP.png';

const CssTextField = withStyles(TextField, () => ({
  root: {
    '& .MuiInputLabel-root': {
      color: '#cccccc'
    },
    '& .MuiTextField-root': {
      color: '#ffffff'
    },
    '& .MuiFormHelperText-root': {
      color: '#6e6e6e'
    },
    '& label.Mui-focused': {
      color: '#cccccc'
    },
    '& .MuiInputBase-input': {
      color: '#ffffff'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#6e6e6e'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#cccccc'
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
    color: '#1a1a1a'
  }
}));

export const UserLogin = () => {
  const { classes } = useStyles();
  let navigate = useNavigate();

  const onSubmitHandler = () => {
    console.log('test');
    navigate('/admin');
  };

  return (
    <div>
      <Grid container spacing={0} direction="column" alignItems="center" marginTop={6}>
        <img src={logo} className={classes.logo} />
        <Paper className={classes.paper}>
          <Typography variant="h5" className={classes.titleText}>
            LOGIN
          </Typography>
          <form onSubmit={onSubmitHandler}>
            <Grid container spacing={2} marginTop={2}>
              <Grid item xs={12}>
                <CssTextField
                  fullWidth
                  id="user-email"
                  label="Email"
                  variant="outlined"
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12}>
                <CssTextField
                  fullWidth
                  id="user-password"
                  label="Password"
                  variant="outlined"
                  margin="normal"
                />
              </Grid>
              {/* <Typography variant="caption">{errorMsg}</Typography> */}
            </Grid>
            <Button type="submit" fullWidth variant="contained" className={classes.btn}>
              Submit
            </Button>
          </form>
        </Paper>
      </Grid>
      {/* <Typography align="center" variant="caption" marginTop={5} className={classes.copyrightText}>
        © Jikoo.com. All rights reserved.
      </Typography> */}
    </div>
  );
};
