import React, { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from './components/SmartCard';
import io from 'socket.io-client';
const endpoint = 'http://quiet-taiga-48675.herokuapp.com';
const room = '1140857788';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
});
function App() {
  const classes = useStyles();
  const [socket] = useState(io(endpoint));

  const initialState = {
    'Keyboard Light': 0,
  };
  const [value, setValue] = useState(initialState);

  useEffect(() => {
    console.log(socket.connected); // false
    if (!socket.connected) {
      socket.on('connect', () => {
        console.log(socket.connected); // true
        socket.emit('room', room);
        socket.emit('init', 'Client is Connected');
      });

      socket.on('Keyboard Light', (state) => {
        setValue({ ...value, 'Keyboard Light': state });
      });
    }
    return () => {
      socket.on('disconnect', () => {
        console.log(socket.connected); // false
      });
    };
    // eslint-disable-next-line
  }, [socket]);

  const handleChange = (component, state) => {
    console.log(component, state);
    setValue({ ...value, [component]: state });
    socket.emit(component, { room, state });
  };

  return (
    <Container maxWidth="sm" className={classes.root}>
      <Card
        name="Keyboard Light"
        handleChange={handleChange}
        state={value['Keyboard Light']}
      />
    </Container>
  );
}

export default App;
