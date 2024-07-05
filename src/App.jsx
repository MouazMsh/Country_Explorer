import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CountryListing from "./Pages/CountryListing";
import CountryDetail from "./Pages/CountryDetail";

const router = createBrowserRouter(
  [
    { path: "/", element: <CountryListing /> },
    { path: "/:countryName", element: <CountryDetail /> },
  ],
  { basename: import.meta.env.BASE_URL }
);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
