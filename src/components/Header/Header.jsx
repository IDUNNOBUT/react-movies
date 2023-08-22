import React from 'react';
import {AppBar, Box, Button, IconButton, Typography, useTheme} from "@mui/material";
import {LightMode, DarkMode, LocalMovies} from '@mui/icons-material';
import {useNavigate} from "react-router-dom";

const Header = (props) => {
    const {callback, mode} = props;
    const navigate = useNavigate();
    const theme = useTheme();
    return (
        <AppBar position='static' color={'secondary'}>
            <Box sx={{
                maxWidth: 1200,
                mx: 'auto',
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
                width: '100%',
                px: ['.5rem', '2rem'],
                alignItems: 'center'
            }}>
                <Button onClick={() => navigate('/')} sx={{
                    gap: ['0', '.5rem'],
                    py: ['8px', '6px'],
                    minWidth: ['0px', '64px'],
                    borderRadius: ['50%', '4px']
                }}><Typography component='p'
                               variant='h5'
                               fontWeight={600}
                               display={['none', 'inline-block']}
                               color={'primary'}>
                    React Movies
                </Typography>
                    <LocalMovies color={"primary"}/></Button>
                <IconButton onClick={callback}>
                    {mode === 'light' ? <DarkMode/> : <LightMode/>}
                </IconButton>
            </Box>
        </AppBar>
    );
};

export {Header};