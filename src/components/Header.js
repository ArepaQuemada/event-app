import React from 'react';
import { AppBar, Typography, Toolbar, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '30px',
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
        <div>
            <AppBar color="primary">
                <Toolbar className={classes.root}>
                    <Typography variant="h4" className={classes.title}>
                        Incredible Event
                </Typography>
                    <div>
                        <Button color="secondary" className={classes.button}>About</Button>
                        <Button color="secondary" className={classes.button}>Food</Button>
                        <Button color="secondary" className={classes.button}>Contact</Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}