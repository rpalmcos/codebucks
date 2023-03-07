import { Routes, Route } from "react-router-dom";
import TermsofUsePage from "./pages/TermsofUsePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import AboutPage from "./pages/AboutPage";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import styled from "styled-components";


function App() {
  return (
    <>
      <>
        <Navbar />
      </>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacypolicy" element={<PrivacyPolicyPage />} />
        <Route path="/termsofuse" element={<TermsofUsePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
