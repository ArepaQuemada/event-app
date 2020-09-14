import React, { useState, useEffect } from 'react';
import { Container, Box, makeStyles, TextField, FormControl, Select, InputLabel, MenuItem, Button } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '55px'
    },
    wrapper: {
        backgroundColor: 'rgb(255, 255, 255, 0.1)',
        borderRadius: '20px'
    },
    input: {
        color: '#FFF'
    },
    label: {
        color: 'rgb(255, 255, 255, 0.5)'
    },
    select: {
        width: '100%',
        maxWidth: '200px',
    }
}));

export default function Contact() {
    const classes = useStyles();
    const [ errorName, setErrorName ] = useState(false);
    const [ errorEmail, setErrorEmail ] = useState(false);
    const [ disableButton, setDisableButton ] = useState(false);

    useEffect(() => {
        console.log('Cambio de estado boton')
        setDisableButton(errorName || errorEmail);
    }, [ errorName, errorEmail ])

    useEffect(() => {
        setDisableButton(true);
    }, [])

    const handleChangeName = (e) => {
        setErrorName(e.target.value ? false : true);
    }

    const handleChangeEmail = (e) => {
        setErrorEmail(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value));
    }

    return (
        <Container className={classes.root} maxWidth="md">
            <Box className={classes.wrapper} width="100%" p={5}>
                <Box m={2}>
                    <TextField
                        variant="filled"
                        color="secondary"
                        fullWidth
                        placeholder="Enter your name"
                        label="*Name"
                        onChange={handleChangeName}
                        error={errorName}
                        InputProps={{
                            className: classes.input
                        }}
                        InputLabelProps={{
                            className: classes.label
                        }} />
                </Box>
                <Box m={2}>
                    <TextField
                        variant="filled"
                        color="secondary"
                        fullWidth
                        placeholder="Enter your email"
                        label="*Email"
                        error={errorEmail}
                        onChange={handleChangeEmail}
                        InputProps={{
                            className: classes.input
                        }}
                        InputLabelProps={{
                            className: classes.label
                        }} />
                </Box>
                <Box display="flex" flexWrap="wrap" m={2} justifyContent="space-between" alignItems="center">
                    <Box mr={1}>
                        <TextField
                            variant="filled"
                            color="secondary"
                            placeholder="Enter your phone number"
                            label="Phone"
                            fullWidth
                            InputProps={{
                                className: classes.input
                            }}
                            InputLabelProps={{
                                className: classes.label
                            }} /></Box>
                    <Box m={1}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                label="Birthday"
                                InputProps={{
                                    className: classes.input
                                }}
                                InputLabelProps={{
                                    className: classes.label
                                }}
                            />
                        </MuiPickersUtilsProvider>
                    </Box>
                    <Box ml={1} className={classes.select}>
                        <FormControl fullWidth>
                            <InputLabel id="select" className={classes.label} color="secondary">Find about us on</InputLabel>
                            <Select
                                labelId="select"
                            >
                                <MenuItem>Linkedin</MenuItem>
                                <MenuItem>Facebook</MenuItem>
                                <MenuItem>Twitter</MenuItem>
                                <MenuItem>Instagram</MenuItem>
                                <MenuItem>Others</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Box>
                <Button 
                    variant="contained" 
                    fullWidth 
                    color="secondary"
                    disabled={disableButton}    
                    >Send</Button>
            </Box>
        </Container>
    )
}