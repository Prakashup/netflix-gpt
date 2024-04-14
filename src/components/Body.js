import appRouter from "../appRouter";
import Login from "./Login";
import { RouterProvider } from "react-router-dom";

const Body = () => {

  return (
    <RouterProvider router={appRouter}>
      <Login />
    </RouterProvider>
  );
};

export default Body;
