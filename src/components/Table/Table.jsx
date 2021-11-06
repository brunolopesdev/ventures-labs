import "./index.css";
import DataContext from "../../context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { FcViewDetails } from "react-icons/fc";

export const Table = () => {
  const { data } = useContext(DataContext);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Detalhes</th>
        </tr>
      </thead>
      <tbody>
        {data?.length > 0 ? (
          data.map((user) => (
            <tr key={user.id}>
              <td data-label="Nome">{user.name}</td>
              <td>
                <Link to={`/user-details/${user.id}`}>
                  <i>
                    <FcViewDetails />
                  </i>
                </Link>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td style={{ padding: "1rem" }}>Nenhum cliente cadastrado</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
