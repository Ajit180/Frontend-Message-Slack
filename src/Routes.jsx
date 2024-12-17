import { SignInContainer } from "@/components/organisms/Auth/SigninContainer";
import { SignupContainer } from "@/components/organisms/Auth/SignUpConatainer";
import { Auth } from "@/pages/Auth/Auth";
import { NotFound } from "@/pages/NotFound/NotFound";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./components/molecules/ProtectedRoutes/ProtectedRoutes";
import { Home } from "./pages/Home/Home";

export const AppRoutes=()=>{
    return(
        <Routes>
       <Route path='/auth/signup'element={<Auth><SignupContainer/></Auth>}/>
       <Route path='/auth/signin'element={<Auth><SignInContainer/></Auth>}/>
       <Route path='/home' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
       <Route path='/*' element ={<NotFound/>}/>
      </Routes>
    );
};