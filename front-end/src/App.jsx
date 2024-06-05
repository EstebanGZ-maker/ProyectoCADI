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
import ViewQueryOring  from "./pages/ViewQueryOring.jsx";
import PdfPage from "./pages/PdfPage.jsx";
import ProductsHome from "./pages/ProductsHome.jsx";
import CreateArandelasPage from "./pages/CreateArandelasPage.jsx";
import ArandelasPage from "./pages/ArandelasPage.jsx";



function App() {
 return (
  <AuthProvider>
  <QueryOringProvider>
  <BrowserRouter>
    <Navbar />
    <Routes>  
        <Route path="/" element= { < HomePage /> } /> 
        <Route path="/login" element={<LoginPage/>} /> 
  
      <Route element = {< ProtectedRoute />} >
        <Route path="/register" element={ <RegisterPage/> } />  
        <Route path="/queryOring" element={ < CreateOringPage /> } />  
        <Route path="/queryOring/query" element={ < OringPage /> } /> 
        <Route path="/createArandelas" element={ < CreateArandelasPage /> } />
        <Route path="/arandelasPage" element={ < ArandelasPage /> } />
        <Route path="/pdfPage" element={ < PdfPage /> } />
        <Route path="/productsHome" element={ < ProductsHome /> } />
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