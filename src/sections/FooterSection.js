import React from "react";
import styled from "styled-components";

const Section = styled.section`
  width: 100vw;
  height: 5vh;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  background-color: var(--darkGrey);
  overflow: hidden;
`;

const TextContainer = styled.a`
  width: 100%;
  height: 50vh;
  z-index: 1;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  color: var(--white);
  margin-left: 20px;
`;

const Text = styled.a`
  max-width: 37rem;
  color: white;
  margin-left: 15px;

  a {
    color: white;
    text-decoration: none;
  }
`;

const FooterSection = () => {
  return (
    <Section>
      <TextContainer>
        <Text>
          <a> © {new Date().getFullYear()} AuraAI</a>
        </Text>
        <Text>
          <li>
            <a href="/termsofuse">Terms of Use</a>
          </li>
        </Text>
        <Text>
          <li>
            <a href="/privacypolicy">Privacy Policy</a>
          </li>
        </Text>
      </TextContainer>
    </Section>
  );
};

export default FooterSection;