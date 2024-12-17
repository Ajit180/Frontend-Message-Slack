import { useSignIn } from "@/hooks/apis/auth/useSignin";
import { SignInCard } from "./SignInCard";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignInContainer=()=>{

     const navigate = useNavigate();

    const [signInForm , setSignInForm]=useState({
        
        email:'',
        password:''
     })

     const {isSuccess,isPending,error,signInMutation}= useSignIn();

     const [validationError,setValidationError]= useState(null);

     const onSignInFormSubmit = async(e)=>{
        e.preventDefault();
        if (!signInForm.email||!signInForm.password) {
            console.log('Please fill all the fields');
            return;
        }

        setValidationError(null);

        await signInMutation({
            email:signInForm.email,
            password:signInForm.password
        })
     }

     useEffect(() => {
        if(isSuccess) {
            setTimeout(() => {
                navigate('/home');
            }, 3000);
        }
            
    }, [isSuccess, navigate]);

    return(
           <SignInCard 
              signInForm={signInForm}
              setSignInForm={setSignInForm}
              setValidationError={setValidationError}
              onSignInFormSubmit={onSignInFormSubmit}
              validationError={validationError}
              isPending={isPending}
              isSuccess={isSuccess}
              error={error}
           />
    );
}