import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { MdOutlineCoronavirus } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

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
    width: 100%;
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
    width: 100%;
    height: 0;
    text-align: center;
    right: 2px;
    overflow: hidden;
    transition: 0.3s;
    top: 0;
    z-index: 99;
    background-color: #1a1a1d;
    border-radius: 5px;

    .nav-link {
      line-height: 50px;
      padding: 1.5rem 0;
    }
  }
`;

const Header = () => {
  const [modal, setModal] = React.useState(false);
  const divLink = useRef();

  const openModal = () => {
    setModal(!modal);

    if (modal) {
      divLink.current.style.height = "100vh";
    } else {
      divLink.current.style.height = "0";
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
          <p className="p-link">
            <AiOutlineClose
              size={20}
              color="#0d6efd"
              cursor="pointer"
              onClick={openModal}
            />
          </p>
          <NavLink
            className="nav-link"
            style={{ margin: "0 5px", fontWeight: "600" }}
            to="/"
            end
          >
            Home
          </NavLink>
          <NavLink
            className="nav-link"
            to="search"
            style={{ margin: "0 5px", fontWeight: "600" }}
          >
            Pesquisa Detalhada
          </NavLink>
          <NavLink
            className="nav-link"
            to="noticias"
            style={{ margin: "0 5px", fontWeight: "600" }}
          >
            Notícias
          </NavLink>
          <NavLink
            className="nav-link"
            to="desenvolvedor"
            style={{ margin: "0 5px", fontWeight: "600" }}
          >
            Dev
          </NavLink>
        </DivLinks>
      </DivElement>
    </header>
  );
};

export default Header;
