import React from 'react';
import { Container, Box, Typography, makeStyles } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.primary.dark,
        marginTop: '25px'
    }
}))

export default function Footer() {
    const classes = useStyles();

    return (
        <Container className={classes.root} disableGutters maxWidth={false}>
            <Container maxWidth="sm">
                <Box display="flex" justifyContent="space-evenly" maxWidth="md" p={10}>
                    <FacebookIcon fontSize="large" />
                    <InstagramIcon fontSize="large" />
                    <TwitterIcon fontSize="large" />
                    <YouTubeIcon fontSize="large" />
                </Box>
            </Container>
        </Container>
    )
}