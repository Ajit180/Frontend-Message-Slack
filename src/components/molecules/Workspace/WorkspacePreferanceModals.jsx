import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useDeleteworkspace } from "@/hooks/apis/workspaces/usedeleteWorkspace";
import { useUpdateWorkspace } from "@/hooks/apis/workspaces/useUpdateWorkspace";
import { useWorkPreferenceModal } from "@/hooks/context/useWorkPreferenceModal";
import { useToast } from "@/hooks/use-toast";
import { useConfirm } from "@/hooks/useConfirm";
import { useQueryClient } from "@tanstack/react-query";
import { TrashIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export const WorkSpacePreferenceModals =()=>{

    const { openPreference,setOpenPreference,intialValue ,workspace}=useWorkPreferenceModal();

    const [workspaceId,setWorkspaceId] =useState(null);

    const[editOpen,setEditOpen] = useState(false);

    const {deleteWorkspaceMutation}=useDeleteworkspace(workspaceId);

    const{isPending,updateWorkspaceMutation}=useUpdateWorkspace(workspaceId);

    const [renameValue,setrenameValue]=useState(workspace?.name);

    const {toast}=useToast();

    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const {confirmation,ConfirmDialog}=useConfirm({title:'Do You Want to delete the workspace?'
        ,message:'This action cannot be undone'});
    
    const {confirmation:updateConfirm,ConfirmDialog:UpdateDialog}=useConfirm({title: 'Do you want to update the workspace?',
         message: 'This action cannot be undone.'});    


    // doubt on the how the openPreference and setOpenPreference useState works

    // once the closed is done then we can't again click on the workspace drapbutton 

    function handleClose(){
        setOpenPreference(false)
    };

    useEffect(()=>{
            setWorkspaceId(workspace?._id);
            setrenameValue(workspace?.name);
    },[workspace]);


    //doubt: about the what role of the useeffect in the workspace setting how it's work and 
    //how it render when component is mount


    async function handleDelete(){
        try {
            const ok = await confirmation();
            console.log('Confrimation received');
            if(!ok){
                return;
            }
            await deleteWorkspaceMutation();
             navigate('/home');
             queryClient.invalidateQueries('fetchWorkspaces');
             setOpenPreference(false);
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


    async function handleformSubmit(e){
       e.preventDefalut();
       try {
        const ok = await updateConfirm();
            console.log('Confimation received');
            if(!ok) {
                return;
            }
        await updateWorkspaceMutation(renameValue);
        queryClient.invalidateQueries(`getWorkspaceById ${workspace?._id}`);
        setOpenPreference(false);
        toast({
            title:'Workspace updated Successfully',
            type:'success'
        });

        
       } catch (error) {
        
        console.log('Error in updating workspace',error);
        toast({
            title:'Error in Updating the Workspace',
            type:'error'
        });
        
       }
    }

    return(
        <>
        <ConfirmDialog/>
        <UpdateDialog/>
         <Dialog open={openPreference} onOpenChange={handleClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {intialValue}
                    </DialogTitle>
                </DialogHeader>
                <div className="px-4 pb-4 flex flex-col gap-y-2">
                   <Dialog open={editOpen}onOpenChange={setEditOpen}>
                    <DialogTrigger>
                    <div  className="px-5 py-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-50">
                        <div className="flex items-center justify-between">
                            <p 
                              className="font-semibold text-sm"
                            >Workspace Name</p>
                            <p className="text-sm font-semibold hover:underline">
                            Edit
                            </p>

                        </div>
                        <p className="text-sm">{intialValue}</p>
                    </div>

                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>
                                Rename Workspace
                            </DialogTitle>
                        </DialogHeader>
                        <form className="space-y-4"onSubmit={handleformSubmit}>
                            <Input
                             value={renameValue}
                             onChange={(e)=>setrenameValue(e.target.value)}
                             requried
                             autoFocus
                             minLength={3}
                             maxLength ={50}
                             disabled ={isPending}
                             placeholder ='Workspace Name e.g Design Team'
                            />

                            <DialogFooter>
                                <DialogClose>
                                    <Button
                                      variant="outline"
                                      disabled={isPending}
                                     
                                    >
                                     Cancel
                                    </Button>
                                </DialogClose>
                                <DialogClose>
                                    <Button
                                      type="submit"
                                      disabled={isPending}
                                     
                                    >
                                     Save
                                    </Button>
                                </DialogClose>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                   </Dialog>
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

         </>
    );
}