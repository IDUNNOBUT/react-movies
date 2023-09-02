import {createContext} from "react";
import {useSearchParams} from "react-router-dom";


const initialValue = {
    page: 1,
    s:'matrix',
    f:'all',
}

const SearchContext = createContext(null);

const SearchProvider = (props) => {
    const [searchParams, setSearchParams] = useSearchParams();
    return <SearchContext.Provider value={{params: searchParams.toString() ? Object.fromEntries(searchParams.entries()) : initialValue,setSearchParams}}>{props.children}</SearchContext.Provider>
}

export {SearchProvider,SearchContext};