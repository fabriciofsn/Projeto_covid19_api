import React from "react";
import styled, { keyframes } from "styled-components";
import { BsFlagFill } from "react-icons/bs";
import { GiMedicalPack, GiDeathSkull } from "react-icons/gi";
import { AiFillEye } from "react-icons/ai";
import { FiRefreshCcw } from "react-icons/fi";

const animationinfos = keyframes`
  from{
    opacity: 0;
    transform: translate3d(0, -30px, 0);
  }
  to{
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const ShowInfos = styled.div`
  animation: ${animationinfos} 0.3s ease-in;
  border: 1px solid #0b0b0c;
  background-color: #1a1a1d;
  width: 100%;
  max-width: 500px;
  padding: 1rem;
  border-radius: 4px;
  transition: 0.5s;
  &:hover {
    border: 1px solid #0d6efd;
    transition: 1s;
  }
`;

const Pafter = styled.p`
  &::after {
    content: "";
    display: block;
    width: 100%;
    border: 1px solid #0d6efd;
    margin-top: 15px;
  }
`;

const ShowDetails = ({ response }) => {
  const { select, state } = response;

  const converteTime = (time) => {
    const dateTimeIso = time;
    const dateTime = new Date(dateTimeIso);
    const localTime = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return dateTime.toLocaleString("pt-BR", { timeZone: localTime });
  };

  return (
    <div>
      {state.data.map(({ uf, state, cases, deaths, suspects, datetime }) => {
        if (select === uf) {
          return (
            <ShowInfos key={uf}>
              <p>
                {<BsFlagFill style={{ color: "#0d6efd" }} />} Estado: {state} (
                {uf})
              </p>
              <p>
                {<GiMedicalPack style={{ color: "#0d6efd" }} />}Total de Casos:{" "}
                {cases.toLocaleString()}
              </p>
              <p>
                {" "}
                {<GiDeathSkull style={{ color: "red" }} />} Total de Mortes:{" "}
                {deaths.toLocaleString()}
              </p>
              <Pafter>
                {" "}
                {<AiFillEye style={{ color: "#0d6efd" }} />} Suspeitos:{" "}
                {suspects.toLocaleString()}
              </Pafter>
              <p>
                {" "}
                {<FiRefreshCcw style={{ color: "#0d6efd" }} />} Atualizado em:{" "}
                {converteTime(datetime)}{" "}
              </p>
            </ShowInfos>
          );
        }
      })}
    </div>
  );
};

export default ShowDetails;
