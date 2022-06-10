import { createContext, useContext } from "react";
import { useReducer } from "react/cjs/react.production.min";
import { historyReducer } from "../reducers";

const HistoryContext = createContext(null);

const initialHistoryState = {
  history: [],
};

const HistoryProvider = ({ children }) => {
  const [historyState, historyDispatch] = useReducer(
    historyReducer,
    initialHistoryState
  );

  return (
    <HistoryContext.Provider value={{ historyState, historyDispatch }}>
      {children}
    </HistoryContext.Provider>
  );
};

const useHistory = () => useContext(HistoryContext);

export { HistoryProvider, useHistory };
