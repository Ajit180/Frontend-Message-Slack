import { useMutation } from "@tanstack/react-query";
import { signUpRequest } from "@/apis/auth";
import { useToast } from "@/hooks/use-toast";



export const useSignUp=()=>{

    const { toast } = useToast();
    const {isPending,isSuccess,error,mutateAsync:signupMutation}=useMutation({
        mutationFn:signUpRequest,
        onSuccess:(data)=>{
            console.log('Successfully Sign Up',data);
            
            toast({
                title:'Successfully Sign Up',
                message:'You will be redirected to login page within few seconds',
                type: 'Success'

            })
            
        },
        onError:(error)=>{
            console.log('Failed to Sign Up',error);
            toast({
                title:'Failed to Sign Up',
                message:error.message,
                type:'error',
                variant: 'destructive'
            })
        }
    });

    return{
        isPending,
        isSuccess,
        error,
        signupMutation
    };
}