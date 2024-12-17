import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { LucideLoader2, TriangleAlert } from "lucide-react";
import { useState } from "react"
import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const SignInCard=({signInForm,
    setSignInForm,
    onSignInFormSubmit,
    validationError,
    error,
    isSuccess,
    isPending
})=>{
     
    const navigate = useNavigate();

    

     return(
         <Card className='w-full h-full'>
             <CardHeader>
                <CardTitle>Sign In</CardTitle>
                <CardDescription>Sign in to access your account</CardDescription>
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
                            <p>Successfully Signed In. Now you will redirected to the login page 
                                in few seconds.
                                <LucideLoader2 className="animate-spin ml-2"/>
                            </p>
                        </div>
                    )
                }

               </CardHeader>
               <CardContent>
                   <form className='space-y-3' onSubmit={onSignInFormSubmit}>
                       <Input
                          disabled = {isPending}
                          placeholder="Email"
                          required
                          onChange={(e)=>setSignInForm({...signInForm,email:e.target.value})}
                          value={signInForm.email}
                          type="email"
                       />
                        <Input
                          disabled = {isPending}
                          placeholder="Password"
                          required
                          onChange={(e)=>setSignInForm({...signInForm,password:e.target.value})}
                          value={signInForm.password}
                          type="password"
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
                    Don't have an Account ? {' '}
                    <span 
                    className="text-sky-600 hover:underline cursor-pointer"
                    onClick={()=>navigate('/auth/signup')}
                     >
                     Sign Up
                     </span>
                </p>
               </CardContent>
         </Card>
     );
}