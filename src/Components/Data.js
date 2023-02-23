import React from "react";
import styled from "styled-components";
import Brazil from "./Brazil";
import Status from "./Status";
import spin from "../assets/Eclipse-1s-200px.svg";
import UseLoading from "./UseLoading";

const SectionElement = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1000px;
  padding: 1rem;
  margin: auto;

  @media (max-width: 738px) {
    flex-direction: column;
    align-items: center;
  }
`;

const DivLoader = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Data = () => {
  const [response, setResponse] = React.useState();
  const [isLoading, startLoading, stopLoading] = UseLoading();

  React.useEffect(() => {
    startLoading();
    const dataCovidRealTime = async () => {
      const dataCovid = await fetch(
        `https://covid19-brazil-api.now.sh/api/report/v1`
      );
      const responseCovid = await dataCovid.json();
      setResponse(responseCovid);
      stopLoading();
    };
    dataCovidRealTime();
  }, []);

  return (
    <SectionElement>
      {isLoading && (
        <DivLoader>
          <img src={spin} alt="loader" />
        </DivLoader>
      )}
      {response && <Status data={response} />}
      {response && <Brazil data={response} />}
    </SectionElement>
  );
};

export default Data;
