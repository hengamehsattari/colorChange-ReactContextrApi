import React from "react";
import { Theme } from "../Theme";
import { Context } from "../App";
import { useContext } from "react";
import moment from "moment";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin-bottom: 3rem;
  h2 {
    text-transform: capitalize;
    font-size: 2rem;
    color: ${Theme.light.primaryColor};
  }
  h2[data-theme="dark"] {
    color: ${Theme.dark.primaryColor};
  }
  .post-info {
    margin-bottom: 1rem;
    font-weight: bold;
    span {
      margin-right: 0.75rem;
    }
  }
  .post-info[data-theme="dark"] {
    color: ${Theme.dark.textColor};
  }
`;

const Article = ({ title, date, length, snippet }) => {
  const { theme } = useContext(Context);
  return (
    <StyledDiv>
      <h2 data-theme={theme}>*{title}*</h2>
      <div className="post-info" data-theme={theme}>
        <span>{moment(date).format("dddd Do, YYYY")}</span>
        <span>{length} min read</span>
      </div>
      <p>"{snippet}"</p>
    </StyledDiv>
  );
};

export default Article;
