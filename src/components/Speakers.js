import React from 'react';
import { Container, Card, CardContent, CardMedia, Typography, Grid, makeStyles, CardActionArea } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '25px'
    },
    media: {
        height: 145
    },
    cardContent: {
        backgroundColor: theme.palette.secondary.main,
        '&:hover': {
            opacity: '0.7'
        }
    }
}))

export default function Speakers({ speakers }) {
    const classes = useStyles();
    console.log(speakers);
    if (speakers) {
        return (
            <>
                <Container maxWidth="md">
                    <Grid container spacing={4} className={classes.root}>
                        {speakers.map((speaker, index) => {
                            return (
                                <Grid item xs={6} sm={4} md={3}>
                                    <Card key={index}>
                                        <CardActionArea>
                                            <CardMedia
                                                className={classes.media}
                                                image={speaker.profilePicture}
                                            />
                                            <CardContent className={classes.cardContent}>
                                                <Typography variant="h5" align="center">
                                                    {speaker.firstName}
                                                </Typography>
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