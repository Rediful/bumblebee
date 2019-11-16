import React from 'react';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

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
  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Create React App v4-beta example with TypeScript
      </Typography>
      <StyledButton>Styled Button</StyledButton>
    </div>
  );
};

export default App;
