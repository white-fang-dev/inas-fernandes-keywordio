import "./App.css";
import RootLayout from "./layout/RootLayout";
import Dashboard from "./pages/Dashboard";
import CreateAds from "./pages/CreateAds";
import AdsForm from "./pages/AdsForm";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "/create-ads", element: <CreateAds /> },
      { path: "/:adsType", element: <AdsForm /> },
      { path: "/:adsType", element: <AdsForm /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
