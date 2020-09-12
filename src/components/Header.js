import React from 'react';
import { AppBar, Typography, Toolbar, Button, makeStyles, Box } from '@material-ui/core';

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
    }
}))

export default function Header() {

    const classes = useStyles();

    return (
        <AppBar className={classes.bar} position="absolute">
            <Toolbar className={classes.root}>
                <Typography variant="h4" className={classes.title}>
                    Incredible Event
                </Typography>
                <Box>
                    <Button color="secondary" className={classes.button}>Home</Button>
                    <Button color="secondary" className={classes.button}>About</Button>
                    <Button color="secondary" className={classes.button}>Contact</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}