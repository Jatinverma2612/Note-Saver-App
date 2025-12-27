import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout";
import Paste from "./Components/Paste";
import ViewPaste from "./Components/ViewPaste";
import AIStory from "./Components/AIStory";
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
