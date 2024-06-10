import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const Title = styled(Typography)`
  flex-grow: 1;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Title variant="h6">
            NoteSync
          </Title>
          <StyledLink to="/">
            <Button color="inherit">Home</Button>
          </StyledLink>
          <StyledLink to="/create">
            <Button color="inherit">Create Note</Button>
          </StyledLink>
          <StyledLink to="/privacy">
            <Button color="inherit">PrivacyPolicy</Button>
          </StyledLink>
          <StyledLink to="/terms">
            <Button color="inherit">TermsAndConditions</Button>
          </StyledLink>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
