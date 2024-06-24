import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext.jsx";

//import pages
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx"; 
import OringPage  from "./pages/OringPage.jsx";
import CreateOringPage from "./pages/CreateOringPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import CustomerQueryArandela from "./pages/CustomerQueryArandela.jsx";
import CustomerQueryOring from "./pages/CustomerQueryOring.jsx";
import CustomersHome from "./pages/CustomersHome.jsx";

import ProtectedRoute from "./ProtectedRoute.jsx";
import { QueryOringProvider } from "./context/QueryContext.jsx";
import { QueryArandelaProvider } from "./context/ArandelaContext.jsx";
import Navbar from "./components/Navbar.jsx";
import PdfPage from "./pages/PdfPage.jsx";
import ProductsHome from "./pages/ProductsHome.jsx";
import CreateArandelasPage from "./pages/CreateArandelasPage.jsx";
import ArandelasPage from "./pages/ArandelasPage.jsx";


function App() {
 return (
  <AuthProvider>
  <QueryOringProvider>
  <QueryArandelaProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>  
          <Route path="/" element= { < HomePage /> } /> 
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/customersHome" element={ <CustomersHome/>}/> 
          <Route path="/customerQueryArandela" element={ < CustomerQueryArandela />}/>
          <Route path="/customerQueryOring" element={ <CustomerQueryOring/>}/>  
    
        <Route element = {< ProtectedRoute />} >
          <Route path="/register" element={ <RegisterPage/> } />  
          <Route path="/queryOring/query" element={ < OringPage /> } /> 
          <Route path="/queryOring" element={ < CreateOringPage /> } />  
          <Route path="/queryArandela/query" element={ < ArandelasPage /> } />
          <Route path="/queryArandela" element={ < CreateArandelasPage /> } />
          <Route path="/productsHome" element={ < ProductsHome /> } />
          <Route path="/pdfPage" element={ < PdfPage /> } />

          <Route path="/profile" element={ < ProfilePage /> } /> 
        </Route>  
      
      </Routes>
    </BrowserRouter>
  </QueryArandelaProvider>
  </QueryOringProvider>
  </AuthProvider>  

 )
}

export default App 