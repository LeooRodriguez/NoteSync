import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CreateNote from './pages/CreateNote';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import { Box } from '@mui/material';
import styled from '@emotion/styled';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#ff4081',
    },
  },
  spacing: 8,
});

const Content = styled(Box)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled(Box)`
  flex: 1;
  padding-bottom: ${({ theme }) => theme.spacing(3)}px;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Content>
          <Navbar />
          <Main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<CreateNote />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsAndConditions />} />
            </Routes>
          </Main>
          <Footer />
        </Content>
      </Router>
    </ThemeProvider>
  );
}

export default App;
