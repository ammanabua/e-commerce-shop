import React from 'react';
import useStyles from './styles';

const Footer = () => {

    const classes = useStyles();

    const date = new Date();
    const fullYear = date.getFullYear();

    return (
        <footer className={classes.footer}>
            <p>
                Copyright &copy; {fullYear} Amman Abua &trade;
            </p>
        </footer>
    )
};

export default Footer




