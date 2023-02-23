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
  const [info, setInfo] = React.useState([
    {
      label: "totalDeaths",
      prop: "deaths",
      total: 0,
      name: "Total de Mortes",
      icon: <FaSkullCrossbones style={{ color: "red" }} />,
    },
    {
      label: "totalConfirmed",
      prop: "cases",
      total: 0,
      name: "Confirmados",
      icon: <ImCheckboxChecked style={{ color: "green", fontSize: "1rem" }} />,
    },
    {
      label: "suspect",
      prop: "suspects",
      total: 0,
      name: "Suspeitos",
      icon: <AiFillWarning style={{ color: "yellow", fontSize: "1.2rem" }} />,
    },
  ]);

  function handleInfo(prop) {
    const infoTarget = data.data.reduce((acc, item) => {
      return acc + item[prop];
    }, 0);

    setInfo((prev) => {
      return prev.map((item) => {
        if (item.prop === prop) {
          return { ...item, total: infoTarget };
        }
        return item;
      });
    });
  }

  React.useEffect(() => {
    info.forEach((item) => {
      handleInfo(item.prop);
    });
  }, []);

  return (
    <DivAnim>
      <h2 style={{ color: "white" }}>Status Geral No Brasil</h2>
      <DivElement>
        {info.map((item) => (
          <div key={item.label}>
            <p>
              {item.icon} {item.name}: {item.total.toLocaleString()}
            </p>
          </div>
        ))}
      </DivElement>
    </DivAnim>
  );
};

export default Brazil;
