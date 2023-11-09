import { Provider } from "react-redux";
import LandingPage from "./pages/LandingPage";
import Store from "./redux/Store";
function App() {
  return (
    <Provider store={Store}>

        <LandingPage />

    </Provider>
  );
}

export default App;
