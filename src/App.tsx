import styled from "@emotion/styled";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "@/pages/Home";
import Quiz from "@/pages/Quiz";

const Layout = styled.section`
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  padding: 10px;
`;

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
