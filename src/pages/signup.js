import React, {useContext, useState} from 'react';
import {Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Typography, Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import {DataContext} from '../context/dataContext'
import {signUpRequest} from '../requests/signup'
import { isUserAuthenticated } from '../requests/auth';
import Joi from '@hapi/joi'
import Message from '../components/message'


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    marginTop: theme.spacing(3),
  },
}));

export default function SignIn({history}) {
  const classes = useStyles();
  const {setauth, setError} = useContext(DataContext)
  const [user, setUser] = useState({})

  const handleSubmit = e => {
    e.preventDefault();
    const schema = Joi.object({
      name: Joi.string()
          .required(),

      password: Joi.string()
          .min(7)
          .max(50)
          .required(),

      email: Joi.string()
          .email({ tlds: {allow: false} })
          .required()
  })
    const validationResult = schema.validate(user)
    if (!validationResult.error && user.password === user.passwordVerify) {
      const signUp = async (user) => {
        await signUpRequest(user.name, user.email, user.password);
        if (isUserAuthenticated()){
          setauth(true);
          setError(false)
          history.push('/');
        }
      }
      signUp(user);
    } else {
      setError({severity : 'warning', message: "Usuario o contraseña invalida"})
    }
  }

  const onChange = e => {
    setUser({
      ...user,
      [e.target.name] : e.target.value
  })
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Message/>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
            onChange={onChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={onChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={onChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="passwordVerify"
            label="Repeat password"
            type="password"
            id="passwordVerify"
            autoComplete="current-password"
            onChange={onChange}
          />
           <Button
            fullWidth
            variant="outlined"
            color="secondary"
            className={classes.submit}
            onClick={()=> history.push('/')}
          >
            Cancelar
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{marginTop: 15}}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </Container>
  );
}