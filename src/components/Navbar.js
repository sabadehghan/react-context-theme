import { useContext } from "react";
import { Context } from "../App";
import styled from "styled-components";
import { Theme } from "../utils/Theme";

const StyledNav = styled.nav`
  div {
    width: 90vw;
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      font-size: 2.5rem;
      text-transform: capitalize;
      letter-spacing: 2px;
    }
    button {
      background: ${Theme.light.primaryColor};
      color: white;
      padding: 0.25rem 0.5rem;
      border-radius: 5px;
      border-color: transparent;
      text-transform: capitalize;
      transition: all 0.3s linear;
      font-weight: bold;
      letter-spacing: 2px;
      cursor: pointer;
    }
    button[data-theme="dark"] {
      background: ${Theme.dark.primaryColor};
    }
  }
`;
export default function Navbar() {
  const { theme, toggleTheme } = useContext(Context);
  return (
    <StyledNav>
      <div>
        <h1>Blog Posts</h1>
        <button data-theme={theme} onClick={toggleTheme}>
          toggle
        </button>
      </div>
    </StyledNav>
  );
}
