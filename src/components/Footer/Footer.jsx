import React from 'react';
import useStyles from './styles';
import { Container, Grid, Box, Typography } from '@material-ui/core';

const Footer = () => {

    const classes = useStyles();

    const date = new Date();
    const fullYear = date.getFullYear();

    return (
        <footer className={classes.footer}>
            {/* <p>
                Copyright &copy; {fullYear} Amman Abua &trade;
            </p> */}

            <Box>
                <Container maxWidth="lg">
                    <Grid xs={12}>
                        <Typography>Copyright &copy; {fullYear} Amman Abua &trade;</Typography>
                    </Grid>
                </Container>
            </Box>
        </footer>
    )
};

export default Footer




