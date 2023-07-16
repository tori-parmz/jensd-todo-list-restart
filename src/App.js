import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todoServerAPI } from './apiActions';

import { AppBar, LinearProgress, Toolbar, Typography } from '@mui/material';
import { TodoApp } from './TodoApp';

const App = () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const [isAppInitialized, setIsAppInitialized] = useState(false);

  useEffect(() => {
    (async () => {
      let serverState = await todoServerAPI.getTasks();
      dispatch({type: "SET_SERVER_STATE", serverState});
      setIsAppInitialized(true);
    })();
  }, []);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5">
            Todo List
          </Typography>
        </Toolbar>
      </AppBar>

      {isAppInitialized ? <TodoApp dispatch={dispatch} state={state}/> : <LinearProgress />}
    </>
  );
}

export default App;