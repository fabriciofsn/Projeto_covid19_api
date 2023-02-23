import React from "react";
import styled, { keyframes } from "styled-components";
import { ImCheckboxChecked } from "react-icons/im";
import { AiFillWarning } from "react-icons/ai";
import { FaSkullCrossbones } from "react-icons/fa";

const animBrasil = keyframes`
from{
    opacity: 0;
    transform: translate3d(-30px, 0, 0);
  }
  to{
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const DivAnim = styled.div`
  animation: ${animBrasil} 0.5s ease;
  @media (max-width: 738px) {
    width: 100%;
    text-align: center;
    margin-top: 20px;
  }
`;

const DivElement = styled.div`
  padding: 1rem;
  border-radius: 4px;
  text-align: left;
  border: 1px solid #0b0b0c;
  background-color: #1a1a1d;
  &:hover {
    border: 1px solid #0d6efd;
    transition: 0.5s;
  }
  @media (max-width: 738px) {
    text-align: justify;
  }
`;

const Brazil = ({ data }) => {
  let [totalDeaths, setTotalDeaths] = React.useState(0);
  let [totalConfirmed, setTotalConfirmed] = React.useState(0);
  let [suspect, setSuspect] = React.useState(0);

  React.useEffect(() => {
    let totalDeath = data.data.reduce((acc, deaths) => {
      return acc + deaths.deaths;
    }, 0);
    setTotalDeaths(totalDeath);
  }, []);

  React.useEffect(() => {
    let totalCases = data.data.reduce((acc, cases) => {
      return acc + cases.cases;
    }, 0);
    setTotalConfirmed(totalCases);
  }, []);

  React.useEffect(() => {
    let suspects = data.data.reduce((acc, suspect) => {
      return acc + suspect.suspects;
    }, 0);

    setSuspect(suspects);
  }, []);

  return (
    <DivAnim>
      <h2 style={{ color: "white" }}>Status Geral No Brasil</h2>
      <DivElement>
        <div>
          <p>
            <ImCheckboxChecked style={{ color: "green", fontSize: "1rem" }} />{" "}
            Confirmados: {totalConfirmed.toLocaleString()}
          </p>
        </div>
        <div>
          <p>
            <AiFillWarning style={{ color: "yellow", fontSize: "1.2rem" }} />
            Suspeitos: {suspect.toLocaleString()}
          </p>
        </div>
        <p className="after">
          <FaSkullCrossbones style={{ color: "red" }} /> Total de Mortes:{" "}
          {totalDeaths.toLocaleString()}
        </p>
      </DivElement>
    </DivAnim>
  );
};

export default Brazil;
