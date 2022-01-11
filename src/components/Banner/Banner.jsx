import React from "react";

import { Container, Typography, Button, Grid } from "@material-ui/core";

import useStyles from './styles';
import shop from './shop.png'

const Banner = () => {

    const classes = useStyles();

    return (
        <div className={classes.banner}> 
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <Typography className={classes.title} style={{paddingTop: "180px"}} variant="h1">
                            Welcome to Manny's
                        </Typography>
                        <Button className={classes.shoppingButton} href="#">
                            Shop with us
                        </Button>
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
