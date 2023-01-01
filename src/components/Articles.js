import React from "react";
import data from "../data";
import Article from "./Article";
import styled from "styled-components";

const StyledDiv = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const Articles = () => {
  return (
    <StyledDiv>
      {data.map((item) => (
        <Article key={item.id} {...item} />
      ))}
    </StyledDiv>
  );
};

export default Articles;
