import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DataContext = createContext();

function DataContextProvider(props) {
  const [formStep, setFormStep] = useState(0);
  const [data, setData] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    getClients();
  }, []);

  const getClients = () => {
    axios.get("https://venture-labs.herokuapp.com/users").then((response) => {
      setData(response.data);
    });
  };

  const deleteClient = (id) => {
    axios.delete(`https://venture-labs.herokuapp.com/users/${id}`);
    setData(
      data.filter((value) => {
        return value.id != id;
      })
    );
    getClients();
    navigate("/");
  };

  const registerClient = async (values) => {
    await axios.post("https://venture-labs.herokuapp.com/users", values);
    try {
      return [completeFormStep(), getClients()];
    } catch (error) {
      console.log(error);
    }
  };

  const completeFormStep = () => {
    setFormStep((cur) => cur + 1);
  };

  return (
    <DataContext.Provider
      value={{
        registerClient,
        completeFormStep,
        deleteClient,
        formStep,
        data,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}

export default DataContext;
export { DataContextProvider };
