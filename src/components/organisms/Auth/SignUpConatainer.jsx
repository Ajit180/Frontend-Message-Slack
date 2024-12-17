import { useEffect, useState } from "react";
import { SignupCard } from "./SignUpCard";
import { useSignUp } from "@/hooks/apis/auth/useSignup";
import { useNavigate } from "react-router-dom";

export const SignupContainer =()=>{

    const navigate = useNavigate();

    const [signupForm,setSignUpForm]= useState({
        email:'',
        password:'',
        confirmPassword:'',
        username:''
    });
     const [validationError,setValidationError]= useState(null);

     const {isPending , isSuccess, error, signupMutation} = useSignUp();

    async function onSignUpFormSubmit(e){
        e.preventDefault();
        console.log('SignUp form Submited',signupForm);

        if(!signupForm.email || !signupForm.password || !signupForm.confirmPassword ||!signupForm.username){
            
            console.error('All fields are required');
            setValidationError({message:'All fields are required'});
            return;
        }
        if(signupForm.password!=signupForm.confirmPassword) {
            console.error('Passwords does not match')
            setValidationError({message:'Password does not match '})
            return;
        }

    

        setValidationError(null);
        await signupMutation({
            email:signupForm.email,
            password:signupForm.password,
            username:signupForm.username
            
        })

    }


        useEffect(() => {
        if(isSuccess) {
            setTimeout(() => {
                navigate('/auth/signin');
            }, 3000);
        }
            
    }, [isSuccess, navigate]);
        
    
    return(
        <SignupCard 
        error={error}
        isPending={isPending}
        isSuccess={isSuccess}
        signupForm={signupForm} 
        setSignUpForm={setSignUpForm} 
        validationError={validationError}
        onSignUpFormSubmit={onSignUpFormSubmit}
        />
    );
};