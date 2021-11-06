import "./Main.css";
import { useContext } from "react";
import hello from "../../../assets/hello.svg";
import DataContext from "../../../context";
import { Link } from "react-router-dom";
import { FcViewDetails } from "react-icons/fc";
import { Table } from "../../Table/Table";

const Main = () => {
  return (
    <main>
      <div className="main__container">
        <div className="main__title">
          <img src={hello} alt="hello" />
          <div className="main__greeting">
            <h1>Olá, Admin!</h1>
            <p>Bem-vindo a sua dashboard.</p>
          </div>
        </div>
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Clientes Cadastrados</h1>
              </div>
            </div>
            <div style={{ marginTop: "35px" }}>
              <Table />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
