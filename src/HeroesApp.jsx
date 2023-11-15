import { useEffect, useReducer } from 'react';
import { AuthReducer } from './auth/AuthReducer';
import { AuthContext } from './auth/AuthContext';
import { AppRouter } from './routers/AppRouter';
const init = () => {
  return JSON.parse(localStorage.getItem('user')) || { logged: false };
};

export const HeroesApp = () => {
  const [user, dispatch] = useReducer(AuthReducer, {}, init);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <AppRouter />
    </AuthContext.Provider>
  );
};
