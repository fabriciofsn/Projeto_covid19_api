import React from "react";
import styled, { keyframes } from "styled-components";
import { BsLinkedin, BsWhatsapp, BsGithub } from "react-icons/bs";
import { FaDev } from "react-icons/fa";

const animDiv = keyframes`
  from{
    transform: translate3d(-30px,0,0);
    opacity: 0;
  }
  to{
    transform: translate3d(0,0,0);
    opacity: 1;
  }
`;

const Dev = () => {
  return (
    <DivCenter>
      <div>
        <h2>Fabrício Souza</h2>
        <DivIcons>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/fabr%C3%ADcio-souza-fullstack/"
          >
            {
              <BsLinkedin
                style={{
                  color: "#0d6efd",
                  fontSize: "1.5rem",
                }}
              />
            }
          </a>
          <a target="_blank" href="https://wa.me/5579996557845?text=Ol%C3%A1+">
            {
              <BsWhatsapp
                style={{
                  color: "#0d6efd",
                  fontSize: "1.5rem",
                }}
              />
            }
          </a>
          <a target="_blank" href="fabriciosouza.vercel.app">
            {
              <FaDev
                style={{
                  color: "#0d6efd",
                  fontSize: "1.5rem",
                }}
              />
            }
          </a>
          <a target="_blank" href="https://github.com/fabriciofsn">
            {
              <BsGithub
                style={{
                  color: "#0d6efd",
                  fontSize: "1.5rem",
                }}
              />
            }
          </a>
        </DivIcons>
      </div>
    </DivCenter>
  );
};

const DivCenter = styled.div`
  animation: ${animDiv} 0.5s ease;
  width: 100%;
  max-width: 400px;
  background-color: #1a1a1d;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  margin: auto;

  h2 {
    color: white;
  }
`;

const DivIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 200px;
`;

export default Dev;
