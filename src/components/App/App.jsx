import {React, Suspense, useEffect, useMemo, useState} from 'react';
import './App.css';
import {useRoutes} from "react-router-dom";
import {ROUTES} from "../../routes";
import {Header} from "../Header/Header";
import {Box, createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {Footer} from "../Footer";
function App() {
    const [mode, setMode] = useState(localStorage.getItem('mode') || 'light');
    const routes = useRoutes(ROUTES);
    const theme = useMemo(
        () =>
            createTheme({
                typography: {
                    fontFamily: ['Montserrat']
                },
                palette: {
                    mode,
                    primary: {
                        main: '#2e9aa6',
                    },
                    secondary: {
                        main: '#384686',
                    }
                },
            }),
        [mode],
    );
    const changeTheme = () => {
        setMode((prevMode) => prevMode === 'light' ? 'dark' : 'light');
    }
    useEffect(() => localStorage.setItem('mode', mode), [mode]);
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{display: 'flex', flexDirection: 'column', minHeight: '100dvh'}}>
                <CssBaseline/>
                <Header callback={changeTheme} mode={mode}/>
                <Box sx={{
                    flexGrow: 1,
                    display: 'grid',
                    maxWidth: 1200,
                    mx: 'auto',
                    width: '100%',
                    px: ['.5rem', '2rem']
                }}>
                    <Suspense fallback={<Box></Box>}>
                        {routes}
                    </Suspense>
                </Box>
                <Footer/>
            </Box>
        </ThemeProvider>
    );
}

export default App;
