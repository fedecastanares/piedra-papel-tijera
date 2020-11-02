import React, {useContext, useState} from 'react';
import {Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Typography, Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import {DataContext} from '../../context/dataContext'
import {loginRequest} from '../../requests/login'
import Message from '../../components/message';
import Joi from '@hapi/joi'

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
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn({history}) {
  const classes = useStyles();
  const {setauth, setError} = useContext(DataContext)
  const [user, setUser] = useState({})

  const handleSubmit = e => {
    e.preventDefault();
    const schema = Joi.object({
      password: Joi.string()
          .min(7)
          .max(50)
          .required(),

      email: Joi.string()
          .email({ tlds: {allow: false} })
          .required()
    })
    const validationResult = schema.validate(user)
    if (!validationResult.error) {
      const login = async (user) => {
        const successfull = await loginRequest(user.email.toLowerCase(), user.password);
        if (successfull){
          setauth(true);
          setError(false)
          history.push('/');
        } else {
          setError({severity : 'warning', message: "Usuario o contraseña invalida"})
        }
      }
      login(user);
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
          Sign in
        </Typography>
        <Message/>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
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
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container justify='flex-end'>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}