import React, { useContext } from 'react';
import { FakerContext } from '../App';
import { Container, Card, CardContent, CardMedia, Typography, Grid, makeStyles, CardActionArea, Box } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '25px',
    },
    media: {
        height: 145
    },
    cardContent: {
        padding: '10px',
        backgroundColor: theme.palette.secondary.main,
        '&:hover': {
            opacity: '0.7'
        }
    },
    icons: {
        marginLeft: '-10px',
        marginRight: '-10px',
        marginBottom: '-10px',
        marginTop: '10px',
        backgroundColor: theme.palette.secondary.light
    },
    job: {
        display: 'flex',
        [theme.breakpoints.down("md")]: {
            flexDirection: 'column'
        }
    }
}))

export default function Speakers() {
    const classes = useStyles();
    const speakers = useContext(FakerContext)
    if (speakers) {
        return (
            <>
                <Container maxWidth="md">
                    <Box m={5}>
                        <Typography variant="h4" align="center">
                            Meet our speakers
                       </Typography>
                    </Box>
                    <Grid container spacing={4} className={classes.root}>
                        {speakers.map((speaker, index) => {
                            return (
                                <Grid item xs={6} sm={4} md={3} key={index}>
                                    <Card key={index}>
                                        <CardActionArea>
                                            <CardMedia
                                                className={classes.media}
                                                image={speaker.profilePicture}
                                            />
                                            <CardContent className={classes.cardContent}>
                                                <Box width="100%" fontWeight="bold" textAlign="center" fontSize="17px">
                                                    <Typography variant="h6" align="center">
                                                        {`${speaker.firstName} ${speaker.lastName}`}
                                                    </Typography>
                                                </Box>
                                                <Box className={classes.job} justifyContent="space-evenly">
                                                    <Typography align="center">
                                                        {`${speaker.professionDescription} `}
                                                    </Typography>
                                                    <Typography align="center">
                                                        {speaker.profession}
                                                    </Typography>
                                                </Box>
                                                <Box className={classes.icons} display="flex" justifyContent="space-evenly">
                                                    <LinkedInIcon />
                                                    <FacebookIcon />
                                                    <InstagramIcon />
                                                </Box>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Container>
            </>
        )
    } else {
        return (
            <div></div>
        )
    }
}