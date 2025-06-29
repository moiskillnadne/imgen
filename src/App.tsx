import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { Route, Routes } from "react-router";
import { Background } from "./shared/Background";
import { Home } from "./pages/Home";
import { LoginPage } from "./pages/Login";
import { SignupPage } from "./pages/Signup";

const client = generateClient<Schema>();

function App() {
  
  return (
    <Routes>
      <Route element={<Background />}>
        <Route index path="/" element={<Home />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
      </Route>
    </Routes>
  )
}

export default App;
