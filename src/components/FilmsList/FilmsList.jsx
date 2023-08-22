import React, {useState} from 'react';
import {Box, Grid, Skeleton, Typography} from "@mui/material";
import {FilmCard} from "../FilmCard";
import {useNavigate} from "react-router-dom";

const FilmsList = ({data, isFetching, error}) => {
    const [page, setPage] = useState(1);
    const navigateTo = useNavigate();
    if (error) return (<Typography variant={'h3'}>{error}</Typography>);

    return (<Grid container spacing={2} columns={{xs: 4, sm: 8, md: 12, lg: 12}} alignItems={'stretch'}>
            {isFetching ? [...Array(8)].map((i, index) =>
                    <Grid item xs={4} sm={4} md={4} lg={3} key={index}>
                        <Box display={'flex'} flexDirection={'column'} gap={'.5rem'}>
                            <Skeleton variant={'rounded'} animation="wave" height={300}/>
                            <Skeleton variant={'text'} animation="wave" height={32} width={'60%'}/>
                            <Skeleton variant={'rounded'} animation="wave" height={24}/>
                        </Box>
                    </Grid>) :
                data?.films.map(film =>
                    <Grid item key={film.imdbID}
                          xs={4} sm={4} md={4} lg={3}>
                        <FilmCard {...film} handleClick={() => navigateTo(`/title/${film.imdbID}`)}/>
                    </Grid>)}
        </Grid>
    );
};

export {FilmsList};