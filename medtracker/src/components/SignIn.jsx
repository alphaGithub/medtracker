import React,{useState,useContext} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Nav from "./Nav"
import AuthApi from "../script/authApi"
import {signInRequest} from "../script/auth";



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


export default function SignIn() {
  const authApi = useContext(AuthApi)
  const classes = useStyles();
  const [user,setUser]= useState({});
  const [msg,setMsg] = useState("");

  function handleChange(event){
    const {name,value} = event.target;
    setUser(prevUser=>{
        return {
            ...prevUser,
            [name]:value
        }
    });
  }

  const handleSingInSubmission = async(event)=>{
      event.preventDefault();
      if(authApi.auth)
      {
        setMsg("");
        setMsg("Please logout, you are Already logged in!");
        return ;
      }
      const res=await signInRequest(user);
      if(res.data.errors==null){
        authApi.setAuth(true);
        setMsg("");
        setMsg(res.data.message);
      }
      else{
        setMsg("");
        setMsg(res.data.errors[0].msg);
        console.log(msg);
      }
  }

  
  function myFunction() {
    if(msg==="")
      return;
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }


  return (
    <div>
    <Nav/>
   
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSingInSubmission} noValidate>
          <TextField
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="username"
            autoComplete="email"
            autoFocus
          />
          <TextField
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
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
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
      </Box>
      <div id="snackbar" className="" onChange={myFunction()}>{msg}</div>
    </Container>
    </div>
  );
}