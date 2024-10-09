import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { FC } from "react";
import { ChangeLogPage } from "./pages/ChangeLogPage";

const Home: FC = () => (
  <>
    <h1>Vite + React</h1>
    <nav>
      <ul>
        <li>
          <a href="/changelog">Changelog Component</a>
        </li>
      </ul>
    </nav>
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/changelog",
    element: <ChangeLogPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
