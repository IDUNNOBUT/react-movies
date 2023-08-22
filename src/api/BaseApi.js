import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://www.omdbapi.com/',
    }),
    reducerPath: 'filmsApi',
    endpoints: ()=>({}),
    tagTypes:['Films','Film']
})
export {api};