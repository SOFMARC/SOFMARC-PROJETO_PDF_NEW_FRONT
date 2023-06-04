// GlobalState.js
import { createContext, useState, useContext,useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [listaIds, setListaIds] = useState([]);
  const [users, setUsers] = useState([]);

  const [total, setTotal] = useState([]);

  const { uploads, users_all } = useContext(AuthContext);

  const atualizarListaIds = (data) => {
    setListaIds((prevListaIds1) => [...prevListaIds1, data]);
  };

  const atualizarListaUsers = (data) => {
    setUsers((prevListaIds1) => [...prevListaIds1, data]);
  };

  const cleanList = () => {
    setListaIds([])
  }

	const Delete = (index) => {


    const newArray = [...users]; // Crie uma cópia do array
    newArray.splice(index, 1); // Remova o elemento pelo índice
  
    setUsers(newArray); // Atualize o estado com o novo array
		// console.log(items);

	}

  return (
    <GlobalContext.Provider value={{ listaIds, atualizarListaIds, uploads, cleanList, atualizarListaUsers, users, Delete }}>
      {children}
    </GlobalContext.Provider>
  );
};
