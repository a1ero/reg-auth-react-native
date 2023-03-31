import React from "react";
import { AuthProvider } from "./src/context/AuthContext";
import Navigation from "./src/components/Navigation";


const App = () => {
    return (
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    )
};

export default App;