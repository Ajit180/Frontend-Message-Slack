import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useDeleteworkspace } from "@/hooks/apis/workspaces/usedeleteWorkspace";
import { useWorkPreferenceModal } from "@/hooks/context/useWorkPreferenceModal";
import { useToast } from "@/hooks/use-toast";
import { TrashIcon } from "lucide-react";
import { useEffect, useState } from "react";


export const WorkSpacePreferenceModals =()=>{

    const { openPreference,setOpenPreference,intialValue ,workspace}=useWorkPreferenceModal();

    const [workspaceId,setWorkspaceId] =useState(null);

    const {deleteWorkspaceMutation}=useDeleteworkspace(workspaceId);

    const {toast}=useToast();

    // doubt on the how the openPreference and setOpenPreference useState works

    // once the closed is done then we can't again click on the workspace drapbutton 

    function handleClose(){
        setOpenPreference(false)
    };

    useEffect(()=>{
            setWorkspaceId(workspace?._id);
    },workspace);

    //doubt: about the what role of the useeffect in the workspace setting how it's work and 
    //how it render when component is mount


    async function handleDelete(){
        try {
            await deleteWorkspaceMutation();
            toast({
                title:'Workspace deleted Successfully',
                type:'success'
            });
            
        } catch (error) {
            console.log('Error in deleting workspace',error);
            toast({
                title:'Error in Deleting the Workspace',
                type:'Error'
            });
            
        }
    }

    return(
         <Dialog open={openPreference} onOpenChange={handleClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {intialValue}
                    </DialogTitle>
                </DialogHeader>
                <div className="px-4 pb-4 flex flex-col gap-y-2">
                    <div  className="px-5 py-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-50">
                        <div className="font-semibold text-sm">
                            <p 
                              className="font-semibold text-sm"
                            >Workspace Name</p>
                            <p className="text-sm font-semibold hover:underline">Edit</p>

                        </div>
                        <p className="text-sm">{intialValue}</p>
                    </div>

                    <button
                        className='flex items-center gap-x-2 px-5 py-4 bg-white
                         rounded-lg border cursor-pointer hover:bg-gray-50'
                         onClick={handleDelete}
                    >
                        <TrashIcon className="size-5"/>
                        <p
                          className='text-sm font-semibold'
                        >Delete Workspace</p>
                    </button>
                </div>
            </DialogContent>
         </Dialog>
    );
}