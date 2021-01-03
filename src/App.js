import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import ScrollToTop from "./helpers/ScrollToTop";

function App() {
  return (
        <Router>
          <ScrollToTop />
          <Routes />
        </Router>
  );
}

export default App;
