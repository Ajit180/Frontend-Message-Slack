import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {FaCheck} from 'react-icons/fa'
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { LucideLoader2, TriangleAlert } from "lucide-react";

import { useNavigate } from "react-router-dom";

export const SignupCard =({signupForm,
    setSignUpForm,
    validationError,
    onSignUpFormSubmit,
    error,
    isPending,
    isSuccess
})=>{
    const navigate = useNavigate();
   
    


    return(
        <Card className="w-full h-full">
               <CardHeader>
                <CardTitle>Sign Up</CardTitle>
                <CardDescription>Sign Up to access your account</CardDescription>
                {validationError && (
                    <div className="bg-destructive/15 p-4 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6">
                        <TriangleAlert className="size-5"/>
                        <p>{validationError.message}</p>
                    </div>
                )}

             {error && (
                    <div className="bg-destructive/15 p-4 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6">
                        <TriangleAlert className="size-5"/>
                        <p>{error.message}</p>
                    </div>
                )}

                {
                    isSuccess && (
                        <div>
                            <FaCheck className='size-5'/>
                            <p>Successfully Signed Up. Now you will redirected to the login page 
                                in few seconds.
                                <LucideLoader2 className="animate-spin ml-2"/>
                            </p>
                        </div>
                    )
                }

               </CardHeader>
               <CardContent>
                <form className="space-y-3" onSubmit={onSignUpFormSubmit}>
                    <Input
                        placeholder="Email"
                        required
                        onChange={(e)=>setSignUpForm({...signupForm,email:e.target.value})}
                        value={signupForm.email}
                        type="email"
                        disabled = {isPending}
                    />
                    <Input
                        placeholder="Password"
                        required
                        onChange={(e)=>setSignUpForm({...signupForm,password:e.target.value})}
                        value={signupForm.password}
                        type="password"
                        disabled = {isPending}
                    />

                     <Input
                        placeholder="Confirm Password"
                        required
                        onChange={(e)=>setSignUpForm({...signupForm,confirmPassword:e.target.value})}
                        value={signupForm.confirmPassword}
                        type="password"
                        disabled = {isPending}
                    />
                    <Input
                        placeholder="Your Username"
                        required
                        onChange={(e)=>setSignUpForm({...signupForm,username:e.target.value})}
                        value={signupForm.username}
                        type="text"
                        disabled = {isPending}
                    />
                    <Button
                        disabled={isPending}
                        size = "lg"
                        type="submit"
                        className="w-full"
                    >
                        Continue
                    </Button>
                    
                </form>
                <Separator className="my-5"/>
                <p className="text-s text-muted-foreground mt-4">
                    Already have an Account ? {' '}
                    <span 
                    className="text-sky-600
                     hover:underline cursor-pointer"
                     onClick={()=>navigate('/auth/signin')}
                     >
                    Sign in
                    </span>
                </p>
               </CardContent>
        </Card>
    );
};