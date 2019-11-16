import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import AppBar from './components/AppBar';
import Drawer from './components/Drawer';
import Main from './pages/Main';
import Chat from './pages/Chat';
import { useStyles } from './styles';

const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <AppBar
          open={open}
          handleOpenDrawer={(): void => {
            setOpen(true);
          }}
        />
        <Drawer
          open={open}
          handleCloseDrawer={(): void => {
            setOpen(false);
          }}
        />
        <Container className={classes.container}>
          <Route exact path="/" component={Main} />
          <Route path="/chat" component={Chat} />
        </Container>
      </div>
    </Router>
  );
};

export default App;
