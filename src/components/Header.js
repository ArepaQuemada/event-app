import React from 'react';
import { Container, AppBar, Typography, Toolbar, Button, makeStyles, Box } from '@material-ui/core';
import {
    Link
} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    bar: {
        background: 'transparent',
        boxShadow: 'none',
        padding: '20px'
    },
    root: {
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        }
    },
    title: {
        flexGrow: 1,
    },
    button: {
        margin: '10px'
    },
    link: {
        textDecoration: 'none'
    }
}))

export default function Header() {

    const classes = useStyles();

    return (
        <Container>
            <AppBar className={classes.bar} position="absolute">
                <Toolbar className={classes.root}>
                    <Typography variant="h4" className={classes.title}>
                        Incredible Event
                </Typography>
                    <Box>
                        <Link className={classes.link} to="/">
                            <Button color="secondary" className={classes.button}>Home</Button>
                        </Link>
                        <Link className={classes.link} to="/about">
                            <Button color="secondary" className={classes.button}>About</Button></Link>
                        <Link className={classes.link} to="/contact">
                            <Button color="secondary" className={classes.button}>Contact</Button>
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </Container>
    );
}