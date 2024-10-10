import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { FC } from "react";
import { ChangeLogPage, FormPage } from "./pages";

const Home: FC = () => (
  <>
    <h1>Vite + React</h1>
    <nav>
      <ul>
        <li>
          <a href="/changelog">Changelog Component</a>
        </li>
        <li>
          <a href="/form">Form Component</a>
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
  {
    path: "/form",
    element: <FormPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
