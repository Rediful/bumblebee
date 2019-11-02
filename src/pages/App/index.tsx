import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import AppBar from '../../components/AppBar';
import Drawer from '../../components/Drawer';
import { useStyles } from './styles';

const StyledButton = styled(Button)`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border-radius: 3px;
  border: 0;
  color: white;
  height: 48px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
`;

const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar open={open} handleOpen={handleOpen} />
      <Drawer open={open} handleClose={handleClose} />
      <Container maxWidth="sm" className={classes.container}>
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Create React App v4-beta example with TypeScript
          </Typography>
          <StyledButton>Styled Button</StyledButton>
        </Box>
      </Container>
    </div>
  );
};

export default App;
