import React from 'react';
import { Container, Box, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.secondary.main
    }
}))

export default function InfoNav() {
    const classes = useStyles();

    return (
        <Container className={classes.root} disableGutters maxWidth={false}>
            <Box display="flex" justifyContent="space-evenly" p={2}>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Typography variant="h5">+1000</Typography>
                    <Typography variant="caption">Attendants</Typography>
                </Box>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Typography variant="h5">5</Typography>
                    <Typography variant="caption">Days</Typography>
                </Box>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Typography variant="h5">With</Typography>
                    <Typography variant="caption">The pros</Typography>
                </Box>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Typography variant="h5">+50</Typography>
                    <Typography variant="caption">Stands</Typography>
                </Box>
           </Box>
        </Container>
    )
}