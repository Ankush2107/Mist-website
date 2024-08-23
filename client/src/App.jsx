import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout/>}>
          <Route index element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Route>
    )
  )

  return (
      <RouterProvider router={router} />
  )
}

export default App;
