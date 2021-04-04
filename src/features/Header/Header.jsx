import { DialogActions, DialogContent, DialogContentText } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CodeIcon from '@material-ui/icons/Code';
import MenuIcon from '@material-ui/icons/Menu';
import Register from 'features/Auth';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
   root: {
      flexGrow: 1,
   },
   menuButton: {
      marginRight: theme.spacing(2),
   },
   title: {
      flexGrow: 1,
   },
   link: {
      color: 'white',
      textDecoration: 'none',
   },
}));

export default function Header() {
   const classes = useStyles();
   const [open, setOpen] = useState(false);
   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };
   return (
      <div className={classes.root}>
         <AppBar position="static">
            <Toolbar>
               <CodeIcon
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
               >
                  <MenuIcon />
               </CodeIcon>
               <Typography variant="h6" className={classes.title}>
                  <Link className={classes.link} to="/">
                     Learn React Udemy
                  </Link>
               </Typography>
               <NavLink className={classes.link} to="/todo-list">
                  <Button color="inherit">Todo</Button>
               </NavLink>

               <NavLink className={classes.link} to="/loading">
                  <Button color="inherit">Loading</Button>
               </NavLink>
               <Button color="inherit" onClick={handleClickOpen}>
                  Register
               </Button>
            </Toolbar>
         </AppBar>
         <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
            <DialogContent>
               <DialogContentText id="alert-dialog-description">
                  <Register />
               </DialogContentText>
            </DialogContent>
            <DialogActions>
               <Button onClick={handleClose} color="primary">
                  Cancel
               </Button>
               {/* <Button onClick={handleClose} color="primary" autoFocus>
                  Agree
               </Button> */}
            </DialogActions>
         </Dialog>
      </div>
   );
}
