import Main from "./main";
import { useNavigate } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <ClerkProvider
        routerPush={(to) => navigate(to)}
        routerReplace={(to) => navigate(to, { replace: true })}
        publishableKey="pk_test_dm9jYWwtZXdlLTU5LmNsZXJrLmFjY291bnRzLmRldiQ"
      >
        <Main />
      </ClerkProvider>
    </>
  );
}

export default App;
