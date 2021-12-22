import React, { useReducer } from 'react';
import mainContext from './main-context';
import { mainReducer } from '../reducers/mainReducer';
import { db } from '../db/drillDB';
const MainState = (props) => {
  const [list, dispatch] = useReducer(mainReducer, [...db]);

  return (
    <mainContext.Provider
      value={{
        list,
        dispatch,
      }}
    >
      {props.children}
    </mainContext.Provider>
  );
};

export default MainState;
