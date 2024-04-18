import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext.jsx";

import LoginPage from "./pages/LoginPage.jsx"
import RegisterPage from "./pages/RegisterPage.jsx" 

function App() {
 return (

  <AuthProvider>

  <BrowserRouter>
    <Routes>  
        <Route path="/" element={ <h1>Home page</h1> } /> 
        <Route path="/login" element={<LoginPage/>} /> 
        <Route path="/register" element={ <RegisterPage/> } />  
        <Route path="/queryOring" element={ <h1>Oring page</h1> } /> 
        <Route path="/add-oring" element={ <h1>New Oring</h1> } /> 
        <Route path="/queryOring/:id" element={ <h1>Update Orings</h1> } /> 
        <Route path="/profile" element={ <h1>profile</h1> } /> 
    </Routes>
  </BrowserRouter>

  </AuthProvider>  

 )
}

export default App 