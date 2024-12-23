import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useCreateWorkspace } from "@/hooks/apis/workspaces/useCreateWorkspace";
import { useCreateWorkspaceModals } from "@/hooks/context/useCreateWorkspaceModals";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const CreateWorkspaceModals =()=>{

    const navigate = useNavigate();

    const queryClient = useQueryClient();

    const {openCreateWorkSpaceModal,setOpenCreateWorkSpaceModal}=useCreateWorkspaceModals();

    const {isPending,createWorkspaceMutation}=useCreateWorkspace();

    const [workspaceName,setWorkspaceName]=useState('');

    
    function handleClose(){
        setOpenCreateWorkSpaceModal(false);
    }

    async function handleformSubmit(e){
        e.preventDefault();
        try {

           const data = await createWorkspaceMutation({name:workspaceName});
           console.log("Created the workspace",data);
            navigate(`/workspaces/${data._id}`);
            queryClient.invalidateQueries('fetchWorkspaces');
            
        } catch (error) {
            console.log('Not able to create a new workspace',error);
            
        }
        finally{
            setWorkspaceName('');
            setOpenCreateWorkSpaceModal(false);
        }
        
    }

    return(
        <Dialog
          open={openCreateWorkSpaceModal}
          onOpenChange={handleClose}

        >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create a New Workspace</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleformSubmit}>
                    <Input
                        required
                        disabled={isPending}
                        minLength ={3}
                        placeholder ="put the workspace name e.g MyWorkspace , Dev Workspace ,etc"
                        value={workspaceName}
                        onChange={(e)=>setWorkspaceName(e.target.value)}
                    />
                    <div className="flex justify-end mt-5">
                        <Button disabled={isPending}>Create Workspace</Button>
                    </div>
                </form>

            </DialogContent>

        </Dialog>
    );
}