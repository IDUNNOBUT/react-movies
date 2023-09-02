import {React, useContext, useState} from 'react';
import {FilmsList} from "../../components/FilmsList/FilmsList";
import {SearchBar} from "../../components/SearchBar";
import {useSearchFilmsQuery} from "../../api/FilmsApi/FilmsApi";
import {Filter} from "../../components/Filter";
import {Pagination, PaginationItem, Skeleton} from "@mui/material";
import {NavLink} from "react-router-dom";
import {SearchContext} from "../../context/searchContext";

const Home = () => {
    const {params:{s,f,page},setSearchParams} = useContext(SearchContext);
    const {data, currentData, isFetching, error} = useSearchFilmsQuery({search: s, type: f, page: page});

    return (
        <div>
            <SearchBar handleSubmit={(query) => {
                setSearchParams({s: query,page:1, f});
            }}/>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'}}>
                <Filter handleChange={(filter) => {
                    setSearchParams({s,page:1, f: filter})
                }} filter={f}/>
                {currentData?.totalResults || data?.totalResults ?
                    <Pagination sx={{marginY: '.5rem'}}
                                page={+page}
                                count={Math.ceil((+currentData?.totalResults || +data?.totalResults) / 10) || 10}
                                renderItem={(item) => (
                                    <PaginationItem
                                        component={NavLink}
                                        to={{
                                            pathname: '',
                                            search: `?s=${s}&page=${item.page}&f=${f}`
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