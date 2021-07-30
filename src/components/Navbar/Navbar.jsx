import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { classExpression } from '@babel/types';
import useStyles from './styles';

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    return (
        <>
            <AppBar position="fixed" className={classExpression.appBar} color="inherit">
                <Toolbar>
                    <Typography>
                        <img src='' alt="Amman's Store" height="25px" className={classes.image} />
                        Amman's E-Commerce Store
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
