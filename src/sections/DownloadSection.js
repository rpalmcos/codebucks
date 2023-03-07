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

const DownloadSection = () => {
  return (
    <>
      <Section></Section>
    </>
  );
};
export default DownloadSection;
