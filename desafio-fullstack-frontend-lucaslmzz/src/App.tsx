import AuthProvider from "./Providers/AuthContext";
import AuthProviderTech from "./Providers/AuthContextContact";
import RoutesMain from "./routes";
import Global from "./styles/global";

function App() {
  return (
    <div className="App">
      <Global />
      <AuthProvider>
        <AuthProviderTech>
          <RoutesMain />
        </AuthProviderTech>
      </AuthProvider>
    </div>
  );
}

export default App;
