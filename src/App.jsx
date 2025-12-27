import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout";
import Paste from "./components/Paste";
import ViewPaste from "./components/ViewPaste";
import AIStory from "./components/AIStory";
import Home from "./Components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home/>
      </Layout>
    ),
  },
  {
    path: "/notes",
    element: (
      <Layout>
        <Paste />
      </Layout>
    ),
  },
  {
    path: "/pastes/:id",
    element: (
      <Layout>
        <ViewPaste />
      </Layout>
    ),
  },
  {
    path: "/ai",
    element: (
      <Layout>
        <AIStory />
      </Layout>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
