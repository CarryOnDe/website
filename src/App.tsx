import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Du suchst/ benötigst Hilfe?
          Du bist: 
        </Typography>
        <Button variant="contained">Helfer</Button>
        <Button variant="contained">Organisation</Button>
      </Box>
    </Container>
  );
}
