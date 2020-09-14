import React from 'react';
import { Container, Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}));

export default function About() {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Box>
                ABOUT
            </Box>
        </Container>
    )
}