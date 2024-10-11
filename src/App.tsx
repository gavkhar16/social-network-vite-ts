import { LoginPage } from "./pages/LoginPage/LoginPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";


const router = createBrowserRouter([
  {
    path:"/login-page",
    element:<LoginPage/>
  },
  {
    path:"/main-page",
    element:<MainPage/>
  },
  {
    path:"/profile-page",
    element:<ProfilePage/>
  }
])
function App() {
  return (
    <>
      <div className="App">
        <RouterProvider router={router}/>
      </div>
    </>
  );
}

export default App;
