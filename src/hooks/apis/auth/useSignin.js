import { useMutation } from "@tanstack/react-query";
import { signInRequest } from "@/apis/auth";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/context/useAuth";



export const useSignIn=()=>{

    const { toast } = useToast();
    const {setAuth}=useAuth();
    const {isPending,isSuccess,error,mutateAsync:signInMutation}=useMutation({
        mutationFn:signInRequest,
        onSuccess:(response)=>{
            console.log('Successfully Sign In',response);
             
            
            const userObject = JSON.stringify(response.data);

            localStorage.setItem('user',userObject);
            localStorage.setItem('token',response.data.token)

            setAuth({
                token:response.data.token,
                user:response.data,
                isLoading:false
            })

            toast({
                title:'Successfully Sign In',
                message:'You will be redirected to Home page within few seconds',
                type: 'Success'

            })
            
        },
        onError:(error)=>{
            console.log('Failed to Sign In',error);
            toast({
                title:'Failed to Sign In',
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
        signInMutation
    };
}