import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Journey from "./pages/Journey";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Education from "./pages/Education";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "education", Component: Education },
      { path: "skills", Component: Skills },
      { path: "projects", Component: Projects },
      { path: "journey", Component: Journey },
      { path: "services", Component: Services },
      { path: "contact", Component: Contact },
    ],
  },
]);
