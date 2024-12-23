import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useWorkPreferenceModal } from "@/hooks/context/useWorkPreferenceModal";
import { TrashIcon } from "lucide-react";


export const WorkSpacePreferenceModals =()=>{

    const { openPreference,setOpenPreference,intialValue }=useWorkPreferenceModal();

    // doubt on the how the openPreference and setOpenPreference useState works

    // once the closed is done then we can't again click on the workspace drapbutton 

    function handleClose(){
        setOpenPreference(false)
    };

    return(
         <Dialog open={openPreference} onOpenChange={handleClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {intialValue}
                    </DialogTitle>
                </DialogHeader>
                <div className="px-4 pb-4 flex-col gap-y-2">
                    <div  className="px-5 py-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-50">
                        <div className="font-semibold text-sm">
                            <p 
                              className="font-semibold text-sm"
                            >Workspace Name</p>
                            <p className="text-sm font-semibold hover:underline">Edit</p>
                        </div>
                    </div>

                    <button
                        className='flex items-center gap-x-2 px-5 py-4 bg-white
                         rounded-lg border cursor-pointer hover:bg-gray-50'
                    >
                        <TrashIcon className="size-5"/>
                        <p>Delete Workspace</p>
                    </button>
                </div>
            </DialogContent>
         </Dialog>
    );
}