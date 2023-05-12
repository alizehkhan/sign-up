import React, { useState } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { AuthContext } from "./context/AuthContext";
import { Privacy } from "./pages/privacy";
import { ResendConfirmationEmail } from "./pages/resend-confirmation-email";
import { SignIn } from "./pages/sign-in";
import { SignUp } from "./pages/sign-up";
import { SignUpSuccess } from "./pages/sign-up-success";
import { Terms } from "./pages/terms";

const router = createBrowserRouter([
  {
    path: "/sign-up",
    children: [
      {
        path: "",
        element: <SignUp />,
      },
      {
        path: "success",
        element: <SignUpSuccess />,
      },
      {
        path: "resend-confirmation-email",
        element: <ResendConfirmationEmail />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/privacy",
    element: <Privacy />,
  },
  {
    path: "/terms",
    element: <Terms />,
  },
  {
    path: "*",
    element: <Navigate to="/sign-up" replace />,
  },
]);

export function App() {
  const [user, setUser] = useState<string | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
}
