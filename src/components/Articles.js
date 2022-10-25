import data from "../utils/data";
import Article from "./Article";
import styled from "styled-components";

const StyledSection = styled.section`
  width: 90vw;
  max-width: 600px;
  margin: 0 auto;
`;
export default function Articles() {
  return (
    <StyledSection>
      {data.map((item) => {
        return <Article key={item.id} {...item} />;
      })}
    </StyledSection>
  );
}
