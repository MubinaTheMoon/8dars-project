import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import MainLayouts from "./layouts/MainLayouts";
import { Create, Home, Login, Register } from "./pages";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { useSelector } from "react-redux";

function App() {
  const { user } = useSelector((store) => store.user);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayouts />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/create",
          element: <Create />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to={"/"} /> : <Login />,
    },
    {
      path: "/register",
      element: user ? <Navigate to={"/"} /> : <Register />,
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
