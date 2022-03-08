import React from "react";

import { Container, Typography, Button, Grid, Box } from "@material-ui/core";

import useStyles from './styles';
import shop from './shop.png'

const Banner = () => {

    const classes = useStyles();

    return (
        <div className={classes.banner}> 
            <Container>
                <Grid container
  spacing={0}
  direction="row"
  alignItems="center"
  justifyContent="center"
  style={{ minHeight: '100vh' }}>
                    <Grid item sm={6}>
                        <Typography className={classes.title} style={{}} variant="h1">
                            Welcome to Manny's
                        </Typography>
                        <Box textAlign='center'>
                            <Button className={classes.shoppingButton} href="#">
                                Shop with us
                            </Button>
                        </Box>
                    </Grid>
                    <Grid className={classes.brand} item sm={6}>
                        <img src={shop} style={{width: "70%"}} alt="Manny's Web Shop" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};


export default Banner;
