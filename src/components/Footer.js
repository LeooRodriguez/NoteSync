import React from 'react';
import { Box, Typography, Container, Grid, Link, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styled from '@emotion/styled';

const StyledFooter = styled(Box)`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: #fff;
  padding: ${({ theme }) => theme.spacing(3)}px 0;
  margin-top: auto;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Container maxWidth="md">
        <Grid container spacing={3} justifyContent="center">
          <Grid item>
            <Link href="/privacy" color="inherit" underline="hover">
              Privacy Policy
            </Link>
          </Grid>
          <Grid item>
            <Link href="/terms" color="inherit" underline="hover">
              Terms and Conditions
            </Link>
          </Grid>
          <Grid item>
            <Link href="https://github.com/LeooRodriguez" color="inherit" target="_blank" rel="noopener">
              <IconButton color="inherit">
                <GitHubIcon />
              </IconButton>
            </Link>
          </Grid>
          <Grid item>
            <Link href="www.linkedin.com/in/leonardo-rodríguez-4560b4224" color="inherit" target="_blank" rel="noopener">
              <IconButton color="inherit">
                <LinkedInIcon />
              </IconButton>
            </Link>
          </Grid>
        </Grid>
        <Box mt={3}>
          <Typography variant="body2" align="center">
            &copy; {new Date().getFullYear()} NoteSync. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
