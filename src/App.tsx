import { Route, Routes } from "react-router";
import { Background } from "./shared/Background";
import { Home } from "./pages/Home";
import { LoginPage } from "./pages/Login";
import { SignupPage } from "./pages/Signup";
import { ProfilePage } from "./pages/Profile";
import { Authenticator } from "@aws-amplify/ui-react";
import { ProtectedRoute } from "./shared/ProtectedRoute";
import { GenerationPage } from "./pages/Generation/index.tsx";


function App() {
  
  return (
    <Authenticator.Provider>
      <Routes>
        <Route element={<Background />}>
          <Route index element={<Home />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />


            <Route element={<ProtectedRoute />}>
              <Route index path="profile" element={<ProfilePage />} />
              <Route path="generation" element={<GenerationPage />} />
            </Route>
        </Route>
      </Routes>
    </Authenticator.Provider>
  )
}

export default App;
