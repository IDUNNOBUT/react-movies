import React from 'react';
import {useParams} from "react-router-dom";
import {useGetFilmByIdQuery} from "../../api/FilmsApi/FilmsApi";

const Title = () => {
    const {id} = useParams();
    const {data,isFetching, error} = useGetFilmByIdQuery({id});
    return (
        <div>
            Film {data?.Title && data.Title}
        </div>
    );
};

export default Title;