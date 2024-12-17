import { useAuth } from "@/hooks/context/useAuth"
import { DropdownMenu,DropdownMenuContent,DropdownMenuItem,DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { LogOutIcon, PencilIcon, SettingsIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useCreateWorkspaceModals } from "@/hooks/context/useCreateWorkspaceModals";

export const UserButton=()=>{
     
    const {auth,logout} = useAuth();
    const navigate = useNavigate();

    const {toast}= useToast();

    const{setOpenCreateWorkSpaceModal}=useCreateWorkspaceModals();

    function openWorkspaceModals(){
        setOpenCreateWorkSpaceModal(true); 
    }

    async function handlelogout(){
        await logout();
        toast({
            title:'Successfully Logout',
            type: 'Success'

        })
        navigate('/auth/signin');
    }

    return(
        <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
               <Avatar className="size-10 hover:opacity-65 transition">
               <AvatarImage src={auth?.user?.avatar}/>
                 <AvatarFallback>{auth?.user?.username[0].toUpperCase()}</AvatarFallback>
               </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                    <DropdownMenuItem onClick={openWorkspaceModals}>
                        <PencilIcon  className="size-4 mr-2 h-10"/>
                        Create Workspace
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <SettingsIcon className="size-4 mr-2 h-10"/>
                        Settings
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handlelogout}>
                        <LogOutIcon className="size-4 mr-2 h-10"/>
                        Logout
                    </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}