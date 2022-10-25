import { useContext } from "react";
import moment from "moment";
import styled from "styled-components";
import { Context } from "../App";
import { Theme } from "../utils/Theme";

const StyledArticle = styled.article`
  margin-bottom: 3rem;
  h2 {
    text-transform: capitalize;
    letter-spacing: 2px;
    font-size: 1.75rem;
    color: ${Theme.light.primaryColor};
  }
  h2[data-theme="dark"] {
    color: ${Theme.dark.primaryColor};
  }
  .post-info {
    margin-bottom: 0.75rem;
    font-style: italic;
    span {
      margin-right: 0.5rem;
    }
  }
  .post-info[data-theme="dark"] {
    color: ${Theme.dark.textColor};
  }
`;

const Article = ({ title, snippet, date, length }) => {
  const { theme } = useContext(Context);
  return (
    <StyledArticle>
      <h2 data-theme={theme}>{title}</h2>
      <div className="post-info" data-theme={theme}>
        <span>{moment(date).format("dddd Do, YYYY")}</span>
        <span>{length} min read</span>
      </div>
      <p>{snippet}</p>
    </StyledArticle>
  );
};

export default Article;
