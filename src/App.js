import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";
import Api from "./pages/ApiDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/contact_us", element: <ContactPage /> },
      { path: "/api", element: <Api /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
