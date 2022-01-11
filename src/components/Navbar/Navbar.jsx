import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { classExpression } from '@babel/types';
import useStyles from './styles';
import { Link, useLocation } from 'react-router-dom';
import logo from './manny.png'

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();

    return (
        <>
            <AppBar position="fixed" className={classExpression.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/">
                        <img src={logo} alt="Manny's Store" height="80px" className={classes.image} />
                    </Typography>
                    <div className={classes.grow} />
                    {location.pathname === '/' && (
                    <div className={classes.button}>
                        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div> )}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
