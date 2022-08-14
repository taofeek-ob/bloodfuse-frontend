import { createContext, useReducer, useContext } from "react";
import UserReducer from "./UserReducer";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const initialState = {
    username: 'Taofeek Bakare',
    email: 'feekbaks@gmail.com',
    loginState: false,
    loading: false,
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);
  return <UserContext.Provider value={{
        ...state,
        dispatch
      }}
    >
      {children}
    </UserContext.Provider>
};

export const useUserContext = () => useContext(UserContext);

export default UserContext;
