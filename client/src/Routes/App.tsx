import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root.tsx";
import Home from "../pages/Home/Home.tsx";

const App = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default App;
