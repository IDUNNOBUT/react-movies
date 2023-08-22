import {React, useState} from 'react';
import {FilmsList} from "../../components/FilmsList/FilmsList";
import {SearchBar} from "../../components/SearchBar";
import {useSearchFilmsQuery} from "../../api/FilmsApi/FilmsApi";
import {Filter} from "../../components/Filter";
import {Pagination, PaginationItem, Skeleton} from "@mui/material";
import {NavLink, useSearchParams} from "react-router-dom";

const Home = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const page = parseInt(searchParams.get('page') || '1', 10);
    const [searchQuery, setSearchQuery] = useState(searchParams.get('s') || 'matrix');
    const [filterQuery, setFilterQuery] = useState(searchParams.get('f') || 'all');
    const {data, currentData, isFetching, error} = useSearchFilmsQuery({search: searchQuery, type: filterQuery, page});

    return (
        <div>
            <SearchBar handleSubmit={(query) => {
                setSearchQuery(query);
                setSearchParams({s: query,page:1, f: filterQuery});
            }}/>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'}}>
                <Filter handleChange={(filter) => {
                    setFilterQuery(filter);
                    setSearchParams({s: searchQuery,page:1, f: filter})
                }} filter={filterQuery}/>
                {currentData?.totalResults || data?.totalResults ?
                    <Pagination sx={{marginY: '.5rem'}}
                                page={page}
                                count={Math.ceil((+currentData?.totalResults || +data?.totalResults) / 10) || 10}
                                renderItem={(item) => (
                                    <PaginationItem
                                        component={NavLink}
                                        to={{
                                            pathname: '',
                                            search: `?s=${searchQuery}${item.page === 1 ? '' : `&page=${item.page}&f=${filterQuery}`}`
                                        }}
                                        {...item}
                                    />
                                )}/> :
                    <Skeleton variant={'rounded'} animation="wave" sx={{marginY: '.5rem'}}>
                        <Pagination count={10}/>
                    </Skeleton>}</div>
            <FilmsList error={error} data={currentData} isFetching={isFetching}/>
        </div>
    );
};

export default Home;