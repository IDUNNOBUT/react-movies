import {Navigate} from 'react-router-dom'
import {lazy} from "react";

const Home = lazy(() => import("../pages/Home/Home"));
const Title = lazy(() => import("../pages/Title/Title"));

const ROUTES = [
    {path: '/?/*', element: <Home/>},
    {path: '/', element: <Home/>},
    {path: '/title/:id', element: <Title/>},
    {path: '*', element: <Navigate to='/'/>},
];
export {ROUTES}