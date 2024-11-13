import styled from "styled-components";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./page/home";
import { Password } from "./page/password";
import { ScreenLock } from "./page/screenLock";
import { PasswordContext } from "./context/context";

export const App = () => {
  return (
    <Router>
      <PasswordContext>
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/password" element={<Password />} />
            <Route path="/lock" element={<ScreenLock />} />
          </Routes>
        </Main>
      </PasswordContext>
    </Router>
  );
};

export const Main = styled.div`
  margin: 0;
  width: 100vw;
  height: 100vh;
  background-color: #58ccff;
`;
