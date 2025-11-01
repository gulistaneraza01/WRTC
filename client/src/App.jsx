import {
  createRoutesFromElements,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home, VideoCall } from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route index element={<Home />} />
      <Route path="/video-call" element={<VideoCall />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
