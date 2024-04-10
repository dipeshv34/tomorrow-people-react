import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainRouter from "./main-router";

export const router = createBrowserRouter([{ path: '/*', element: <MainRouter /> }])


export default function App() {

  return (
    <RouterProvider router={router} />
  );
}