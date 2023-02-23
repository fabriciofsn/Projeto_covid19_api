import React, { useRef } from "react";
import styled from "styled-components";
import { MdOutlineCoronavirus } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const H1 = styled.h1`
  color: white;
  font-size: 1.5em;
  &:hover {
    color: #008000;
    cursor: default;
    transition: 0.3s;
  }
`;

const DivElement = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  margin: auto;

  .btn {
    display: none;
  }

  @media (max-width: 690px) {
    .btn {
      display: initial;
    }
  }
`;

const DivTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DivLinks = styled.div`
  display: flex;

  @media (max-width: 690px) {
    flex-direction: column;
    position: fixed;
    right: -150px;
    overflow: hidden;
    transition: 0.3s;
    top: 5rem;
    z-index: 99;
    background-color: #1a1a1d;
    border-radius: 5px;

    .nav-link {
      line-height: 50px;
    }
  }
`;

const Header = () => {
  const [modal, setModal] = React.useState(false);
  const divLink = useRef();

  const openModal = () => {
    setModal(!modal);

    if (modal) {
      divLink.current.style.right = "0";
    } else {
      divLink.current.style.right = "-150px";
    }
  };

  return (
    <header>
      <DivElement>
        <DivTitle>
          <H1>COVID 19 | ATUALIZAÇÕES</H1>
          <MdOutlineCoronavirus style={{ color: "green", fontSize: "2rem" }} />
        </DivTitle>
        <FiMenu
          onClick={openModal}
          className="btn"
          style={{ fontSize: "2rem", color: "#0d6efd", cursor: "pointer" }}
        />

        <DivLinks ref={divLink} onClick={openModal}>
          <NavLink
            className="nav-link"
            style={{ margin: "0 5px", fontWeight: "600" }}
            to="/"
            activeStyle={{ color: "#0d6efd" }}
            end
          >
            Home
          </NavLink>
          <NavLink
            className="nav-link"
            to="search"
            style={{ margin: "0 5px", fontWeight: "600" }}
            activeStyle={{ color: "#0d6efd" }}
          >
            Pesquisa Detalhada
          </NavLink>
          <NavLink
            className="nav-link"
            to="noticias"
            style={{ margin: "0 5px", fontWeight: "600" }}
            activeStyle={{ color: "#0d6efd" }}
          >
            Notícias
          </NavLink>
          <NavLink
            className="nav-link"
            to="desenvolvedor"
            style={{ margin: "0 5px", fontWeight: "600" }}
            activeStyle={{ color: "#0d6efd" }}
          >
            Dev
          </NavLink>
        </DivLinks>
      </DivElement>
    </header>
  );
};

export default Header;
