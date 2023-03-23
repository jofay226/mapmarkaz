import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Main from "./pages/Main/Main";
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
      {
        path: '/',
        element: <HomePage/> 
      },
      {
        path: 'about',
        element: <AboutPage/>
      },
      {
        path: 'contact',
        // element: <ContactPage/>
      }
    ]
  },
]);

function App() {
  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
