import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React from "react";
import { useRef } from "react";
import { useLayoutEffect } from "react";
import styled from "styled-components";
import logo from "../assets/logo/logo.png";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10%;
`;

const Line = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  a {
    padding-left: 5px;
  }
`;

const TextContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: var(--dark);
  color: var(--white);
`;

const Text = styled.a`
  max-width: 37rem;
  color: black;
`;

const H4 = styled.p`
  font-size: 1.5rem;
  color: var(--red);
  margin-bottom: 1rem;
`;

const H1 = styled.p`
  font-size: 4rem;
  margin-bottom: 1rem;
  line-height: 4rem;
`;

const P = styled.p`
  margin-bottom: 4rem;
`;

export default function IntroSection() {
  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    let Elem = sectionRef.current;

    let trigger = ScrollTrigger.create({
      trigger: Elem,
      start: "top top",
      pin: true,
      pinSpacing: false,
    });

    return () => {
      if (trigger) trigger.kill();
    };
  }, []);

  return (
    <Section>
      <Home ref={sectionRef}>
        <Text>Intro</Text>
      </Home>
    </Section>
  );
}
