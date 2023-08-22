import React from 'react';
import {Box, Typography} from "@mui/material";

const Footer = () => {
    return (
        <Box sx={{backgroundColor:'secondary.main',marginTop:'1rem'}}>
            <Box sx={{maxWidth:'1200px',marginX:'auto',paddingY:'6px'}}><Typography variant={'h6'} component={'p'} textAlign={'end'}>Idunno, 2023</Typography></Box>
        </Box>
    );
};

export {Footer};