import {api} from "../BaseApi";


const filmsApi = api.injectEndpoints({
    endpoints: build => ({
        searchFilms: build.query({
            query: (arg) => {
                const {search: s, page = 1, type = 'all'} = arg;
                return {
                    url: '',
                    params: {apikey: process.env.REACT_APP_API_KEY, s, page, type: type === 'all' ? '' : type},
                    validateStatus: (response, result) => response.status === 200 && result.Response === 'True'
                }
            },
            transformResponse: (baseQueryReturnValue, meta, arg) => {
                return {films: baseQueryReturnValue.Search, totalResults: baseQueryReturnValue.totalResults}
            },
            transformErrorResponse: (response) => response.data.Error,
            providesTags: (result, error, arg) =>
                result?.films
                    ? [...result.films.map(({imdbID}) => ({type: 'Films', imdbID})), 'Films']
                    : ['Films'],
        }),
        getFilmById: build.query({
            query: ({id: i}) => ({
                url: '',
                params: {apikey: process.env.REACT_APP_API_KEY, i},
                validateStatus: (response, result) => response.status === 200 && result.Response === 'True'
            }),
            transformErrorResponse: (response) => response.data.Error,
            providesTags: ['Film']
        })
    })
})

export const {useSearchFilmsQuery, useGetFilmByIdQuery} = filmsApi;

export {filmsApi};