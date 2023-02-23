import React from "react";
import styled from "styled-components";
import ShowDetails from "../Components/ShowDetails";
import spin from "../assets/Eclipse-1s-200px.svg";
import useFetch from "../hooks/useFetch";

const Search = () => {
  const [select, setSelect] = React.useState("");
  const [state, setState] = React.useState("");
  const { request, isLoading } = useFetch(
    "https://covid19-brazil-api.now.sh/api/report/v1"
  );

  React.useEffect(() => {
    request().then(({ data }) => {
      setState(data);
    });
  }, []);

  const handleChange = ({ target }) => {
    setSelect(target.value);
  };

  return (
    <ElementCenter>
      <div>
        <FormElement>
          <DivElement>
            {isLoading && (
              <img src={spin} alt="loading" style={{ position: "absolute" }} />
            )}
            <H2Element>Pesquisa Detalhada Por Estado</H2Element>
            <SelectElement value={select} onChange={handleChange}>
              <option disabled value="" defaultValue>
                Selecione
              </option>
              {state &&
                state.data.map(({ uf }) => {
                  return (
                    <option key={uf} value={uf}>
                      {uf}
                    </option>
                  );
                })}
            </SelectElement>
          </DivElement>
        </FormElement>
        {state && <ShowDetails response={{ state, select }} />}
      </div>
    </ElementCenter>
  );
};

export default Search;

const FormElement = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
`;

const H2Element = styled.h2`
  color: white;
`;

const SelectElement = styled.select`
  width: auto;
  height: 30px;
  font-weight: bold;
  margin: 10px 0;
`;

const DivElement = styled.div`
  border: 1px solid #0b0b0c;
  background-color: #1a1a1d;
  width: 100%;
  max-width: 500px;
  padding: 1rem;
  border-radius: 4px;
  &:hover {
    border: 1px solid #0d6efd;
    transition: 1s;
  }
`;

const ElementCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
