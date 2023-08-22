import React from 'react';
import {useFormik} from "formik";
import {Divider, IconButton, InputAdornment, Stack, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {Clear} from "@mui/icons-material";

const SearchBar = ({handleSubmit}) => {
    const formik = useFormik({
        initialValues: {
            search: '',
        },
        onSubmit: values => {
            handleSubmit(values.search);
        }
    })
    return (
        <Stack alignItems={'center'} direction={'row'} paddingY={'1rem'} spacing={1}
               divider={<Divider orientation={'vertical'} flexItem/>} component={'form'} onSubmit={formik.handleSubmit}>
            <IconButton type={'submit'}>
                <SearchIcon/>
            </IconButton>
            <TextField placeholder={'Search...'} hiddenLabel fullWidth variant={'standard'} id={'search'}
                       name={'search'} onChange={formik.handleChange} value={formik.values.search}
                       InputProps={formik.values.search ? {
                           endAdornment: <InputAdornment
                               position={'end'}><IconButton size={'small'}
                                                            onClick={formik.handleReset}><Clear/></IconButton></InputAdornment>
                       } : null}></TextField>
        </Stack>
    );
};

export {SearchBar};