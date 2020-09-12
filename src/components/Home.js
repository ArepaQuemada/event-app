import React from 'react';
import { Container, makeStyles, Box, Typography, Button } from '@material-ui/core';
import conferenceImg600 from '../assets/img/conference-600.jpg'
import conferenceImg1900 from '../assets/img/conference-1900.jpg'
import conferenceImg2400 from '../assets/img/conference-2400.jpg'
import conferenceImg from '../assets/img/conference.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.palette.primary.main,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        [theme.breakpoints.down('xs')]: {
            backgroundImage: `url(${conferenceImg600})`
        },
        [theme.breakpoints.down('md')]: {
            backgroundImage: `url(${conferenceImg1900})`,
        },
        [theme.breakpoints.down('lg')]: {
            backgroundImage: `url(${conferenceImg2400})`,
        },
        [theme.breakpoints.down('xl')]: {
            backgroundImage: `url(${conferenceImg})`,
        }
    },
    button: {
        width: '100%'
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        '&:hover': {
            opacity: '0.8',
        }
    },
    innerContainer: {
        border: '1px solid white',
        padding: '20px',
        backgroundColor: 'rgb(103, 103, 103, 0.3)',
        background: 'transparent',
    },
    quote: {
        textAlign: 'end',
    }
}))

export default function Home() {

    const classes = useStyles();

    return (
        <Box textAlign="center" className={classes.root}>
            <Container className={classes.container} maxWidth="sm" id="container">
                <div className={classes.innerContainer}>
                    <Typography variant="h3">
                        An event that will blow your mind
                    </Typography>
                    <Box className={classes.quote}>
                        <Typography>
                            "Some random dude trying to improve his web development skills"
                        </Typography>
                        <Typography>
                            "- A Random Dude Indeed"
                        </Typography>
                    </Box>
                    <Button color="secondary" variant="contained" size="large" className={classes.button}>
                        <Typography variant="button"> 
                            Buy tickets
                        </Typography>
                    </Button>
                </div>
            </Container>
        </Box>
    )
}