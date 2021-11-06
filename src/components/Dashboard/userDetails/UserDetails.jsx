import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import DataContext from "../../../context";

export const UserDetails = (props) => {
  const { deleteClient } = useContext(DataContext);
  const [userDetail, setUserDetail] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://venture-labs.herokuapp.com/users/${id}`)
      .then((response) => {
        setUserDetail(response.data);
      });
  }, []);
  return (
    <main>
      <table className="table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Nascimento</th>
            <th>E-mail</th>
            <th>CEP</th>
            <th>Endereço 1</th>
            <th>Endereço 2</th>
            <th>CPF</th>
            <th>Telefone</th>
            <th>Renda Mensal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Nome">
              {userDetail?.name} {userDetail?.lastName}
            </td>
            <td data-label="Nascimento">
              {userDetail?.birthDate.split("-").reverse().join("/")}
            </td>
            <td data-label="E-mail">{userDetail?.email}</td>
            <td data-label="CEP">{userDetail?.cep.replace(/[^0-9]/g, "")}</td>
            <td data-label="Endereço 1">{userDetail?.adressOne}</td>
            <td data-label="Endereço 2">{userDetail?.adressTwo}</td>
            <td data-label="CPF">{userDetail?.cpf}</td>
            <td data-label="Telefone">{userDetail?.phone}</td>
            <td data-label="Renda">R$ {userDetail?.rendaMensal}</td>
            <td data-label="Renda">
              <i onClick={() => deleteClient(userDetail.id)}>
                <MdDelete />
              </i>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};
