import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./pages/details";
import HomePage from "./pages/home";
import { Provider } from "react-redux";
import store from "./redux/store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:imdbID" element={<Details />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
