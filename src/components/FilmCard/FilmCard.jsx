import React from 'react';
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, Typography} from "@mui/material";

const FilmCard = ({Poster, Title, Type, Year, imdbID, handleClick}) => {
    return (
        <Card sx={{display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between'}}>
            <CardActionArea sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                justifyContent: 'space-between',
                alignItems: 'stretch'
            }} onClick={handleClick}>
                {Poster !== 'N/A' ?
                    <CardMedia
                        image={Poster}
                        sx={{height: 300}}
                    /> :
                    <div style={{height: 300, display: 'grid', placeItems: 'center'}}>
                        <Typography variant={'h6'}>No image</Typography>
                    </div>
                }
                <CardContent>
                    <Typography variant={'h6'} fontWeight={600} color={'primary'}>{Title}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{justifyContent: 'space-between'}}>
                <Button onClick={handleClick}>View</Button>
                <Chip label={Type}/>
            </CardActions>

        </Card>
    );
};

export {FilmCard};