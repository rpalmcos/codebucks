import React from "react";
import styled from "styled-components";

const Nav = styled.section`
  width: 100vw;
  height: 5vh;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Text = styled.a`
  max-width: 37rem;
  list-style: none;

  a {
    color: black;
    text-decoration: none;
    margin-right: 50px;
    font-size: 15px;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Text>
        <li>
          <a href="/about">About</a>
        </li>
      </Text>
      <Text>
        <li>
          <a href="/termsofuse">About</a>
        </li>
      </Text>
      <Text>
        <li>
          <a href="/termsofuse">About</a>
        </li>
      </Text>
    </Nav>
  );
};

export default Navbar;
