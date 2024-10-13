import { useSelector } from "react-redux";
import { createBrowserRouter, Navigate, useNavigate } from "react-router-dom";
import Text from "../components/page/Text";
function AuthProtect({ children, path }) {
  const user = useSelector(selectUser);
  if (user.role == path.toUpperCase()) {
    return children;
  } else {
    return <Navigate to="/" replace />;
  }
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Text />,
  },
  {
    path: "/dashboard",
    element: <h1>hello word</h1>,
    children: [
      {
        path: "test",
        element: (
          <AuthProtect path="test">
            <h2>test</h2>
          </AuthProtect>
        ),
      },
    ],
  },
]);
