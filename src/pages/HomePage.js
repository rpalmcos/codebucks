import { GlobalStyle } from "../styles/GlobalStyle";
import IntroSection from "../sections/IntroSection";
import HeroSection from "../sections/HeroSection";
import DesignSection from "../sections/DesignSection";
import BottomSection from "../sections/BottomSection";
import FooterSection from "../sections/FooterSection";

function HomePage() {
  return (
    <>
      <GlobalStyle />
      <IntroSection />
      <HeroSection />
      <DesignSection />
      <BottomSection />
      <FooterSection />
    </>
  );
}

export default HomePage;
