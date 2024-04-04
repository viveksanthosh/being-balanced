import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

const LoginPage = lazy(() => import("./pages/Login"));

function App() {
  return (
    <Routes>
      <Route path="/login" Component={LoginPage}></Route>
    </Routes>
  );
}

export default App;
