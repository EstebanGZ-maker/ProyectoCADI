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
import Navbar from "./components/Navbar.jsx";
import ViewCreateOring from "./pages/ViewCreateOring.jsx";
import  ViewQueryOring  from "./pages/ViewQueryOring.jsx";



function App() {
 return (
  <AuthProvider>
  <QueryOringProvider>
  <BrowserRouter>
    <Navbar />
    <Routes>  
        <Route path="/" element= { < HomePage /> } /> 
        <Route path="/login" element={<LoginPage/>} /> 
        <Route path="/register" element={ <RegisterPage/> } />  
  
      <Route element = {< ProtectedRoute />} >
        <Route path="/queryOring/query" element={ < OringPage /> } /> 
        <Route path="/queryOring" element={ < CreateOringPage /> } />  
        <Route path="/viewCreateOring" element={ < ViewCreateOring /> } />
        <Route path="/viewQueryOring" element={ < ViewQueryOring /> } /> 

        <Route path="/profile" element={ < ProfilePage /> } /> 
      </Route>  
    
    </Routes>
  </BrowserRouter>
  </QueryOringProvider>
  </AuthProvider>  

 )
}

export default App 