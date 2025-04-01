import { useRoutes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Destination from "./components/destination/Destination";
import Asien from "./components/asien/Asien";
import Maafushi from "./components/maafushi/Maafushi";

function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/About", element: <About /> },
    { path: "/Destination", element: <Destination /> },
    { path: "/Asien", element: <Asien /> },
    { path: "/Maafushi", element: <Maafushi /> },
  ]);
  return (
    <div>
      <Navigation />
      <div>{routes}</div>
      <Footer />
    </div>
  );
}

export default App;
