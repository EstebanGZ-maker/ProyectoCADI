import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext.jsx";

//import pages
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx"; 
import OringPage  from "./pages/OringPage.jsx";
import CreateOringPage from "./pages/CreateOringPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";

import ProtectedRoute from "./ProtectedRoute.jsx";
import { QueryOringProvider } from "./context/QueryContext.jsx";


function App() {
 return (
  <AuthProvider>
  <QueryOringProvider>
  <BrowserRouter>
    <Routes>  
        <Route path="/" element= { < HomePage /> } /> 
        <Route path="/login" element={<LoginPage/>} /> 
        <Route path="/register" element={ <RegisterPage/> } />  
  
      <Route element = {< ProtectedRoute />} >
        <Route path="/queryOring" element={ < OringPage /> } /> 
        <Route path="/add-oring" element={ < CreateOringPage /> } />  
        <Route path="/profile" element={ < ProfilePage /> } /> 
      </Route>  
    
{/* Recuerda que en este momento (24/09) esta definido el formulario de crear orings en la pagina de 
oringPage, debes pasarlo a la dirección de /add-oring CreateOringPage
*/}
    </Routes>
  </BrowserRouter>
  </QueryOringProvider>
  </AuthProvider>  

 )
}

export default App 