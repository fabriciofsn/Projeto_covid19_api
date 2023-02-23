import React from "react";
import styled, { keyframes } from "styled-components";
import { BsPin } from "react-icons/bs";
import { MdEmergency } from "react-icons/md";
import { FaSkull } from "react-icons/fa";

const animTable = keyframes`
  from{
    opacity: 0;
    transform: translate3d(-30px, 0, 0);
  }
  to{
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const Table = styled.table`
  animation: ${animTable} 0.5s ease;
  color: white;
  border: 1px solid #0b0b0c;
  background-color: #1a1a1d;
  width: 100%;
  border-radius: 4px;
  padding: 1rem;
  &:hover {
    border: 1px solid #0d6efd;
    transition: 0.5s;
  }
`;

const WrapperTable = styled.div`
  width: 100%;
  max-width: 700px;
  @media (max-width: 381px) {
    max-width: 400px;
  }
`;

const Status = ({ data }) => {
  return (
    <WrapperTable>
      <h2 style={{ color: "white" }}>Status No Brasil Por Estado</h2>
      <Table>
        <thead>
          <tr>
            <th> {<BsPin style={{ color: "red" }} />} Estados</th>
            <th> {<MdEmergency style={{ color: "red" }} />} Confirmados</th>
            <th> {<FaSkull style={{ color: "red" }} />} Mortes</th>
          </tr>
        </thead>
        <tbody>
          {data.data.map(({ uf, cases, deaths }) => {
            return (
              <tr key={uf}>
                <td>{uf}</td>
                <td>{cases.toLocaleString("pt-BR")}</td>
                <td>{deaths.toLocaleString("pt-BR")}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </WrapperTable>
  );
};

export default Status;
