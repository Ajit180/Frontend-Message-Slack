import { deleteWorkspaceRequest } from "@/apis/workspaces";
import { useAuth } from "@/hooks/context/useAuth"
import { useMutation } from "@tanstack/react-query";

export const useDeleteworkspace =(workspaceId)=>{
   const {auth}=useAuth();

   const{isPending,isSuccess,error,mutateAsync:deleteWorkspaceMutation}=useMutation({
    mutationFn:()=>deleteWorkspaceRequest({workspaceId,token:auth?.token}),
    onSuccess:()=>{
        console.log('Workspace deleted Successfully');    
    },
    onError:(error)=>{
        console.log('Error in deleting the Workspace');
        
    }
   });

   return{
    isPending,
    isSuccess,
    error,
    deleteWorkspaceMutation

   };
}