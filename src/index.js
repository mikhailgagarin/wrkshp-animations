import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';

import GlobalStyle from './assets/GlobalStyle';
import theme from './assets/theme';
import Routes from './pages/routes';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <React.Fragment>
                <GlobalStyle />
                <Router>
                    <Routes />
                </Router>
            </React.Fragment>
        </ThemeProvider>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
