import React from "react";
import styled from "styled-components";
import spin from "../assets/Eclipse-1s-200px.svg";
import useFetch from "../hooks/useFetch";

const News = () => {
  const [response, setResponse] = React.useState([]);
  const { request, isLoading } = useFetch(
    "https://newsapi.org/v2/everything?q=covid&apiKey=ec27a2025d6247cbbc9a229dc9b23a22&language=pt"
  );

  React.useEffect(() => {
    request().then(({ data }) => {
      setResponse(data);
    });
  }, []);

  const { articles } = response;

  return (
    <DivEl>
      <DivWrapper>
        {isLoading && <img src={spin} alt="loader" />}
        {articles &&
          articles.map((article, index) => {
            if (article.source.name === "Observador.pt") {
              return (
                <div key={index}>
                  <h1>{article.title}</h1>
                  <p>{article.description}</p>
                  <img className="img" src={article.urlToImage} alt="imagem" />
                  <p>{article.content}</p>
                  <p>
                    Link para matéria completa:
                    <a
                      target="_blank"
                      style={{ color: "#0d6efd" }}
                      href={article.url}
                      rel="noreferrer"
                    >
                      {" "}
                      Matéria Completa
                    </a>
                  </p>
                </div>
              );
            } else {
              return null;
            }
          })}
        {articles &&
          articles.map((article, index) => {
            if (article.source.name == "Olhardigital.com.br") {
              return (
                <DivWrapper key={index}>
                  <h1>{article.title}</h1>
                  <p>{article.description}</p>
                  <img
                    className="img"
                    style={{ maxWidth: "800px" }}
                    src={article.urlToImage}
                    alt="imagem"
                  />
                  <p>{article.content}</p>
                  <p>
                    Link para matéria completa:
                    <a
                      target="_blank"
                      style={{ color: "#0d6efd" }}
                      href={article.url}
                      rel="noreferrer"
                    >
                      {" "}
                      Matéria Completa
                    </a>
                  </p>
                </DivWrapper>
              );
            }
          })}
      </DivWrapper>
    </DivEl>
  );
};

const DivEl = styled.div`
  background-color: #1a1a1d;
  padding: 1rem;
  margin: 7rem 0;
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  border-radius: 4px;
`;

const DivWrapper = styled.div`
  width: 100%;
  max-width: 700px;
  text-align: center;
  margin: 7rem 0;

  @media (max-width: 900px) {
    .img {
      width: 100%;
    }
  }
`;

export default News;
